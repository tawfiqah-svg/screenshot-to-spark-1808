// All editable site content lives here. Swap images by replacing the imports below.
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import performance from "@/assets/performance.jpg";
import prenatal from "@/assets/prenatal.jpg";

export const images = { hero, studio, performance, prenatal };

export const nav = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/locations", label: "Locations" },
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Careers" },
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
  // Own ReFormd studios
  { name: "RF615 — Bukit Timah", address: "615 Bukit Timah Road", mrt: "Sixth Avenue", type: "studio", lat: 1.3307, lng: 103.7970 },
  { name: "RF Sixth Avenue", address: "Sixth Avenue, Bukit Timah", mrt: "Sixth Avenue", type: "studio", lat: 1.3290, lng: 103.7975 },
  { name: "RF Bugis", address: "Bugis, Singapore", mrt: "Bugis", type: "studio", lat: 1.3008, lng: 103.8555 },
  { name: "FORGED by ReFormd", address: "Bukit Timah, Singapore", mrt: "Sixth Avenue", type: "studio", lat: 1.3190, lng: 103.8140 },
  // Anytime Fitness clubs — PT delivered inside AF to AF members
  { name: "Anytime Fitness Orchard", address: "Orchard Road", mrt: "Orchard", type: "gym", lat: 1.3020, lng: 103.8360 },
  { name: "Anytime Fitness Cineleisure Orchard", address: "8 Grange Road, Cineleisure", mrt: "Somerset", type: "gym", lat: 1.3015, lng: 103.8362 },
  { name: "Anytime Fitness Suntec City", address: "3 Temasek Boulevard, Suntec City", mrt: "Promenade", type: "gym", lat: 1.2952, lng: 103.8580 },
  { name: "Anytime Fitness City Square Mall", address: "180 Kitchener Road, City Square Mall", mrt: "Farrer Park", type: "gym", lat: 1.3115, lng: 103.8567 },
  { name: "Anytime Fitness Bugis", address: "Bugis, Singapore", mrt: "Bugis", type: "gym", lat: 1.2995, lng: 103.8545 },
  { name: "Anytime Fitness Bedok", address: "Bedok, Singapore", mrt: "Bedok", type: "gym", lat: 1.3240, lng: 103.9300 },
  { name: "Anytime Fitness Ang Mo Kio South", address: "Ang Mo Kio, Singapore", mrt: "Ang Mo Kio", type: "gym", lat: 1.3690, lng: 103.8454 },
  { name: "Anytime Fitness Buona Vista", address: "Buona Vista, Singapore", mrt: "Buona Vista", type: "gym", lat: 1.3068, lng: 103.7900 },
  { name: "Anytime Fitness Bukit Timah Central", address: "Bukit Timah Central", mrt: "Beauty World", type: "gym", lat: 1.3390, lng: 103.7760 },
  { name: "Anytime Fitness Geylang Bahru", address: "Geylang Bahru, Singapore", mrt: "Geylang Bahru", type: "gym", lat: 1.3200, lng: 103.8715 },
  { name: "Anytime Fitness Havelock Outram", address: "Havelock Road", mrt: "Havelock", type: "gym", lat: 1.2875, lng: 103.8350 },
  { name: "Anytime Fitness New Upper Thomson", address: "Upper Thomson Road", mrt: "Upper Thomson", type: "gym", lat: 1.3600, lng: 103.8340 },
  { name: "Anytime Fitness New Queensway", address: "Queensway, Singapore", mrt: "Queenstown", type: "gym", lat: 1.3200, lng: 103.8020 },
  { name: "Anytime Fitness Rochester", address: "Rochester Drive", mrt: "Buona Vista", type: "gym", lat: 1.3050, lng: 103.7878 },
  { name: "Anytime Fitness Yishun East", address: "Yishun, Singapore", mrt: "Yishun", type: "gym", lat: 1.4295, lng: 103.8350 },
  { name: "Anytime Fitness Tampines", address: "Tampines Central", mrt: "Tampines", type: "gym", lat: 1.3530, lng: 103.9450 },
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
