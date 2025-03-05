import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause } from "lucide-react";

export default function AudioPlayer() {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 41,
    hours: 23,
    minutes: 59,
    seconds: 51,
  });

  useEffect(() => {
    if (waveformRef.current && !wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "rgba(255, 255, 255)",
        progressColor: "rgba(255, 255, 255)",
        cursorColor: "rgba(255, 255, 255)",
        barWidth: 2,
        barGap: 1,
        barRadius: 1,
        height: 80,
        cursorWidth: 0,
        normalize: true,
        minPxPerSec: 100,
        fillParent: true,
        mediaControls: true,
        backend: "WebAudio",
        url: "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3",
      });

      wavesurfer.current.on("ready", () => {
        setIsLoading(false);
      });

      wavesurfer.current.on("play", () => setIsPlaying(true));
      wavesurfer.current.on("pause", () => setIsPlaying(false));
      wavesurfer.current.on("error", (err) => {
        console.error("WaveSurfer error:", err);
        setIsLoading(false);
      });
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
        wavesurfer.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const togglePlayPause = () => {
    if (wavesurfer.current && !isLoading) {
      wavesurfer.current.playPause();
    }
  };

  return (
    <section className="relative bg-gray-900 py-14 overflow-hidden shadow-lg shadow-gray-900/50">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/3 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-16 right-1/4 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-l font-medium text-white mb-3 uppercase tracking-[0.2em]">
          New Track
        </h2>
        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Feel the Rhythm
        </div>

        <div className="backdrop-blur-md  rounded-3xl p-6 mt-10 flex  items-center">
          <button
            onClick={togglePlayPause}
            disabled={isLoading}
            className={`${
              isLoading
                ? "bg-gray-500/50"
                : "bg-gray-200/10 hover:bg-gray-200/20 hover:scale-105"
            } text-white p-6 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm flex items-center justify-center`}
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </button>

          <div
            ref={waveformRef}
            className="w-full mt-6 rounded-xl overflow-hidden px-1 "
          />
        </div>
      </div>
    </section>
  );
}
