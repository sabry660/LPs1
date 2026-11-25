import { Link } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import HoursTable from "../components/HoursTable.jsx";
import MapEmbed from "../components/MapEmbed.jsx";
import StarRating from "../components/StarRating.jsx";
import { serviceCategories, featuredServices } from "../data/services.js";
import { reviews, reviewsSummary } from "../data/reviews.js";
import { clinicInfo } from "../data/clinicInfo.js";
import heroImage from "../assets/images/hero-facial-care.jpg";

const whyUs = [
  { icon: "sparkle", title: "Certified Specialists", text: "Every treatment is led by licensed dermatologists, physicians and physiotherapists." },
  { icon: "check", title: "Modern Technology", text: "FDA-cleared lasers and devices for safe, effective, and comfortable treatments." },
  { icon: "quote", title: "5-Star Rated Care", text: `Rated ${reviewsSummary.average}/5 from ${reviewsSummary.total}+ happy clients.` },
  { icon: "clock", title: "Flexible Scheduling", text: "Evening and weekend slots available, including in-home physiotherapy sessions." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 via-ink-50 to-ink-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blush-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />
        <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blush-600 ring-1 ring-blush-200">
              Aesthetic &amp; Wellness Clinic in {clinicInfo.address.city}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Where Confidence <span className="text-blush-600">Meets Care</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-500">
              From advanced laser treatments and injectables to cosmetic surgery and physiotherapy —
              {" " + clinicInfo.name} blends medical expertise with a calming, luxury experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="gold" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
                Book a Consultation
              </Button>
              <Button to="/services" variant="outline">
                Explore Services
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <StarRating rating={5} className="h-5 w-5" />
              <p className="text-sm text-ink-500">
                <span className="font-semibold text-ink-800">{reviewsSummary.average}/5</span> from {reviewsSummary.total}+ Google reviews
              </p>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <img
              src={heroImage}
              alt="Specialist performing a facial skincare treatment"
              className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-xl"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-ink-100 sm:block">
              <p className="font-display text-3xl font-semibold text-ink-900">12+</p>
              <p className="text-sm text-ink-400">Years of combined clinical experience</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink-100 bg-white py-10">
        <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {whyUs.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-50 text-blush-600">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-ink-900">{item.title}</p>
              <p className="text-xs text-ink-400">{item.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Signature Treatments"
            title="Our Most Loved Services"
            description="A curated selection of our most requested aesthetic and wellness treatments."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button to="/services" variant="outline" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-ink-900 py-20 text-white sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-3">
          {serviceCategories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              to="/services"
              className="group flex items-start gap-4 rounded-2xl border border-white/10 p-6 transition-colors hover:border-gold-400/60 hover:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300 group-hover:bg-gold-400 group-hover:text-ink-900">
                <Icon name={category.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm text-ink-100/70">{category.description}</p>
              </div>
            </Link>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Client Stories"
            title="Loved by Our Clients"
            description="Real feedback from clients who trusted us with their aesthetic and wellness journey."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button to="/reviews" variant="outline" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
              Read All Reviews
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-blush-50 py-20 sm:py-24">
        <Container className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink-100 sm:p-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Visit Us" title="Clinic Hours & Location" />
            <p className="mt-4 text-ink-500">{clinicInfo.address.full}</p>
            <div className="mt-6">
              <HoursTable />
            </div>
            <Button to="/contact" variant="gold" className="mt-8" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
              Book Your Visit
            </Button>
          </div>
          <MapEmbed className="min-h-72" />
        </Container>
      </section>
    </>
  );
}
