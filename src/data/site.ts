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

export const subBrands = ["FORGED by ReFormd", "Shelter by ReFormd"];
export const privateStudioCount = 5;

export const programs = [
  {
    title: "Weight loss & muscle building",
    image: hero,
    text: "Lose fat and build muscle with a training plan that suits your starting point. Your personal trainer helps you get stronger and build eating habits you can keep up.",
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
    text: "Personal training adapted for pregnancy and your return to exercise after birth, with a focus on strength, movement and recovery.",
  },
];

export const groupSupport = [
  {
    title: "FORGED by ReFormd",
    label: "Performance testing",
    text: "Performance testing helps your trainer understand your starting point and measure how you're progressing. The findings help shape what you work on in your sessions.",
  },
  {
    title: "Shelter by ReFormd",
    label: "Recovery facilities",
    text: "Shelter gives you access to dedicated recovery facilities to support your training. Speak with your trainer about the options that suit your routine and any additional costs.",
  },
];

export const reviews = [
  { name: "Sarah L.", rating: 5, text: "Lost 9kg in four months and I've never felt stronger. My trainer made it feel effortless to stay consistent." },
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
  { name: "RF615 Bukit Timah", address: "615 Bukit Timah Road", mrt: "Sixth Avenue", type: "studio", lat: 1.3307, lng: 103.7970 },
  { name: "RF Sixth Avenue", address: "Sixth Avenue, Bukit Timah", mrt: "Sixth Avenue", type: "studio", lat: 1.3290, lng: 103.7975 },
  { name: "RF Bugis", address: "Bugis, Singapore", mrt: "Bugis", type: "studio", lat: 1.3008, lng: 103.8555 },
  { name: "FORGED by ReFormd", address: "1 Raffles Link", mrt: "City Hall / Esplanade", type: "studio", lat: 1.2918, lng: 103.8547 },
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
  { name: "Name 1", title: "Personal Trainer", image: hero, specialisations: ["Strength", "Body recomposition"] },
  { name: "Name 2", title: "Personal Trainer", image: prenatal, specialisations: ["Prenatal & postpartum", "Pilates-based strength"] },
  { name: "Name 3", title: "Personal Trainer", image: performance, specialisations: ["Athletic performance", "Speed & power"] },
  { name: "Name 4", title: "Personal Trainer", image: studio, specialisations: ["Weight loss", "Nutrition guidance"] },
  { name: "Name 5", title: "Personal Trainer", image: performance, specialisations: ["Longevity", "Mobility"] },
  { name: "Name 6", title: "Personal Trainer", image: hero, specialisations: ["Muscle gain", "Powerlifting"] },
  { name: "Name 7", title: "Personal Trainer", image: studio, specialisations: ["Injury rehab", "Posture"] },
  { name: "Name 8", title: "Personal Trainer", image: prenatal, specialisations: ["Postpartum recovery", "Core rehab"] },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a gym membership to train at an RF-Operated Gym?",
    a: "Training inside our RF-Operated Gyms is for gym members. Speak with us about membership and access at your preferred gym before booking. You can also ask about training at a private ReFormd studio.",
  },
  {
    q: "Can I train at multiple gyms or only restricted to one?",
    a: "Speak with your trainer about the locations that fit your schedule. Sessions at different gyms depend on your membership access and trainer availability, so confirm the arrangements before you travel.",
  },
  {
    q: "I'm new to the gym. Can I start personal training?",
    a: "Yes. ReFormd works with beginners as well as experienced gym users. Your trainer looks at your goals and how you move, then helps you learn the exercises at a pace that suits you.",
  },
  {
    q: "What happens during a personal training trial?",
    a: "ReFormd's trial includes a one-to-one session with a certified personal trainer, a lifestyle and goals discussion, movement screening, form analysis and training recommendations. The website also lists a Visbody 3D body composition scan. Confirm scan availability at your chosen location when booking.",
  },
  {
    q: "Where can I do the Kickstart trial?",
    a: "Choose a private ReFormd studio or an RF-Operated Gym, whichever is more convenient. Contact us to confirm your preferred location, gym access and available session times.",
  },
  {
    q: "Can you help me lose weight and build muscle?",
    a: "Yes. ReFormd offers training for weight management, strength and muscle building. Your trainer puts together a plan based on your goals, current fitness and assessment findings.",
  },
  {
    q: "How do you measure my progress?",
    a: "Your trainer tracks your training and uses assessments to help review your progress. ReFormd uses Visbody 3D scans at selected locations to look at body composition, posture, muscle distribution and body fat percentage.",
  },
  {
    q: "Can I train to stay strong as I get older?",
    a: "Yes. ReFormd's longevity approach includes strength training, movement screening and mobility work. Sessions are adapted to your ability and goals so you can keep working on everyday strength and movement.",
  },
  {
    q: "Do you help with nutrition, sleep and recovery?",
    a: "Your trainer can offer practical guidance on eating habits, sleep, stress and recovery alongside your training. Tell them about your routine so the advice fits your day-to-day life.",
  },
  {
    q: "What recovery options are available?",
    a: "ReFormd's website lists Shelter by ReFormd and a dedicated recovery area at ReFormd Sixth Avenue. Ask your trainer which facilities are available and whether there are additional charges.",
  },
  {
    q: "How do I get started and find out the price?",
    a: "Book a consultation or contact the team with your goals and preferred location. ReFormd advertises first-time trial pricing on its website; the team can confirm the current offer and suitable training options before you book.",
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
