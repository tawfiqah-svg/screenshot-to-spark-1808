// All editable site content lives here. Swap images by replacing the imports below.
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import performance from "@/assets/performance.jpg";
import prenatal from "@/assets/prenatal.jpg";

export const images = { hero, studio, performance, prenatal };

export const nav = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/team", label: "Team" },
  { to: "/locations", label: "Locations" },
  { to: "/careers", label: "Careers" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
] as const;

export const subBrands = ["FORGED by ReFormd", "Shelter", "The Laboratory", "BFT"];

export const programs = [
  {
    title: "Weight loss & muscle mass",
    image: hero,
    text: "A structured plan to lose fat, build lean muscle and keep the results, with coaching on every session and every meal.",
  },
  {
    title: "Peak performance",
    image: performance,
    text: "Test, train and track like an athlete. Get stronger, faster and more resilient for your sport or your next challenge.",
  },
  {
    title: "Vitality & longevity",
    image: studio,
    text: "Strength, mobility and energy that last. Training designed to keep you moving well for decades.",
  },
  {
    title: "Prenatal & postpartum",
    image: prenatal,
    text: "Safe, specialist coaching through pregnancy and beyond, to help you feel strong and confident in your body again.",
  },
];

export const addOns = [
  { title: "Shelter by ReFormd", text: "Access to our recovery spaces." },
  {
    title: "FORGED by ReFormd",
    text: "Additional tests: Health baseline bundle, PB bundle.",
  },
];

export const reviews = [
  { name: "Sarah L.", rating: 5, text: "Lost 9kg in four months and I've never felt stronger. My coach made it feel effortless to stay consistent." },
  { name: "Daniel T.", rating: 5, text: "The private studio is a game changer. No waiting, no crowds, just focused training around my work schedule." },
  { name: "Priya K.", rating: 5, text: "Trained with ReFormd through my pregnancy and after. Supportive, knowledgeable and genuinely caring." },
  { name: "Marcus W.", rating: 5, text: "The testing and tracking keeps me honest. I can see every improvement in numbers, not just the mirror." },
  { name: "Jia Hui C.", rating: 5, text: "Better sleep, more energy and finally a deadlift I'm proud of. Worth every session." },
];

export type LocationType = "studio" | "gym";
export type Location = {
  name: string;
  address: string;
  mrt: string;
  type: LocationType;
  lat: number;
  lng: number;
  image: string;
};

const imgs = [studio, hero, performance];
const raw: Omit<Location, "image">[] = [
  { name: "Tanjong Pagar", address: "10 Anson Road, #02-01", mrt: "Tanjong Pagar", type: "studio", lat: 1.2766, lng: 103.8458 },
  { name: "Raffles Place", address: "1 Raffles Place, #04-10", mrt: "Raffles Place", type: "studio", lat: 1.2841, lng: 103.8515 },
  { name: "Marina Bay", address: "8 Marina View, #03-05", mrt: "Downtown", type: "gym", lat: 1.2801, lng: 103.8545 },
  { name: "Orchard", address: "391 Orchard Road, #05-02", mrt: "Orchard", type: "studio", lat: 1.3036, lng: 103.8318 },
  { name: "Novena", address: "10 Sinaran Drive, #02-30", mrt: "Novena", type: "studio", lat: 1.3204, lng: 103.8438 },
  { name: "Robertson Quay", address: "60 Robertson Quay, #01-12", mrt: "Fort Canning", type: "gym", lat: 1.2905, lng: 103.8380 },
  { name: "Holland Village", address: "20 Lorong Mambong, #02-01", mrt: "Holland Village", type: "studio", lat: 1.3112, lng: 103.7958 },
  { name: "Bukit Timah", address: "6 Jalan Kuras, #01-03", mrt: "Sixth Avenue", type: "studio", lat: 1.3310, lng: 103.7970 },
  { name: "Tiong Bahru", address: "55 Tiong Bahru Road, #01-08", mrt: "Tiong Bahru", type: "gym", lat: 1.2860, lng: 103.8270 },
  { name: "Katong", address: "112 East Coast Road, #02-15", mrt: "Marine Parade", type: "studio", lat: 1.3050, lng: 103.9050 },
  { name: "Tampines", address: "4 Tampines Central 5, #03-20", mrt: "Tampines", type: "gym", lat: 1.3530, lng: 103.9450 },
  { name: "Paya Lebar", address: "10 Paya Lebar Road, #04-11", mrt: "Paya Lebar", type: "gym", lat: 1.3180, lng: 103.8930 },
  { name: "One-North", address: "1 Fusionopolis Way, #02-05", mrt: "one-north", type: "studio", lat: 1.2990, lng: 103.7875 },
  { name: "Jurong East", address: "50 Jurong Gateway Road, #03-08", mrt: "Jurong East", type: "gym", lat: 1.3333, lng: 103.7422 },
  { name: "Bishan", address: "9 Bishan Place, #02-10", mrt: "Bishan", type: "studio", lat: 1.3508, lng: 103.8485 },
  { name: "Serangoon", address: "23 Serangoon Central, #04-02", mrt: "Serangoon", type: "gym", lat: 1.3500, lng: 103.8732 },
  { name: "Woodlands", address: "30 Woodlands Avenue 2, #02-12", mrt: "Woodlands", type: "gym", lat: 1.4360, lng: 103.7865 },
  { name: "Sentosa Cove", address: "31 Ocean Way, #01-05", mrt: "HarbourFront", type: "studio", lat: 1.2445, lng: 103.8390 },
];
export const locations: Location[] = raw.map((l, i) => ({ ...l, image: imgs[i % imgs.length] as string }));

