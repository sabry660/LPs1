import { useState } from "react";
import Icon from "./ui/Icon.jsx";

export default function BeforeAfterSlider({ item, className = "" }) {
  const [position, setPosition] = useState(50);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="relative aspect-4/3 w-full touch-none overflow-hidden rounded-2xl select-none">
        <div className="absolute inset-0 flex items-end p-4">
          <img
            src={item.image}
            alt={`${item.title} — after`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <span className="relative rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink-800">After</span>
        </div>
        <div
          className="absolute inset-0 flex items-end p-4"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={item.image}
            alt={`${item.title} — before`}
            className="absolute inset-0 h-full w-full object-cover grayscale brightness-75 contrast-75"
            loading="lazy"
          />
          <span className="relative rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink-800">Before</span>
        </div>
        <div
          className="absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center bg-white"
          style={{ left: `${position}%` }}
        >
          <span className="flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-white text-ink-800 shadow-md">
            <Icon name="chevronLeft" className="h-3.5 w-3.5" />
            <Icon name="chevronRight" className="h-3.5 w-3.5" />
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Before and after comparison slider for ${item.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <div>
        <p className="font-semibold text-ink-900">{item.title}</p>
        <p className="text-sm text-ink-400">{item.category}</p>
      </div>
    </div>
  );
}
