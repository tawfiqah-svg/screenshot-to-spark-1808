const carmenHeadshotAsset = { url: "/images/carmen-headshot.png" };
const carmenBannerAsset = { url: "/images/carmen-deadlift-banner.png" };
const cherylHeadshotAsset = { url: "/images/cheryl-headshot.png" };
const cherylBannerAsset = { url: "/images/cheryl-banner.png" };
const chenYueHeadshotAsset = { url: "/images/chen-yue-headshot.png" };
const chenYueBannerAsset = { url: "/images/chen-yue-banner.png" };
const cameyHeadshotAsset = { url: "/images/camey-headshot.png" };
const cameyBannerAsset = { url: "/images/camey-banner.png" };
const dominickHeadshotAsset = { url: "/images/dominick-headshot.png" };
const dominickBannerAsset = { url: "/images/dominick-banner.png" };
const sixth1Asset = { url: "/images/rf-sixth-avenue-1.png" };
const sixth2Asset = { url: "/images/rf-sixth-avenue-2.png" };
const rf6151Asset = { url: "/images/rf615-1.png" };
const rf6152Asset = { url: "/images/rf615-2.png" };
const rf6153Asset = { url: "/images/rf615-3.png" };
const rf6154Asset = { url: "/images/rf615-4.png" };
const bedok1Asset = { url: "/images/bedok-85-1.png" };
const bedok2Asset = { url: "/images/bedok-85-2.png" };
const bedok3Asset = { url: "/images/bedok-85-3.png" };
const amkSouth3Asset = { url: "/images/ang-mo-kio-south-3.png" };
const rfBugis1Asset = { url: "/images/rf-bugis-1.png" };
const rfBugis2Asset = { url: "/images/rf-bugis-2.png" };
const rfBugis3Asset = { url: "/images/rf-bugis-3.png" };
const rfBugis4Asset = { url: "/images/rf-bugis-4.png" };
const forgedTurfAsset = { url: "/images/forged-facility-turf.png" };
const forgedRowersAsset = { url: "/images/forged-facility-rowers.png" };
const forgedTreadmillsAsset = { url: "/images/forged-facility-treadmills.png" };
const forgedChamberAsset = { url: "/images/forged-facility-testing-chamber.png" };
const amkSouth1Asset = { url: "/images/ang-mo-kio-south-1.png" };
const amkSouth2Asset = { url: "/images/ang-mo-kio-south-2.png" };
const buonaVista1Asset = { url: "/images/buona-vista-1.png" };
const buonaVista2Asset = { url: "/images/buona-vista-2.png" };
const buonaVista3Asset = { url: "/images/buona-vista-3.png" };
const cineleisure1Asset = { url: "/images/cineleisure-1.png" };
const cineleisure2Asset = { url: "/images/cineleisure-2.png" };
const citySquare1Asset = { url: "/images/city-square-1.png" };
const citySquare2Asset = { url: "/images/city-square-2.png" };
const citySquare3Asset = { url: "/images/city-square-3.png" };
const citySquare4Asset = { url: "/images/city-square-4.png" };
const citySquare5Asset = { url: "/images/city-square-5.png" };
const orchard1Asset = { url: "/images/af-orchard-1.png" };
const orchard2Asset = { url: "/images/af-orchard-2.png" };
const orchard3Asset = { url: "/images/af-orchard-3.png" };
const upperThomson1Asset = { url: "/images/rf-upper-thomson-1.png" };
const upperThomson2Asset = { url: "/images/rf-upper-thomson-2.png" };
const yishun1Asset = { url: "/images/af-yishun-east-1.png" };
const yishun2Asset = { url: "/images/af-yishun-east-2.png" };
const suntec1Asset = { url: "/images/af-suntec-1.png" };
const suntec2Asset = { url: "/images/af-suntec-2.png" };
const havelock2Asset = { url: "/images/af-havelock-2.png" };
const havelock3Asset = { url: "/images/af-havelock-3.png" };
const queensway3Asset = { url: "/images/af-queensway-3.png" };
const queensway4Asset = { url: "/images/af-queensway-4.png" };
const rochester1Asset = { url: "/images/af-rochester-1.png" };
const geylangBahru1Asset = { url: "/images/af-geylang-bahru-1.png" };
// All editable site content lives here. Swap images by replacing the imports below.
const hero = "/images/hero.png";
const testimonialsBanner = "/images/testimonials-banner.png";
const teamBanner = "/images/reformd-team-2026.png";
const homeHeroAsset = { url: "/images/carmen-deadlift.png" };
const trialBackgroundAsset = { url: "/images/reformd-studio-reception.png" };
const weightLossAsset = { url: "/images/sherrine-luther-training.png" };
const studio = "/images/studio.png";
const performance = "/images/performance.png";
const peakPerformanceAsset = { url: "/images/peak-performance-training.png" };
const prenatal = "/images/prenatal.png";
const prenatalPostpartumAsset = { url: "/images/prenatal-postpartum-training.png" };
const vitalityAsset = { url: "/images/zubin-longevity-training.png" };
const bftAsset = { url: "/images/rf-group-bft.svg" };
const laboratoryAsset = { url: "/images/rf-group-laboratory.png" };
const anytimeAsset = { url: "/images/rf-group-anytime.png" };
const forgedTestingAsset = { url: "/images/forged-testing.png" };
const shelterRecoveryAsset = { url: "/images/shelter-recovery.png" };

