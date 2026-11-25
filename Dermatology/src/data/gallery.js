import laserHairRemoval from "../assets/images/gallery-laser-hair-removal.jpg";
import hydrafacial from "../assets/images/gallery-hydrafacial.jpg";
import botox from "../assets/images/gallery-botox.jpg";
import microneedling from "../assets/images/gallery-microneedling.jpg";
import vampireFacial from "../assets/images/gallery-vampire-facial.jpg";
import prpHair from "../assets/images/gallery-prp-hair.jpg";

// Placeholder gallery entries — each "before/after" pair reuses one stock photo with a
// filter applied, since we don't have consented real client before/after photography.
// Replace `image` with real client photos (with consent) when adapting this template.
export const galleryItems = [
  { id: 1, title: "Laser Hair Removal", category: "Laser & Skin", image: laserHairRemoval },
  { id: 2, title: "HydraFacial Glow", category: "Facials", image: hydrafacial },
  { id: 3, title: "Botox Refresh", category: "Injectables", image: botox },
  { id: 4, title: "Acne Scar Microneedling", category: "Facials", image: microneedling },
  { id: 5, title: "Vampire Facial Radiance", category: "Facials", image: vampireFacial },
  { id: 6, title: "PRP Hair Density", category: "Hair Restoration", image: prpHair },
];
