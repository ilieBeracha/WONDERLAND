interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface NextEventProps {
  timeLeft: TimeLeft;
}

const NextEvent: React.FC<NextEventProps> = ({ timeLeft }) => {
  return (
    <div className="bg-gray-800 from shadow-lg shadow-gray-900/50 rounded-xl py-16 px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-20">
        <div>
          <h3 className="text-6xl font-bold text-white mb-2">Next Event</h3>
          <p className="text-gray-400">
            Tickets for my next event are already available.
          </p>
        </div>

        <div className="flex gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              {timeLeft.days}
            </div>
            <div className="text-gray-400">DAYS</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-gray-400">HOURS</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-gray-400">MINUTES</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-gray-400">SECONDS</div>
          </div>
        </div>

        <button className="bg-brightOrange hover:bg-brightYellow text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold whitespace-nowrap">
          BUY TICKETS
        </button>
      </div>
    </div>
  );
};

export default NextEvent;