export const images = { hero, homeHero: homeHeroAsset.url, trialBackground: trialBackgroundAsset.url, studio, performance, prenatal, locationsHero: rfBugis1Asset.url, testimonialsBanner, teamBanner };

export const transformations = [
  {
    before: "/images/transformation-6month-before.png",
    after: "/images/transformation-6month-after.png",
    caption: "6-Month Muscle Growth Phase",
  },
  {
    before: "/images/transformation-5month-before.png",
    after: "/images/transformation-5month-after.png",
    caption: "5-Month Muscle Growth Phase",
  },
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/reformd_training/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/reformdtraining/" },
] as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/locations", label: "Locations" },
  {
    label: "About us",
    children: [
      { to: "/about", label: "About us", image: studio, description: "Our approach, trainers & standards" },
      { to: "/testimonials", label: "Testimonials", image: homeHeroAsset.url, description: "Our clients' success stories" },
      { to: "/team", label: "Team", image: hero, description: "Meet our personal trainers" },
      { to: "/careers", label: "Careers", image: performance, description: "RF Academy & opportunities" },
    ],
  },
  { to: "/contact", label: "Contact" },
] as const;

export const subBrands = ["FORGED by ReFormd", "Shelter by ReFormd"];
export const privateStudioCount = 5;

export const homeBenefits = [
  `${privateStudioCount} private studios`,
  "One-to-one personal training",
  "RF-Operated Gyms for your convenience",
  "Performance testing & tracking",
  "Nutrition, sleep & recovery",
];

