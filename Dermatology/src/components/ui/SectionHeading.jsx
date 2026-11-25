export default function SectionHeading({ eyebrow, title, description, align = "center", tone = "light", className = "" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  const titleColor = tone === "dark" ? "text-white" : "text-ink-900";
  const descriptionColor = tone === "dark" ? "text-ink-100/70" : "text-ink-400";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-600">{eyebrow}</span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-semibold ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`max-w-2xl text-base sm:text-lg ${descriptionColor}`}>{description}</p>
      )}
    </div>
  );
}
