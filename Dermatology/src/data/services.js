// Dummy service catalog — placeholder copy/pricing for showcase purposes only.
export const serviceCategories = [
  {
    id: "laser-skin",
    name: "Laser & Skin Treatments",
    icon: "laser",
    description: "Advanced laser technology for smoother, clearer, brighter skin.",
    services: [
      {
        id: "laser-hair-removal",
        name: "Laser Hair Removal",
        description: "Long-lasting hair reduction for face, chin, legs and full body.",
        duration: "30–90 min",
        priceFrom: "PKR 3,500",
      },
      {
        id: "q-switch-laser",
        name: "Q-Switch Laser",
        description: "Targets pigmentation, tattoos and uneven skin tone.",
        duration: "30 min",
        priceFrom: "PKR 5,000",
      },
      {
        id: "carbon-laser-peel",
        name: "Carbon Laser Peel",
        description: "The 'Hollywood Peel' for pore refinement and instant glow.",
        duration: "45 min",
        priceFrom: "PKR 6,000",
      },
    ],
  },
  {
    id: "injectables",
    name: "Injectables & Anti-Aging",
    icon: "syringe",
    description: "Non-surgical treatments to smooth lines and restore volume.",
    services: [
      {
        id: "botox",
        name: "Botox Treatments",
        description: "Softens fine lines and wrinkles for a refreshed look.",
        duration: "20 min",
        priceFrom: "PKR 15,000",
      },
      {
        id: "fillers",
        name: "Dermal Fillers",
        description: "Restores volume and contours cheeks, lips and jawline.",
        duration: "30 min",
        priceFrom: "PKR 18,000",
      },
      {
        id: "mesotherapy",
        name: "Mesotherapy",
        description: "Micro-injections that revitalize and hydrate the skin.",
        duration: "40 min",
        priceFrom: "PKR 8,000",
      },
      {
        id: "thread-facelift",
        name: "Thread Facelift",
        description: "Non-surgical lift and tightening using dissolvable threads.",
        duration: "60 min",
        priceFrom: "PKR 35,000",
      },
      {
        id: "exosomes-skin",
        name: "Exosome Therapy",
        description: "Regenerative treatment to boost collagen and skin repair.",
        duration: "45 min",
        priceFrom: "PKR 22,000",
      },
    ],
  },
  {
    id: "facials",
    name: "Facials & Skin Rejuvenation",
    icon: "sparkle",
    description: "Signature facials tailored to every skin concern.",
    services: [
      { id: "acne-facial", name: "Acne Facial", description: "Deep-cleansing facial to calm breakouts and congestion.", duration: "45 min", priceFrom: "PKR 4,000" },
      { id: "acne-treatment", name: "Acne Treatments", description: "Targeted therapy plans for active acne and scarring.", duration: "45 min", priceFrom: "PKR 5,000" },
      { id: "anti-aging-facial", name: "Anti-Aging Facial", description: "Firming facial that reduces fine lines and boosts elasticity.", duration: "60 min", priceFrom: "PKR 6,500" },
      { id: "chemical-peels", name: "Chemical Peels", description: "Resurfacing peels for tone, texture and radiance.", duration: "30 min", priceFrom: "PKR 5,500" },
      { id: "microneedling", name: "Microneedling", description: "Collagen induction therapy for scars, texture and firmness.", duration: "45 min", priceFrom: "PKR 8,000" },
      { id: "glass-glow-facial", name: "Glass Glow Radiance Facial", description: "Multi-step facial for a dewy, glass-skin finish.", duration: "60 min", priceFrom: "PKR 9,000" },
      { id: "hydrafacial", name: "HydraFacial", description: "Cleanse, extract and hydrate in one soothing treatment.", duration: "45 min", priceFrom: "PKR 10,000" },
      { id: "prp-facial", name: "PRP Facial", description: "Platelet-rich plasma facial for natural rejuvenation.", duration: "60 min", priceFrom: "PKR 15,000" },
      { id: "vampire-facial", name: "Vampire Facial", description: "PRP + microneedling combo for a radiant, youthful glow.", duration: "60 min", priceFrom: "PKR 18,000" },
    ],
  },
  {
    id: "surgery",
    name: "Plastic & Cosmetic Surgery",
    icon: "scalpel",
    description: "Surgical procedures performed by qualified specialists.",
    services: [
      { id: "rhinoplasty", name: "Rhinoplasty", description: "Surgical nose reshaping for form and function.", duration: "Consult required", priceFrom: "From consultation" },
      { id: "otoplasty", name: "Otoplasty", description: "Ear reshaping surgery to correct size or position.", duration: "Consult required", priceFrom: "From consultation" },
      { id: "thread-facelift-surgery", name: "Thread Facelift", description: "Minimally invasive lifting with dissolvable threads.", duration: "Consult required", priceFrom: "From consultation" },
      { id: "surgical-fillers", name: "Fillers", description: "Surgeon-administered volumizing and contouring fillers.", duration: "Consult required", priceFrom: "From consultation" },
      { id: "plastic-surgery-general", name: "All Plastic Surgery Procedures", description: "Full range of cosmetic surgery, tailored after consultation.", duration: "Consult required", priceFrom: "From consultation" },
    ],
  },
  {
    id: "spmu",
    name: "Semi-Permanent Makeup",
    icon: "brush",
    description: "Long-lasting beauty enhancements for effortless everyday looks.",
    services: [
      { id: "lash-extension", name: "Lash Extension", description: "Customized lash sets for fuller, longer-looking lashes.", duration: "90 min", priceFrom: "PKR 6,000" },
      { id: "lip-tint", name: "Lip Tint", description: "Semi-permanent tint for naturally flushed, defined lips.", duration: "60 min", priceFrom: "PKR 12,000" },
    ],
  },
  {
    id: "hair-restoration",
    name: "Hair Restoration",
    icon: "strand",
    description: "Regenerative treatments to restore hair density and strength.",
    services: [
      { id: "prp-hair", name: "PRP Hair Treatment", description: "Platelet-rich plasma therapy to stimulate hair growth.", duration: "45 min", priceFrom: "PKR 12,000" },
      { id: "exosomes-hair", name: "Exosome Hair Therapy", description: "Advanced regenerative treatment for thinning hair.", duration: "45 min", priceFrom: "PKR 20,000" },
    ],
  },
  {
    id: "iv-therapy",
    name: "IV Therapy & Wellness",
    icon: "drip",
    description: "Vitamin infusions to boost energy, immunity and skin health.",
    services: [
      { id: "iv-therapy", name: "IV Therapy", description: "Customized vitamin & hydration drips for wellness and glow.", duration: "45 min", priceFrom: "PKR 9,000" },
    ],
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy & Pain Management",
    icon: "pulse",
    description: "Rehabilitation and pain-relief programs led by physiotherapists.",
    services: [
      { id: "stroke-management", name: "Stroke Management", description: "Rehabilitation programs to restore movement and function.", duration: "45 min", priceFrom: "PKR 3,000" },
      { id: "sciatica", name: "Sciatica Treatment", description: "Targeted therapy to relieve sciatic nerve pain.", duration: "45 min", priceFrom: "PKR 3,000" },
      { id: "frozen-shoulder", name: "Frozen Shoulder Therapy", description: "Mobility-restoring treatment for stiff, painful shoulders.", duration: "45 min", priceFrom: "PKR 3,000" },
      { id: "sports-injuries", name: "Sports Injury Rehab", description: "Recovery programs for sprains, strains and sports injuries.", duration: "45 min", priceFrom: "PKR 3,500" },
      { id: "backache", name: "Backache Treatment", description: "Relief-focused therapy for chronic and acute back pain.", duration: "45 min", priceFrom: "PKR 3,000" },
      { id: "cervicogenic-headache", name: "Cervicogenic Headache Therapy", description: "Neck-focused treatment to relieve headache-related pain.", duration: "45 min", priceFrom: "PKR 3,000" },
      { id: "tkr-thr-care", name: "Pre & Post TKR/THR Management", description: "Rehab support before and after knee/hip replacement.", duration: "45 min", priceFrom: "PKR 3,500" },
      { id: "muscular-pain", name: "Muscular Pain Therapy", description: "Manual therapy to release tension and relieve pain.", duration: "45 min", priceFrom: "PKR 3,000" },
      { id: "acupuncture-cupping", name: "Acupuncture & Cupping", description: "Traditional therapies to ease pain and improve circulation.", duration: "45 min", priceFrom: "PKR 4,000" },
      { id: "physio-home-sessions", name: "Physiotherapy Home Sessions", description: "Professional physiotherapy delivered at your doorstep.", duration: "60 min", priceFrom: "PKR 5,000" },
    ],
  },
];

export const allServices = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({ ...service, category: category.name }))
);

export const featuredServices = [
  "laser-hair-removal",
  "botox",
  "hydrafacial",
  "prp-facial",
  "microneedling",
  "lash-extension",
].map((id) => allServices.find((service) => service.id === id));
