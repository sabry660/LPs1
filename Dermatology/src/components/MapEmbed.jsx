import { clinicInfo } from "../data/clinicInfo.js";

export default function MapEmbed({ className = "" }) {
  return (
    <div className={`overflow-hidden rounded-2xl ring-1 ring-ink-100 ${className}`}>
      <iframe
        title={`${clinicInfo.name} location map`}
        src={clinicInfo.mapEmbedSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