export const aboutContent = {
  title: "Personal training built around you",
  introHeading: "Your goals shape the way we train",
  intro: "ReFormd Personal Training is built on individual attention, thoughtful coaching and progress that fits your life. We take time to understand where you are starting, what you want to achieve and what will help you stay consistent.",
  story: "Our clients come to us with different goals, levels of experience and demands outside the gym. Whatever brings you to ReFormd, your training is personal to you and supported by a team that wants to see you move forward with confidence.",
  mission: "Progress all ways, always.",
  values: [
    { title: "Personal from day one", text: "Your trainer builds your sessions around your goals, experience and routine, then adjusts your plan as you progress." },
    { title: "Progress you can sustain", text: "We focus on training and habits that you can carry into everyday life, not short-term fixes that are difficult to maintain." },
    { title: "Support at every step", text: "You have a dedicated trainer in your corner, with clear guidance, honest feedback and encouragement throughout your journey." },
  ],
  goalsHeading: "Different goals. The same commitment.",
  goalsIntro: "There is no single reason to start personal training. We meet each client where they are and shape the work around what matters to them.",
  goals: [
    { title: "Build strength & muscle", text: "Develop strength, improve your technique and follow a structured approach to hypertrophy." },
    { title: "Manage your weight", text: "Build a training routine and sustainable habits that support your body composition goals." },
    { title: "Move well for longer", text: "Improve mobility, confidence and everyday fitness so you can keep doing the things you enjoy." },
    { title: "Raise your performance", text: "Prepare for a sport, event or personal challenge with training that supports your ambition." },
  ],
  teamHeading: "Different specialists. One shared standard.",
  teamIntro: "Our diverse team of trainers brings together different backgrounds and areas of expertise, including hypertrophy, strength, mobility and weight management. This helps us match you with a trainer who understands your goals.",
  teamStory: "Our team includes senior trainers and trainers with a range of experience. The same standard of training is expected from every trainer, at every private studio and RF-Operated Gym.",
  standards: [
    { title: "The right expertise for you", text: "We consider your goals, needs and preferences when helping you choose a trainer." },
    { title: "Consistent coaching", text: "Every trainer is expected to prepare thoughtfully, coach with care and take your progress seriously." },
    { title: "One standard everywhere", text: "You receive the same commitment to quality whether you train at a private studio or an RF-Operated Gym." },
  ],
  workshops: {
    eyebrow: "Continual development",
    heading: "Our trainers keep learning",
    cadence: "Every 2 months",
    text: "We hold trainer workshops every two months to keep our team learning, sharing knowledge and improving the way we coach.",
    detail: "These sessions help our trainers stay current with the latest training knowledge and bring practical, up to date guidance back to our clients.",
    points: ["Learn and review current training knowledge", "Share practical coaching experience across the team", "Raise the standard of every client session"],
  },
  ctaHeading: "Find the right trainer for your goals",
  ctaText: "Tell us what you would like to work towards. We will help you take the next step with a trainer and location that suit you.",
};

export const rfGroupBrands = [
  {
    title: "ReFormd Personal Training",
    image: homeHeroAsset.url,
    imageAlt: "Personal training at ReFormd",
    logo: false,
    text: "One-to-one personal training built around your goals, experience and routine. Train with a dedicated personal trainer at our private studios or RF-Operated Gyms, wherever is convenient for you.",
  },
  {
    title: "FORGED by ReFormd",
    image: performance,
    imageAlt: "Strength and performance training",
    logo: false,
    text: "Sports performance testing and training for people who want to understand and improve how they move. Testing helps establish your starting point, guide your training and measure your progress.",
  },
  {
    title: "Shelter by ReFormd",
    image: studio,
    imageAlt: "Training and wellbeing space",
    logo: false,
    text: "Dedicated recovery facilities to complement your training and give recovery its own place in your routine. Speak with your trainer about the options that suit you and any additional costs.",
  },
  {
    title: "BFT",
    image: bftAsset.url,
    imageAlt: "BFT logo",
    logo: true,
    text: "Structured group strength and conditioning sessions combining science-based training with a supportive group environment. Build strength, improve fitness and train alongside others at BFT studios within the RF Group.",
  },
  {
    title: "The Laboratory",
    image: laboratoryAsset.url,
    imageAlt: "The Laboratory by RF logo",
    logo: true,
    text: "The RF Group's tech and lifestyle brand, specialising in mechanical keyboards, keycaps, switches and accessories. Explore products that make your desk setup feel more personal.",
  },
  {
    title: "RF-Operated Anytime Fitness",
    image: anytimeAsset.url,
    imageAlt: "Anytime Fitness logo",
    logo: true,
    text: "Anytime Fitness gyms operated by the RF Group bring training closer to home or work. These locations also offer a convenient setting for your ReFormd personal training sessions.",
  },
];

export const rfEvents = [
  { title: "ReFormd Powerlifting Classic III", venue: "Cineleisure Orchard", text: "A powerlifting competition with an LED backdrop and a livestream following the action from the warm-up room to the platform.", link: "https://www.youtube.com/playlist?list=PLFd5M_Dhvpextv6YF2WkdktJmwCvwr3we", cta: "Watch the competition" },
  { title: "ReFormd Combined Nationals 2024", venue: "Marina Bay Sands", text: "ReFormd brought national-level powerlifting to Marina Bay Sands, bringing athletes and supporters together for a major competition on Singapore's sporting calendar.", link: "https://www.youtube.com/playlist?list=PLZRTLo40GU-13EejkCPF-QBg5XMjRRKxG", cta: "Relive the Nationals" },
  { title: "ReFormd Powerlifting 2.0", venue: "City Square Mall", text: "A centrally located meet with competition racks for every platform, giving participants the opportunity to test their strength in front of the community.", link: "https://reformd.co/rf-events/", cta: "Explore RF events" },
];

