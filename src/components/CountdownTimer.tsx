import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2025-11-28T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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
        {String(timeLeft.days).padStart(2, "0")}d
      </span>
      <span className="text-foreground">:</span>
      <span className="bg-background/20 px-1.5 py-0.5 rounded text-foreground">
        {String(timeLeft.hours).padStart(2, "0")}h
      </span>
      <span className="text-foreground">:</span>
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