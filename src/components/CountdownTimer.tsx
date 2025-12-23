import { useEffect, useState } from "react";

interface TimeLeft {
  minutes: number;
  seconds: number;
}

const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;
const SESSION_KEY = "countdown_start_time";

const CountdownTimer = () => {
  const getStartTime = (): number => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      return parseInt(stored, 10);
    }
    const now = Date.now();
    sessionStorage.setItem(SESSION_KEY, now.toString());
    return now;
  };

  const calculateTimeLeft = (): TimeLeft => {
    const startTime = getStartTime();
    const endTime = startTime + FIFTEEN_MINUTES_MS;
    const now = Date.now();
    const difference = endTime - now;

    if (difference > 0) {
      return {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-1.5 items-center justify-center text-xs font-medium">
      <span className="bg-background/20 px-1.5 py-0.5 rounded text-foreground">
        {String(timeLeft.minutes).padStart(2, "0")}m
      </span>
      <span className="text-foreground">:</span>
      <span className="bg-background/20 px-1.5 py-0.5 rounded text-foreground">
        {String(timeLeft.seconds).padStart(2, "0")}s
      </span>
    </div>
  );
};

export default CountdownTimer;
