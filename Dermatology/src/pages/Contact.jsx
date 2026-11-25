import Container from "../components/ui/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Icon from "../components/ui/Icon.jsx";
import BookingForm from "../components/BookingForm.jsx";
import HoursTable from "../components/HoursTable.jsx";
import MapEmbed from "../components/MapEmbed.jsx";
import { clinicInfo } from "../data/clinicInfo.js";

const contactCards = [
  { icon: "phone", label: "Call Us", value: clinicInfo.phoneDisplay, href: `tel:${clinicInfo.phone}` },
  { icon: "whatsapp", label: "WhatsApp", value: clinicInfo.phoneDisplay, href: `https://wa.me/${clinicInfo.whatsapp.replace("+", "")}` },
  { icon: "mail", label: "Email", value: clinicInfo.email, href: `mailto:${clinicInfo.email}` },
  { icon: "mapPin", label: "Visit Us", value: clinicInfo.address.full, href: clinicInfo.mapLink },
];

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-b from-blush-50 to-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Book Your Appointment"
            description="Fill out the form below and our team will confirm your appointment. Prefer to talk? Call or WhatsApp us directly."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex flex-col items-start gap-3 rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-blush-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-50 text-blush-600">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-900">{card.label}</p>
                <p className="mt-1 text-sm text-ink-400">{card.value}</p>
              </div>
            </a>
          ))}
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-10 lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-ink-900">Request an Appointment</h2>
            <p className="mt-2 text-sm text-ink-400">
              Tell us a bit about what you're looking for and we'll be in touch to confirm your slot.
            </p>
            <BookingForm className="mt-8" />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-3xl border border-ink-100 bg-white p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-ink-900">Clinic Hours</h3>
              <div className="mt-4">
                <HoursTable />
              </div>
            </div>
            <MapEmbed className="min-h-72 flex-1" />
          </div>
        </Container>
      </section>
    </>
  );
}
