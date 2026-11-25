import { useEffect } from "react";
import Icon from "./ui/Icon.jsx";
import BeforeAfterSlider from "./BeforeAfterSlider.jsx";

export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const item = items[activeIndex];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((activeIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((activeIndex - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/90 p-4 animate-fade-up"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} before and after`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <Icon name="close" className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex - 1 + items.length) % items.length);
        }}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
      >
        <Icon name="chevronLeft" className="h-5 w-5" />
      </button>

      <div className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <BeforeAfterSlider item={item} />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex + 1) % items.length);
        }}
        aria-label="Next image"
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
      >
        <Icon name="chevronRight" className="h-5 w-5" />
      </button>
    </div>
  );
}
