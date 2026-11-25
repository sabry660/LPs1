export default function ServiceCard({ service }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blush-100">
      <h3 className="font-display text-lg font-semibold text-ink-900">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-400">{service.description}</p>
      <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-4 text-sm">
        <span className="text-ink-400">{service.duration}</span>
        <span className="font-semibold text-blush-600">{service.priceFrom}</span>
      </div>
    </div>
  );
}
