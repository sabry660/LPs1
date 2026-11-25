import Container from "../components/ui/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";
import { clinicInfo } from "../data/clinicInfo.js";
import spaInteriorImage from "../assets/images/spa-interior.jpg";
import doctorAmna from "../assets/images/doctor-amna.jpg";
import doctorHassan from "../assets/images/doctor-hassan.jpg";
import doctorSara from "../assets/images/doctor-sara.jpg";

const values = [
  { icon: "check", title: "Safety First", text: "Every procedure follows strict medical protocols using FDA-cleared and CE-certified technology." },
  { icon: "sparkle", title: "Personalized Care", text: "No two treatment plans are alike — every visit begins with an in-depth consultation." },
  { icon: "quote", title: "Honest Guidance", text: "We recommend what genuinely benefits you, never upselling unnecessary treatments." },
  { icon: "pulse", title: "Whole-Body Wellness", text: "From skin to muscles, we treat aesthetics and physical wellbeing as one connected journey." },
];

const team = [
  { name: "Dr. Amna Sheikh", role: "Dermatologist & Aesthetic Physician", bio: "10+ years in laser dermatology and injectables.", photo: doctorAmna },
  { name: "Dr. Hassan Raza", role: "Plastic & Cosmetic Surgeon", bio: "Specializes in facial rejuvenation and reconstructive surgery.", photo: doctorHassan },
  { name: "Dr. Sara Iqbal", role: "Lead Physiotherapist", bio: "Focused on sports recovery and post-surgical rehabilitation.", photo: doctorSara },
];

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-blush-50 to-ink-50 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blush-600">About Us</span>
            <h1 className="mt-4 text-3xl font-semibold text-ink-900 sm:text-4xl">
              A Clinic Built Around You
            </h1>
            <p className="mt-5 text-ink-500">
              {clinicInfo.name} was founded with a simple belief: aesthetic and wellness care should feel as good as
              it looks. We bring together board-certified dermatologists, surgeons and physiotherapists under one
              roof, combining advanced technology with a warm, judgment-free environment.
            </p>
            <p className="mt-4 text-ink-500">
              Whether you're here for a subtle refresh, a surgical procedure, or recovery from an injury, our team
              designs a plan around your goals — not a one-size-fits-all script.
            </p>
          </div>
          <img
            src={spaInteriorImage}
            alt="Interior of the Beauty Aesthetics clinic"
            className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-xl"
            loading="lazy"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Our Values" title="What Guides Every Treatment" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-ink-100 bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-50 text-blush-600">
                  <Icon name={value.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-400">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-900 py-16 text-white sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading align="left" tone="dark" eyebrow="Meet the Team" title="Specialists You Can Trust" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-white/10 p-6">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="aspect-square w-16 rounded-full object-cover"
                />
                <h3 className="mt-4 font-display text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gold-300">{member.role}</p>
                <p className="mt-2 text-sm text-ink-100/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 text-center sm:py-20">
        <Container className="flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl font-semibold text-ink-900">Ready to start your journey?</h2>
          <Button to="/contact" variant="gold" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
            Book a Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}
