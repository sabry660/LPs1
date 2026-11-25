import { businessHours } from "../data/clinicInfo.js";

const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function HoursTable({ className = "" }) {
  return (
    <dl className={`divide-y divide-ink-100 ${className}`}>
      {businessHours.map(({ day, hours }) => {
        const isToday = day === todayName;
        return (
          <div key={day} className="flex items-center justify-between py-2.5 text-sm">
            <dt className={isToday ? "font-semibold text-ink-900" : "text-ink-500"}>
              {day}
              {isToday && <span className="ml-2 rounded-full bg-blush-100 px-2 py-0.5 text-xs text-blush-600">Today</span>}
            </dt>
            <dd className={hours === "Closed" ? "text-ink-300" : "text-ink-700"}>{hours}</dd>
          </div>
        );
      })}
    </dl>
  );
}
