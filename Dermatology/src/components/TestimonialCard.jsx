import Icon from "./ui/Icon.jsx";
import StarRating from "./StarRating.jsx";

export default function TestimonialCard({ review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100">
      <Icon name="quote" className="h-6 w-6 text-blush-300" />
      <StarRating rating={review.rating} className="mt-3 h-4 w-4" />
      <blockquote className="mt-3 flex-1 text-sm text-ink-600">&ldquo;{review.text}&rdquo;</blockquote>
      <figcaption className="mt-4 flex items-center justify-between border-t border-ink-100 pt-4 text-sm">
        <span className="font-semibold text-ink-900">{review.name}</span>
        <span className="text-ink-400">{review.date}</span>
      </figcaption>
    </figure>
  );
}
