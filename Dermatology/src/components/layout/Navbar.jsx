import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../ui/Icon.jsx";
import Button from "../ui/Button.jsx";
import { clinicInfo } from "../../data/clinicInfo.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? "text-blush-600" : "text-ink-600 hover:text-ink-900"}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${scrolled ? "bg-ink-50/95 backdrop-blur shadow-sm" : "bg-ink-50/80 backdrop-blur"}`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <NavLink to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-ink-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-gold-300">
            <Icon name="sparkle" className="h-4 w-4" />
          </span>
          {clinicInfo.name}
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button to="/contact" variant="gold">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink-800 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-ink-50 md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${isActive ? "bg-blush-100 text-blush-600" : "text-ink-600"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="gold" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
