const paths = {
  laser: "M4 20 20 4 M14 4h6v6 M9 15l-3 3 3 3 3-3-3-3Z",
  syringe: "M19 5 5 19 M15 3l6 6 M4 20l3-1 1-3-3-3-1 3-1 3 1 1Z M11 7l6 6",
  sparkle: "M12 2v4 M12 18v4 M2 12h4 M18 12h4 M5 5l3 3 M16 16l3 3 M19 5l-3 3 M8 16l-3 3",
  scalpel: "M3 21 14 10 M14 10l7-7 M14 10a3 3 0 1 0 4-4",
  brush: "M4 20c3-1 4-3 4-6l9-9 3 3-9 9c-3 0-5 1-6 4Z M14 5l3 3",
  strand: "M6 3c3 4-2 6 2 10s-1 6 2 8 M12 3c3 4-2 6 2 10s-1 6 2 8",
  drip: "M12 3c3 4 6 8 6 12a6 6 0 0 1-12 0c0-4 3-8 6-12Z",
  pulse: "M3 12h4l2-7 4 14 2-7h6",
  star: "M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8L6.7 20l1-6L3.4 9.9l6-.9L12 3.5Z",
  phone: "M6.6 4h3l1.4 4-2 1.5a12 12 0 0 0 5.5 5.5L16 13l4 1.4v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.6 6.2 2 2 0 0 1 6.6 4Z",
  mail: "M4 5h16v14H4z M4 6l8 7 8-7",
  mapPin: "M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3.5 2",
  menu: "M4 7h16 M4 12h16 M4 17h16",
  close: "M6 6l12 12 M18 6 6 18",
  chevronLeft: "M15 5 8 12l7 7",
  chevronRight: "M9 5l7 7-7 7",
  check: "M5 13l4 4L19 7",
  instagram: "M4 4h16v16H4z M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z M17 6.5h.01",
  facebook: "M14 21v-8h3l1-4h-4V6.5A1.5 1.5 0 0 1 15.5 5H18V1h-3a5 5 0 0 0-5 5v3H7v4h3v8h4Z",
  whatsapp: "M4 20l1.3-4A8 8 0 1 1 8.5 19L4 20Z M8.5 9.5c0 3.5 3 6.5 6.5 6.5",
  quote: "M7 8a3 3 0 0 0-3 3v3h4v-6H7Z M15 8a3 3 0 0 0-3 3v3h4v-6h-1Z",
  arrowRight: "M5 12h14 M13 6l6 6-6 6",
  calendar: "M4 6h16v14H4z M4 10h16 M8 3v5 M16 3v5",
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.75, filled = false }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
