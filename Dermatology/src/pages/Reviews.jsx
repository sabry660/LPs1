import Container from "../components/ui/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";
import StarRating from "../components/StarRating.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { reviews, reviewsSummary } from "../data/reviews.js";

export default function Reviews() {
  return (
    <>
      <section className="bg-gradient-to-b from-blush-50 to-ink-50 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-600">Client Reviews</span>
          <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl">What Our Clients Say</h1>
          <div className="mt-2 flex flex-col items-center gap-2">
            <p className="font-display text-5xl font-semibold text-ink-900">{reviewsSummary.average}</p>
            <StarRating rating={5} className="h-5 w-5" />
            <p className="text-sm text-ink-400">Based on {reviewsSummary.total}+ Google reviews</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 rounded-3xl bg-blush-50 p-10 text-center">
            <SectionHeading title="Had a great experience?" description="We'd love to hear about your visit — reviews help other clients feel confident about their care." />
            <Button href="https://www.google.com/search?q=leave+a+google+review" target="_blank" rel="noreferrer" variant="gold" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
              Leave a Google Review
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
