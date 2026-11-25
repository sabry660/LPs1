import { useState } from "react";
import Container from "../components/ui/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Icon from "../components/ui/Icon.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { galleryItems } from "../data/gallery.js";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Real Results"
          title="Before & After Gallery"
          description="Drag the slider on any card to compare results. (Placeholder visuals — replace with real client photos, with consent, when adapting this template.)"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush-500"
              aria-label={`View ${item.title} before and after in full screen`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-900/70 via-transparent to-transparent p-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-xs text-white/70">{item.category}</p>
              </div>
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-800 opacity-0 transition-opacity group-hover:opacity-100">
                <Icon name="sparkle" className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </Container>

      {activeIndex !== null && (
        <Lightbox
          items={galleryItems}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
