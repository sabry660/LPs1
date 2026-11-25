import { useState } from "react";
import Icon from "./ui/Icon.jsx";
import Button from "./ui/Button.jsx";
import { serviceCategories } from "../data/services.js";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!/^[\d+\s-]{7,15}$/.test(form.phone.trim())) errors.phone = "Please enter a valid phone number.";
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Please enter a valid email address.";
  if (!form.service) errors.service = "Please select a treatment.";
  return errors;
}

export default function BookingForm({ className = "" }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Demo site — no backend. Replace with a real API call when adapting this template.
    console.log("Booking request submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`flex flex-col items-center gap-3 rounded-2xl bg-blush-50 p-10 text-center ${className}`}>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blush-500 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="font-display text-xl font-semibold text-ink-900">Request Received</h3>
        <p className="max-w-sm text-sm text-ink-500">
          Thank you, {form.name.split(" ")[0]}! This is a demo form — no request was actually sent, but in a live
          site our team would contact you shortly to confirm your appointment.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`grid gap-5 ${className}`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className={inputClass(errors.name)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            className={inputClass(errors.phone)}
            placeholder="+92 3XX XXXXXXX"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email (optional)" error={errors.email}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className={inputClass(errors.email)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Preferred Date (optional)">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className={inputClass()}
          />
        </Field>
      </div>

      <Field label="Treatment" error={errors.service}>
        <select name="service" value={form.service} onChange={handleChange} className={inputClass(errors.service)}>
          <option value="">Select a treatment</option>
          {serviceCategories.map((category) => (
            <optgroup key={category.id} label={category.name}>
              {category.services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </Field>

      <Field label="Message (optional)">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className={inputClass()}
          placeholder="Tell us anything that will help us prepare for your visit"
        />
      </Field>

      <Button type="submit" variant="gold" className="w-full sm:w-fit" icon={<Icon name="arrowRight" className="h-4 w-4" />}>
        Request Appointment
      </Button>
      <p className="text-xs text-ink-300">
        This is a demo booking form for a portfolio project — submissions are not sent anywhere.
      </p>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-ink-700">{label}</span>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `rounded-xl border bg-white px-4 py-3 text-sm text-ink-800 outline-none transition-colors focus:border-blush-400 ${
    error ? "border-red-300" : "border-ink-100"
  }`;
}