export const programs = [
  {
    title: "Weight loss & muscle building",
    image: weightLossAsset.url,
    crop: "object-[50%_38%]",
    text: "Lose fat and build muscle with a training plan that suits your starting point. Your personal trainer helps you get stronger and build eating habits you can keep up.",
  },
  {
    title: "Peak performance",
    image: peakPerformanceAsset.url,
    crop: "object-[50%_45%]",
    text: "Test, train and track like an athlete. Get stronger, faster and more resilient for your sport or your next challenge.",
  },
  {
    title: "Vitality & longevity",
    image: vitalityAsset.url,
    crop: "object-[50%_30%]",
    text: "Strength, mobility and energy that last. Training designed to keep you moving well for decades.",
  },
  {
    title: "Prenatal & postpartum",
    image: prenatalPostpartumAsset.url,
    crop: "",
    text: "Personal training adapted for pregnancy and your return to exercise after birth, with a focus on strength, movement and recovery.",
  },
];

export const groupSupport = [
  {
    title: "FORGED by ReFormd",
    label: "Testing",
    image: forgedTestingAsset.url,
    imageAlt: "Performance testing results on a tablet at FORGED by ReFormd",
    website: "https://forgedbyrf.co/",
    cta: "Learn more about FORGED",
    text: "Performance testing helps your trainer understand your starting point and measure how you're progressing. The findings help shape what you work on in your sessions.",
    services: ["3D running gait analysis and shoe recommendations", "VO₂ and lactate threshold testing", "Results to guide training intensity and track progress"],
  },
  {
    title: "Shelter by ReFormd",
    label: "Recovery",
    image: shelterRecoveryAsset.url,
    imageAlt: "A guest resting in the warm wooden sauna at Shelter",
    website: "https://www.seekshelter.co/",
    cta: "Learn more about Shelter",
    text: "Shelter gives you access to dedicated recovery facilities to support your training. Speak with your trainer about the options that suit your routine and any additional costs.",
    services: ["Hot saunas and cold plunges", "Warm magnesium pools", "Compression therapy and spaces to rest between sessions"],
  },
];

export const reviewWidget = {
  scriptUrl: "https://cdn.trustindex.io/loader.js?9b54626860ef5251a7563ad8e0c",
};

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
  gallery?: string[];
};

