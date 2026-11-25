import { useRef, useState } from "react";
import Container from "../components/ui/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { serviceCategories } from "../data/services.js";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const resultsTopRef = useRef(null);
  const filterBarRef = useRef(null);

  const categories = activeCategory === "all"
    ? serviceCategories
    : serviceCategories.filter((c) => c.id === activeCategory);

  const handleFilterClick = (id) => {
    setActiveCategory(id);
    // Wait for the filtered list to commit and layout to settle before measuring —
    // scrolling immediately can race with React's re-render on mobile browsers.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = resultsTopRef.current;
        if (!target) return;
        // Use intrinsic offsetHeight (unaffected by whether the sticky bars are
        // currently "stuck" or not) rather than getBoundingClientRect, which reads
        // wrong when we're scrolled past the sticky container and it has un-stuck.
        const header = document.querySelector("header");
        const stickyOffset = (header?.offsetHeight ?? 0) + (filterBarRef.current?.offsetHeight ?? 0);
        const targetY = target.getBoundingClientRect().top + window.scrollY - stickyOffset - 16;
        window.scrollTo({ top: Math.max(targetY, 0), behavior: "smooth" });
      });
    });
  };

  return (
    <>
      <section className="bg-gradient-to-b from-blush-50 to-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Treatments"
            title="Our Full Range of Services"
            description="From laser and injectables to cosmetic surgery and physiotherapy — explore treatments tailored to your goals."
          />
        </Container>
      </section>

      <section ref={filterBarRef} className="sticky top-[73px] z-30 border-b border-ink-100 bg-ink-50/95 backdrop-blur">
        <Container className="flex gap-2 overflow-x-auto py-4">
          <FilterPill active={activeCategory === "all"} onClick={() => handleFilterClick("all")}>
            All Services
          </FilterPill>
          {serviceCategories.map((category) => (
            <FilterPill
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => handleFilterClick(category.id)}
            >
              {category.name}
            </FilterPill>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-16">
          <div ref={resultsTopRef} className="scroll-mt-36" />
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-36">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-50 text-blush-600">
                  <Icon name={category.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink-900">{category.name}</h2>
                  <p className="text-sm text-ink-400">{category.description}</p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-ink-900 py-16 text-center text-white sm:py-20">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl font-semibold">Not sure which treatment is right for you?</h2>
          <p className="max-w-xl text-ink-100/70">
            Book a free consultation and our specialists will help you build a personalized treatment plan.
          </p>
          <Button to="/contact" variant="gold" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
            Book a Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}

function FilterPill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "bg-ink-800 text-white" : "bg-white text-ink-600 ring-1 ring-ink-100 hover:bg-ink-100"
      }`}
    >
      {children}
    </button>
  );
}