/** Approximate centre point for Singapore postal sectors (first 2 digits). */
const postalSectors: [number, number, number, number][] = [
  // [from, to, lat, lng]
  [1, 8, 1.2800, 103.8500],
  [9, 10, 1.2750, 103.8200],
  [11, 13, 1.3000, 103.7900],
  [14, 16, 1.2900, 103.8100],
  [17, 21, 1.2950, 103.8550],
  [22, 23, 1.3040, 103.8320],
  [24, 27, 1.3150, 103.8150],
  [28, 30, 1.3300, 103.8100],
  [31, 33, 1.3250, 103.8550],
  [34, 37, 1.3300, 103.8800],
  [38, 41, 1.3150, 103.8950],
  [42, 45, 1.3050, 103.9100],
  [46, 52, 1.3450, 103.9450],
  [53, 55, 1.3550, 103.8750],
  [56, 57, 1.3550, 103.8450],
  [58, 59, 1.3400, 103.7750],
  [60, 64, 1.3400, 103.7200],
  [65, 68, 1.3800, 103.7600],
  [69, 71, 1.4150, 103.7300],
  [72, 73, 1.4400, 103.7900],
  [75, 76, 1.4300, 103.8350],
  [77, 78, 1.3850, 103.8300],
  [79, 80, 1.3900, 103.8800],
  [81, 82, 1.3950, 103.9050],
];

export function postalToCoords(postal: string): { lat: number; lng: number } | null {
  const digits = postal.replace(/\D/g, "");
  if (digits.length !== 6) return null;
  const sector = Number(digits.slice(0, 2));
  const hit = postalSectors.find(([a, b]) => sector >= a && sector <= b);
  return hit ? { lat: hit[2], lng: hit[3] } : null;
}

export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export const team = [
  { name: "Marcus Tan", title: "Head Coach", senior: true, image: hero, specialisations: ["Strength", "Body recomposition"] },
  { name: "Aisha Rahman", title: "Coach", senior: true, image: prenatal, specialisations: ["Prenatal & postpartum", "Pilates-based strength"] },
  { name: "Jonathan Lim", title: "Performance Coach", senior: true, image: performance, specialisations: ["Athletic performance", "Speed & power"] },
  { name: "Mei Ling Ong", title: "Coach", senior: false, image: studio, specialisations: ["Weight loss", "Nutrition coaching"] },
  { name: "Ravi Menon", title: "Coach", senior: false, image: performance, specialisations: ["Longevity", "Mobility"] },
  { name: "Chloe Ng", title: "Coach", senior: true, image: hero, specialisations: ["Muscle gain", "Powerlifting"] },
  { name: "Daniel Koh", title: "Coach", senior: false, image: studio, specialisations: ["Injury rehab", "Posture"] },
  { name: "Sophie Wright", title: "Coach", senior: false, image: prenatal, specialisations: ["Postpartum recovery", "Core rehab"] },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a gym membership to train at your RF operated gyms?",
    a: "Answer coming soon",
  },
  {
    q: "Can I train at multiple gyms or only restricted to one?",
    a: "You can train at any one of our locations. Discuss and liaise with your trainer so you can get your session in during your lunch break or wherever your schedule takes you.",
  },
];

export const resources = [
  { title: "The beginner's guide to strength training", tag: "Guide" },
  { title: "How much protein do you really need?", tag: "Nutrition" },
  { title: "Sleep, stress and fat loss", tag: "Article" },
  { title: "Training through pregnancy: what's safe", tag: "Guide" },
  { title: "Understanding your body composition scan", tag: "Article" },
  { title: "Mobility routine for desk workers", tag: "Guide" },
];

export const caseStudies = [
  { name: "Rachel, 38", title: "From burnout to her first pull-up", image: hero },
  { name: "Kenji, 45", title: "12kg down and a healthier heart", image: performance },
  { name: "Lauren, 33", title: "Strong again six months postpartum", image: prenatal },
];

export const blogPosts = [
  { slug: "strength-after-40", title: "Why strength training matters more after 40", date: "Oct 2026" },
  { slug: "lunch-break-workout", title: "The 45-minute lunch break workout", date: "Sep 2026" },
  { slug: "data-driven-training", title: "What data-driven training actually means", date: "Aug 2026" },
  { slug: "recovery-basics", title: "Recovery basics: sleep, stress and nutrition", date: "Jul 2026" },
];

/** Placeholder YouTube embed — replace with the real video ID. */
export const brandVideoUrl = "https://www.youtube.com/embed/ScMzIvxBSi4";