const imgs = [studio, hero, performance];
const raw: Omit<Location, "image">[] = [
  // Own ReFormd studios
  { name: "RF 615", address: "615 Bukit Timah Rd", mrt: "Tan Kah Kee", type: "studio", lat: 1.3307, lng: 103.7970 },
  { name: "RF Sixth Avenue", address: "805 Bukit Timah Rd, #01-01 Sixth Avenue Centre", mrt: "Sixth Avenue", type: "studio", lat: 1.3290, lng: 103.7975 },
  { name: "RF Bugis", address: "51 Middle Rd, #05-01, Singapore 188959", mrt: "Bugis", type: "studio", lat: 1.3008, lng: 103.8555 },
  { name: "FORGED by ReFormd", address: "1 Raffles Link, B1-23 Citylink Mall", mrt: "City Hall / Esplanade", type: "studio", lat: 1.2918, lng: 103.8547 },
  // Anytime Fitness clubs — PT delivered inside AF to AF members
  { name: "Anytime Fitness Orchard", address: "277 Orchard Rd, #04-01 Orchard, Singapore 238858", mrt: "Orchard", type: "gym", lat: 1.3020, lng: 103.8360 },
  { name: "Anytime Fitness Cineleisure Orchard", address: "8 Grange Road, Singapore 239695", mrt: "Somerset", type: "gym", lat: 1.3015, lng: 103.8362 },
  { name: "Anytime Fitness Suntec City", address: "3 Temasek Boulevard, #03-310/311/312 Tower 2, Suntec City Mall, Singapore 038983", mrt: "Promenade", type: "gym", lat: 1.2952, lng: 103.8580 },
  { name: "Anytime Fitness City Square Mall", address: "180 Kitchener Road, #06-04 City Square Mall, Singapore 208539", mrt: "Farrer Park", type: "gym", lat: 1.3115, lng: 103.8567 },
  { name: "Anytime Fitness Bedok", address: "Blk 88 Bedok North Street 4, #01-163", mrt: "Bedok", type: "gym", lat: 1.3240, lng: 103.9300 },
  { name: "Anytime Fitness Ang Mo Kio South", address: "340 Ang Mo Kio Ave 1, #01-1681, Singapore 560340", mrt: "Ang Mo Kio", type: "gym", lat: 1.3690, lng: 103.8454 },
  { name: "Anytime Fitness Buona Vista", address: "11 Biopolis Way, #01-04/05/06/07 Helios, Singapore 138667", mrt: "Buona Vista", type: "gym", lat: 1.3068, lng: 103.7900 },
  { name: "Anytime Fitness Geylang Bahru", address: "1 Geylang Bahru Ln, #01-03 Kolam Ayer Community Club, Singapore 339631", mrt: "Geylang Bahru", type: "gym", lat: 1.3213, lng: 103.8703 },
  { name: "Anytime Fitness Havelock Outram", address: "405 Havelock Rd, #02-02, Singapore 169633", mrt: "Havelock", type: "gym", lat: 1.2875, lng: 103.8350 },
  { name: "RF New Upper Thomson", address: "246S Upper Thomson Rd, Singapore 574370", mrt: "Upper Thomson", type: "studio", lat: 1.3600, lng: 103.8340 },
  { name: "Anytime Fitness New Queensway", address: "#03-52, Queensway Shopping Centre", mrt: "Queenstown", type: "gym", lat: 1.3200, lng: 103.8020 },
  { name: "Anytime Fitness Rochester", address: "41 Rochester Dr, Singapore 138582", mrt: "Rochester", type: "gym", lat: 1.3062, lng: 103.7885 },
  { name: "Anytime Fitness Yishun East", address: "Blk 461 Yishun Ave 6, #01-02", mrt: "Yishun", type: "gym", lat: 1.4295, lng: 103.8350 },
];
const galleries: Record<string, string[]> = {
  "RF Sixth Avenue": [sixth1Asset.url, sixth2Asset.url],
  "RF 615": [rf6151Asset.url, rf6152Asset.url, rf6153Asset.url, rf6154Asset.url],
  "RF Bugis": [rfBugis3Asset.url, rfBugis4Asset.url, rfBugis2Asset.url, rfBugis1Asset.url],
  "FORGED by ReFormd": [forgedTurfAsset.url, forgedRowersAsset.url, forgedTreadmillsAsset.url, forgedChamberAsset.url],
  "Anytime Fitness Bedok": [bedok1Asset.url, bedok2Asset.url, bedok3Asset.url],
  "Anytime Fitness Ang Mo Kio South": [amkSouth1Asset.url, amkSouth2Asset.url, amkSouth3Asset.url],
  "Anytime Fitness Buona Vista": [buonaVista1Asset.url, buonaVista2Asset.url, buonaVista3Asset.url],
  "Anytime Fitness Cineleisure Orchard": [cineleisure1Asset.url, cineleisure2Asset.url],
  "Anytime Fitness City Square Mall": [citySquare1Asset.url, citySquare2Asset.url, citySquare3Asset.url, citySquare4Asset.url, citySquare5Asset.url],
  "Anytime Fitness Havelock Outram": [yishun1Asset.url, yishun2Asset.url],
  "Anytime Fitness Suntec City": [suntec1Asset.url, suntec2Asset.url],
  "Anytime Fitness Yishun East": [havelock2Asset.url, havelock3Asset.url],
  "Anytime Fitness Orchard": [orchard1Asset.url, orchard2Asset.url, orchard3Asset.url],
  "RF New Upper Thomson": [upperThomson1Asset.url, upperThomson2Asset.url],
  "Anytime Fitness New Queensway": [queensway3Asset.url, queensway4Asset.url],
  "Anytime Fitness Rochester": [rochester1Asset.url],
  "Anytime Fitness Geylang Bahru": [geylangBahru1Asset.url],
};
export const locations: Location[] = raw.map((l, i) => {
  const gallery = galleries[l.name];
  const image = gallery?.[0] ?? (imgs[i % imgs.length] as string);
  return gallery ? { ...l, image, gallery } : { ...l, image };
});

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

