"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export default function EventCountdown({
  date,
  time,
}: {
  date: string;
  time: string;
}) {
  const target = useMemo(() => new Date(`${date}T${time}:00`), [date, time]);

  const getTimeLeft = useCallback(() => {
    const diff = target.getTime() - Date.now();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [target]);

  // Start with zeros to match the server render
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [getTimeLeft]);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-red-600/20 bg-zinc-900 p-6 text-center"
        >
          <p className="text-4xl font-black text-red-500">
            {String(item.value).padStart(2, "0")}
          </p>

          <p className="mt-2 uppercase tracking-[0.25em] text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
