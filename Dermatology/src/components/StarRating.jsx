import Icon from "./ui/Icon.jsx";

export default function StarRating({ rating, className = "h-4 w-4" }) {
  return (
    <div className="flex items-center gap-0.5 text-gold-500" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" filled={i < rating} className={`${className} ${i < rating ? "" : "text-ink-100"}`} />
      ))}
    </div>
  );
}