/** The `count` locations nearest to `origin`, closest first. */
export function nearestLocations<T extends { lat: number; lng: number }>(origin: { lat: number; lng: number }, list: T[], count = 4): T[] {
  return [...list].sort((a, b) => distanceKm(origin, a) - distanceKm(origin, b)).slice(0, count);
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

export type TrainerProfile = { banner: string; focus: string[]; bio: string[]; belief: string; beliefLabel?: string; qualifications: string[]; achievements: string[] };
export type Trainer = { slug: string; firstName: string; lastName: string; name: string; title: string; image: string; imageStyle?: Record<string, string>; specialisations: string[]; underlineFullName?: boolean; profile?: TrainerProfile };

export const team: Trainer[] = [
  {
    slug: "carmen-ong", firstName: "Carmen", lastName: "Ong", name: "Carmen Ong", title: "ISSA Certified Personal Trainer", image: carmenHeadshotAsset.url, specialisations: ["Strength", "Body recomposition"],
    profile: {
      banner: carmenBannerAsset.url,
      focus: ["Strength & Conditioning", "Hypertrophy", "Mobility", "Weight Management", "Sustainable Training"],
      bio: [
        "Carmen believes that strength training is more than just lifting weights. To her, it is about building a mind and body that supports the life you want and empowers you outside the gym. With a strength training background, she loves teaching compound exercises because they build real, functional strength and help clients feel capable in their day-to-day lives.",
        "Her passion for coaching comes from personal experience. As a former healthcare executive with six years in the government sector, Carmen witnessed how much proper guidance can change someone\u2019s physical and mental well-being. Previously working with a personal trainer herself showed her the value of patient, supportive coaching, and inspired her to help beginners build confidence and fall in love with strength training from the very start.",
        "Carmen aims to create a safe, encouraging space where clients can grow consistently and challenge themselves in meaningful ways.",
      ],
      belief: "Growth happens in challenge.",
      qualifications: ["ISSA Certified Personal Trainer", "Strength Training Specialist", "CPR & AED Certified", "Bachelor\u2019s Degree in Social Science (Psychology Major)"],
      achievements: ["ReFormd Powerlifting Meet 2025 \u2013 U47 Women\u2019s Open, First Place"],
    },
  },
  {
    slug: "cheryl-chee", firstName: "Cheryl", lastName: "Chee", name: "Cheryl Chee", title: "RF Academy Certified Personal Trainer", image: cherylHeadshotAsset.url, specialisations: ["Strength", "Body recomposition"],
    profile: {
      banner: cherylBannerAsset.url,
      focus: ["Strength & Conditioning", "Hypertrophy", "Mobility", "Weight Management", "Sustainable Training"],
      bio: [
        "Cheryl approaches fitness like a long-term strategy: built on strong fundamentals, clear structure, and measurable progress. With a background in Marketing and International Business, she understands the fast-paced, high-stress environments many of her clients navigate daily. She uses strength training not just to sculpt bodies, but to build mental resilience, discipline, and energy that spills over into every area of life.",
        "Rather than chasing quick fixes, Cheryl focuses on teaching effective compound movements that deliver real-world strength and functional movement.",
        "Whether you are stepping into a weight room for the very first time or aiming to push past a plateau, her coaching style is analytical yet deeply encouraging where she meets you exactly where you are and giving you the tools to succeed independently.",
        "Having achieved top podium placement through her own training discipline, Cheryl knows firsthand what it takes to push boundaries safely, build endurance, and stay consistent. She is dedicated to creating an empowering space where work ethic meets results.",
      ],
      belief: "Discipline gets you started, consistency takes you to the finish line.",
      qualifications: ["RF Academy Certified Personal Trainer", "Bachelor\u2019s Degree in Marketing & International Business", "CPR & AED Certified"],
      achievements: ["2nd Runner-Up \u2013 Batu Kawan Penang Half Marathon (Women\u2019s Open)"],
    },
  },
  {
    slug: "chen-yue", firstName: "Chen", lastName: "Yue", name: "Chen Yue", title: "NCSF Certified Personal Trainer", image: chenYueHeadshotAsset.url, specialisations: ["Strength", "Body recomposition"], underlineFullName: true,
    profile: {
      banner: chenYueBannerAsset.url,
      focus: ["Strength & Conditioning", "Hypertrophy", "Mobility", "Weight Management", "Sustainable Training", "Sports Performance"],
      bio: [
        "Chen Yue believes that fitness is about more than physical transformation. His philosophy centres on building strength gradually with proper technique in an encouraging and supportive environment.",
        "As a lifelong enthusiast in high impact sports such as MMA, kickboxing, and rugby, Chen Yue sustained recurring injuries growing up. Nonetheless, he was determined to regain control of his health and confidence, turning to strength training and bodybuilding.",
        "His goal is to ensure everyone he works with is able to overcome challenges and help them become the best version of themselves, one step at a time.",
      ],
      belief: "Fitness is about more than physical transformation.",
      beliefLabel: "His training belief",
      qualifications: ["NCSF Certified Personal Trainer", "Diploma in Hospitality & Tourism", "CPR & AED Certified"],
      achievements: ["Competitive Kickboxing & MMA Experience", "Member of the SASS Rugby Team (2012\u20132014)"],
    },
  },
  {
    slug: "camey-lim", firstName: "Camey", lastName: "Lim", name: "Camey Lim", title: "NCSF Certified Personal Trainer", image: cameyHeadshotAsset.url, specialisations: ["Strength", "Body recomposition"],
    profile: {
      banner: cameyBannerAsset.url,
      focus: ["Strength & Conditioning", "Hypertrophy", "Mobility", "Weight Management", "Sustainable Training"],
      bio: [
        "Camey struggled with body image as a teenager, and strength training became the turning point that helped her rebuild her confidence from the inside out. Through her journey, she built strong fundamentals and learned the science behind achieving sustainable results.",
        "With three years of experience coaching group fitness classes and a background in sports including floorball and Muay Thai, Camey brings a strong understanding of training principles to each session.",
        "Whether you\u2019re a complete beginner or already have some training experience, Camey creates a personalised program that is both enjoyable yet challenging. Clients can expect close guidance on habits outside the gym too, from nutrition and recovery to all that supports you in being your strongest, most capable self.",
      ],
      belief: "Strength training rebuilds confidence from the inside out.",
      qualifications: ["NCSF Certified Personal Trainer", "CPF & AED Certified", "BFT Kettlebell Basics Course", "BFT Barbell Basics Course"],
      achievements: ["Competed in HYROX Singapore 2025 Open Doubles"],
    },
  },
  {
    slug: "dominick-goh", firstName: "Dominick", lastName: "Goh", name: "Dominick Goh", title: "NASM Certified Personal Trainer", image: dominickHeadshotAsset.url, imageStyle: { transform: "scale(1.14)", transformOrigin: "50% 100%", objectPosition: "50% 0%", translate: "0 7%" }, specialisations: ["Strength", "Body recomposition"],
    profile: {
      banner: dominickBannerAsset.url,
      focus: ["Strength & Conditioning", "Hypertrophy", "Mobility", "Weight Management", "Sustainable Training", "Sports Performance", "Functional Movement"],
      bio: [
        "Dominick believes that understanding how to move properly is far more important than choosing the so-called best exercise. With a naturally mobile body and a lifetime of high-impact sports such as inline skating, soccer, rugby, acrobatics, and even circus arts like fire spinning and juggling, he experienced frequent injuries growing up. Strength training became the place where he learned to rebuild himself safely and at his own pace.",
        "Because he often felt lost when learning new activities, especially when he first stepped into the gym, Dominick is passionate about guiding others who feel the same. He teaches clients how to build a stronger, more resilient body through proper movement, clear guidance, and patience. He also hopes to show people that the gym can be a safe, empowering space, no matter their starting point or fitness level.",
      ],
      belief: "What comes easy is achieved by many. What is hard to attain is achieved by few.",
      beliefLabel: "His training belief",
      qualifications: ["NCSF Certified Personal Trainer", "Diploma in Electrical Engineering", "CPR & AED Certified"],
      achievements: ["Performed in various productions presenting Circus Arts", "National Selections for Commonwealth Youth Games 2015 \u2013 Rugby"],
    },
  },
  { slug: "name-5", firstName: "Name 5", lastName: "", name: "Name 5", title: "Personal Trainer", image: performance, specialisations: ["Strength", "Body recomposition"] },
  { slug: "name-6", firstName: "Name 6", lastName: "", name: "Name 6", title: "Personal Trainer", image: hero, specialisations: ["Strength", "Body recomposition"] },
  { slug: "name-7", firstName: "Name 7", lastName: "", name: "Name 7", title: "Personal Trainer", image: studio, specialisations: ["Strength", "Body recomposition"] },
  { slug: "name-8", firstName: "Name 8", lastName: "", name: "Name 8", title: "Personal Trainer", image: prenatal, specialisations: ["Strength", "Body recomposition"] },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a gym membership to train at an RF-Operated Gym?",
    a: "Yes. Training inside our RF-Operated Gyms is for gym members. Talk to us about membership and access at your preferred gym before you book, or ask about training at one of our private studios instead.",
  },
  {
    q: "Can I train at multiple gyms, or am I restricted to one?",
    a: "You can train at more than one location. Talk to your trainer about the gyms that fit your schedule. It comes down to your membership access and trainer availability, so it's best to confirm the arrangements before you travel.",
  },
  {
    q: "I'm new to the gym. Can I start personal training?",
    a: "Yes. We work with complete beginners as well as experienced gym users. Your trainer looks at your goals and how you move, then teaches you the exercises at a pace that suits you.",
  },
  {
    q: "What happens during a personal training trial?",
    a: "Your trial includes a one-to-one session with a certified personal trainer, a chat about your lifestyle and goals, movement screening, form analysis and training recommendations. We also offer a Visbody 3D body composition scan at selected locations, so do check it's available at your chosen spot when you book.",
  },
  {
    q: "Where can I do the Kickstart trial?",
    a: "Wherever suits you: one of our private studios or an RF-Operated Gym. Contact us to confirm your preferred location, gym access and available session times.",
  },
  {
    q: "Can you help me lose weight and build muscle?",
    a: "Yes. We coach weight management, strength and muscle building. Your trainer puts together a plan around your goals, your current fitness and what your assessment shows.",
  },
  {
    q: "How do you measure my progress?",
    a: "Your trainer tracks your sessions and uses assessments to review how you're doing. We use Visbody 3D scans at selected locations to look at body composition, posture, muscle distribution and body fat percentage.",
  },
  {
    q: "Can I train to stay strong as I get older?",
    a: "Yes. Our longevity approach covers strength training, movement screening and mobility work. We adapt every session to your ability and goals so you can keep building everyday strength and movement.",
  },
  {
    q: "Do you help with nutrition, sleep and recovery?",
    a: "Yes. Your trainer can give practical guidance on eating habits, sleep, stress and recovery alongside your training. Tell them about your routine so the advice fits your day-to-day life.",
  },
  {
    q: "How do I get started and find out the price?",
    a: "Book a consultation or send us your goals and preferred location. We publish first-time trial pricing on our website, and our team can confirm the current offer and the options that suit you before you book.",
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
export const brandVideoUrl = "https://www.youtube.com/embed/YxXtNk3yuz8";

export const videoTestimonials = [
  {
    url: "https://www.instagram.com/reel/De1Q_C-zjyX/",
    embedUrl: "https://www.instagram.com/reel/De1Q_C-zjyX/embed/",
    name: "Zubin, 59",
    caption: "Managing diabetes and new to exercise, Zubin now moves better, has less back pain and enjoys life more freely.",
  },
  {
    url: "https://www.instagram.com/reel/Dd_SJrRzh8B/",
    embedUrl: "https://www.instagram.com/reel/Dd_SJrRzh8B/embed/",
    name: "Hyekel, 33",
    caption: "Cut 10 minutes off his HYROX timing and added 2kg of muscle in less than a year.",
  },
  {
    url: "https://www.instagram.com/reel/DdJMJCkzJbW/",
    embedUrl: "https://www.instagram.com/reel/DdJMJCkzJbW/embed/",
    name: "Jin, 28",
    caption: "From 40kg with rough form to 5 reps at 65kg. Stronger and more confident in a bikini on holiday.",
  },
];
