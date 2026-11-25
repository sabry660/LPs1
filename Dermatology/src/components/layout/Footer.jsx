import { Link } from "react-router-dom";
import Icon from "../ui/Icon.jsx";
import Container from "../ui/Container.jsx";
import { clinicInfo, businessHours } from "../../data/clinicInfo.js";
import { serviceCategories } from "../../data/services.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-100">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-ink-900">
              <Icon name="sparkle" className="h-4 w-4" />
            </span>
            {clinicInfo.name}
          </Link>
          <p className="mt-4 text-sm text-ink-100/70">{clinicInfo.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={clinicInfo.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold-400 hover:text-ink-900"
            >
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a
              href={clinicInfo.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold-400 hover:text-ink-900"
            >
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${clinicInfo.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold-400 hover:text-ink-900"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-100/80">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-white">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">Popular Treatments</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-100/80">
            {serviceCategories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <Link to="/services" className="hover:text-white">{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-100/80">
            <li className="flex items-start gap-2">
              <Icon name="mapPin" className="h-4 w-4 shrink-0 mt-0.5 text-gold-300" />
              {clinicInfo.address.full}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-gold-300" />
              <a href={`tel:${clinicInfo.phone}`} className="hover:text-white">{clinicInfo.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-gold-300" />
              <a href={`mailto:${clinicInfo.email}`} className="hover:text-white">{clinicInfo.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="clock" className="h-4 w-4 shrink-0 mt-0.5 text-gold-300" />
              <span>{businessHours[0].hours} · Fri {businessHours[4].hours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-2 py-6 text-xs text-ink-100/60 sm:flex-row sm:justify-between">
          <p>&copy; {year} {clinicInfo.name}. All rights reserved.</p>
          <p>Demo website with placeholder content — built for portfolio purposes.</p>
        </Container>
      </div>
    </footer>
  );
}
