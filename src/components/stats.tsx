
"use client";

import { useEffect, useState } from "react";
import { Cpu, Code, Coffee, Award } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 12, icon: Code },
  { label: "Technologies Mastered", value: 15, icon: Cpu },
  { label: "Cups of Coffee", value: 450, icon: Coffee },
  { label: "Certifications", value: 8, icon: Award },
];

function Counter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">{count}+</p>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black/40 flex items-center justify-center mb-6 shadow-xl border border-primary/10">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <Counter end={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
