// Simplified Singapore geography and MRT network for the drawn locations map.
type P = [number, number]; // [lat, lng]

export const mapBounds = { minLat: 1.23, maxLat: 1.47, minLng: 103.6, maxLng: 104.03 };
export const MAP_W = 1000;
export const MAP_H = 558;
export const project = (lat: number, lng: number) => ({
  x: ((lng - mapBounds.minLng) / (mapBounds.maxLng - mapBounds.minLng)) * MAP_W,
  y: ((mapBounds.maxLat - lat) / (mapBounds.maxLat - mapBounds.minLat)) * MAP_H,
});

export const mainland: P[] = [
  [1.31, 103.63], [1.33, 103.64], [1.36, 103.66], [1.38, 103.68], [1.41, 103.69], [1.425, 103.71], [1.44, 103.73],
  [1.448, 103.76], [1.452, 103.79], [1.462, 103.81], [1.458, 103.83], [1.448, 103.845], [1.44, 103.86], [1.425, 103.875],
  [1.415, 103.89], [1.418, 103.91], [1.40, 103.925], [1.392, 103.95], [1.388, 103.975], [1.38, 103.99], [1.37, 104.0],
  [1.36, 104.02], [1.34, 104.025], [1.32, 104.0], [1.315, 103.975], [1.305, 103.95], [1.298, 103.92], [1.295, 103.895],
  [1.29, 103.875], [1.278, 103.87], [1.268, 103.862], [1.268, 103.845], [1.262, 103.83], [1.268, 103.81], [1.274, 103.79],
  [1.285, 103.77], [1.295, 103.75], [1.30, 103.73], [1.305, 103.71], [1.30, 103.69], [1.295, 103.665], [1.30, 103.645],
];
export const islands: P[][] = [
  [[1.258, 103.81], [1.255, 103.83], [1.247, 103.842], [1.242, 103.828], [1.246, 103.812]], // Sentosa
  [[1.415, 103.92], [1.42, 103.95], [1.418, 103.98], [1.405, 103.975], [1.402, 103.945], [1.405, 103.925]], // Pulau Ubin
  [[1.285, 103.67], [1.29, 103.70], [1.282, 103.725], [1.262, 103.725], [1.252, 103.70], [1.26, 103.675]], // Jurong Island
  [[1.42, 103.985], [1.415, 104.01], [1.405, 104.005], [1.408, 103.985]], // Pulau Tekong (partial)
];
export const reservoirs: P[][] = [
  [[1.37, 103.79], [1.375, 103.81], [1.365, 103.825], [1.35, 103.82], [1.345, 103.80], [1.355, 103.79]], // Central catchment
  [[1.40, 103.81], [1.405, 103.82], [1.395, 103.825], [1.392, 103.812]], // Lower Seletar
];
export const areaLabels: { name: string; lat: number; lng: number }[] = [
  { name: "WOODLANDS", lat: 1.444, lng: 103.775 }, { name: "JURONG", lat: 1.325, lng: 103.72 },
  { name: "BUKIT TIMAH", lat: 1.342, lng: 103.775 }, { name: "ANG MO KIO", lat: 1.385, lng: 103.855 },
  { name: "PUNGGOL", lat: 1.412, lng: 103.905 }, { name: "TAMPINES", lat: 1.365, lng: 103.93 },
  { name: "CBD", lat: 1.268, lng: 103.842 }, { name: "SENTOSA", lat: 1.238, lng: 103.83 },
  { name: "CHANGI", lat: 1.365, lng: 104.005 }, { name: "EAST COAST", lat: 1.297, lng: 103.935 },
];

export type Station = { name: string; lat: number; lng: number };
const s = (name: string, lat: number, lng: number): Station => ({ name, lat, lng });
export type MrtLine = { code: string; name: string; color: string; stations: Station[] };

// Official LTA line colours (brand identities, not theme colours).
export const mrtLines: MrtLine[] = [
  { code: "NS", name: "North South", color: "#D42E12", stations: [
    s("Jurong East",1.3331,103.7422),s("Bukit Batok",1.349,103.7496),s("Bukit Gombak",1.3587,103.7518),s("Choa Chu Kang",1.3854,103.7443),
    s("Yew Tee",1.3973,103.7475),s("Kranji",1.4252,103.762),s("Marsiling",1.4326,103.7741),s("Woodlands",1.437,103.7865),
    s("Admiralty",1.4406,103.801),s("Sembawang",1.4491,103.8202),s("Canberra",1.443,103.8297),s("Yishun",1.4295,103.835),
    s("Khatib",1.4174,103.8329),s("Yio Chu Kang",1.3817,103.8449),s("Ang Mo Kio",1.37,103.8495),s("Bishan",1.351,103.8485),
    s("Braddell",1.3404,103.847),s("Toa Payoh",1.3327,103.8474),s("Novena",1.3204,103.8438),s("Newton",1.3138,103.8381),
    s("Orchard",1.3043,103.832),s("Somerset",1.3006,103.8389),s("Dhoby Ghaut",1.299,103.8456),s("City Hall",1.2931,103.852),
    s("Raffles Place",1.284,103.8514),s("Marina Bay",1.2763,103.8546),s("Marina South Pier",1.2711,103.8633)] },
  { code: "EW", name: "East West", color: "#009645", stations: [
    s("Tuas Link",1.3404,103.6368),s("Joo Koon",1.3277,103.6783),s("Pioneer",1.3376,103.6974),s("Boon Lay",1.3386,103.7058),
    s("Lakeside",1.3442,103.721),s("Chinese Garden",1.3423,103.7326),s("Jurong East",1.3331,103.7422),s("Clementi",1.3151,103.7652),
    s("Dover",1.3114,103.7786),s("Buona Vista",1.3073,103.79),s("Commonwealth",1.3025,103.7983),s("Queenstown",1.2945,103.8058),
    s("Redhill",1.2896,103.8168),s("Tiong Bahru",1.2862,103.827),s("Outram Park",1.2801,103.8395),s("Tanjong Pagar",1.2765,103.8458),
    s("Raffles Place",1.284,103.8514),s("City Hall",1.2931,103.852),s("Bugis",1.3009,103.8559),s("Lavender",1.3072,103.8631),
    s("Kallang",1.3115,103.8714),s("Aljunied",1.3164,103.8829),s("Paya Lebar",1.3177,103.8926),s("Eunos",1.3197,103.903),
    s("Kembangan",1.321,103.913),s("Bedok",1.324,103.93),s("Tanah Merah",1.3272,103.9465),s("Simei",1.3433,103.9533),
    s("Tampines",1.3532,103.9452),s("Pasir Ris",1.373,103.9493)] },
  { code: "CG", name: "Changi Airport branch", color: "#009645", stations: [
    s("Tanah Merah",1.3272,103.9465),s("Expo",1.3355,103.9615),s("Changi Airport",1.3573,103.9886)] },
  { code: "NE", name: "North East", color: "#9900AA", stations: [
    s("HarbourFront",1.2653,103.822),s("Outram Park",1.2801,103.8395),s("Chinatown",1.2844,103.8439),s("Clarke Quay",1.2886,103.8465),
    s("Dhoby Ghaut",1.299,103.8456),s("Little India",1.3066,103.8494),s("Farrer Park",1.3124,103.8541),s("Boon Keng",1.3195,103.8617),
    s("Potong Pasir",1.3313,103.8688),s("Woodleigh",1.3393,103.8707),s("Serangoon",1.3497,103.8736),s("Kovan",1.3601,103.8851),
    s("Hougang",1.3712,103.892),s("Buangkok",1.3829,103.893),s("Sengkang",1.3917,103.8954),s("Punggol",1.4053,103.9024)] },
  { code: "CC", name: "Circle", color: "#FA9E0D", stations: [
    s("Dhoby Ghaut",1.299,103.8456),s("Bras Basah",1.297,103.8507),s("Esplanade",1.2934,103.8556),s("Promenade",1.2939,103.8611),
    s("Nicoll Highway",1.2999,103.8636),s("Stadium",1.3029,103.8753),s("Mountbatten",1.3063,103.8826),s("Dakota",1.3083,103.8884),
    s("Paya Lebar",1.3177,103.8926),s("MacPherson",1.3266,103.89),s("Tai Seng",1.3359,103.8879),s("Bartley",1.3424,103.8797),
    s("Serangoon",1.3497,103.8736),s("Lorong Chuan",1.3517,103.864),s("Bishan",1.351,103.8485),s("Marymount",1.3487,103.8395),
    s("Caldecott",1.3376,103.8394),s("Botanic Gardens",1.3225,103.8155),s("Farrer Road",1.3172,103.8076),s("Holland Village",1.3117,103.7961),
    s("Buona Vista",1.3073,103.79),s("one-north",1.2995,103.7874),s("Kent Ridge",1.2934,103.7846),s("Haw Par Villa",1.2826,103.782),
    s("Pasir Panjang",1.2762,103.7914),s("Labrador Park",1.2722,103.8026),s("Telok Blangah",1.2707,103.8097),s("HarbourFront",1.2653,103.822)] },
  { code: "DT", name: "Downtown", color: "#005EC4", stations: [
    s("Bukit Panjang",1.3786,103.7616),s("Cashew",1.3693,103.7646),s("Hillview",1.3627,103.7675),s("Beauty World",1.3412,103.7759),
    s("King Albert Park",1.3357,103.7833),s("Sixth Avenue",1.3307,103.797),s("Tan Kah Kee",1.3259,103.8075),s("Botanic Gardens",1.3225,103.8155),
    s("Stevens",1.32,103.8259),s("Newton",1.3138,103.8381),s("Little India",1.3066,103.8494),s("Rochor",1.3039,103.8526),
    s("Bugis",1.3009,103.8559),s("Promenade",1.2939,103.8611),s("Bayfront",1.2818,103.859),s("Downtown",1.2795,103.8527),
    s("Telok Ayer",1.2821,103.8486),s("Chinatown",1.2844,103.8439),s("Fort Canning",1.2925,103.8444),s("Bencoolen",1.2989,103.8505),
    s("Jalan Besar",1.3052,103.8555),s("Bendemeer",1.3138,103.8628),s("Geylang Bahru",1.3213,103.8716),s("Mattar",1.3268,103.8835),
    s("MacPherson",1.3266,103.89),s("Ubi",1.33,103.899),s("Kaki Bukit",1.3349,103.9085),s("Bedok North",1.3348,103.918),
    s("Bedok Reservoir",1.3363,103.933),s("Tampines West",1.3455,103.9384),s("Tampines",1.3532,103.9452),s("Tampines East",1.3562,103.9546),
    s("Upper Changi",1.3418,103.9613),s("Expo",1.3355,103.9615)] },
  { code: "TE", name: "Thomson-East Coast", color: "#9D5B25", stations: [
    s("Woodlands North",1.4482,103.7853),s("Woodlands",1.437,103.7865),s("Woodlands South",1.4274,103.7929),s("Springleaf",1.3976,103.818),
    s("Lentor",1.3847,103.836),s("Mayflower",1.3713,103.837),s("Bright Hill",1.3624,103.8333),s("Upper Thomson",1.3546,103.8335),
    s("Caldecott",1.3376,103.8394),s("Stevens",1.32,103.8259),s("Napier",1.3068,103.8195),s("Orchard Boulevard",1.3024,103.8243),
    s("Orchard",1.3043,103.832),s("Great World",1.2934,103.8318),s("Havelock",1.2886,103.8337),s("Outram Park",1.2801,103.8395),
    s("Maxwell",1.2806,103.8443),s("Shenton Way",1.2774,103.8504),s("Marina Bay",1.2763,103.8546),s("Gardens by the Bay",1.2791,103.8683),
    s("Tanjong Rhu",1.2971,103.8737),s("Katong Park",1.302,103.8862),s("Tanjong Katong",1.3061,103.8975),s("Marine Parade",1.3027,103.9064),
    s("Marine Terrace",1.3065,103.9157),s("Siglap",1.3101,103.93),s("Bayshore",1.3134,103.942)] },
];

/** Stations whose names are printed on the map (interchanges and key stops). */
export const labelledStations = new Set([
  "Jurong East","Woodlands","Ang Mo Kio","Bishan","Orchard","City Hall","Raffles Place","Outram Park",
  "HarbourFront","Buona Vista","Bugis","Paya Lebar","Tampines","Pasir Ris","Changi Airport","Punggol","Serangoon",
  "Sixth Avenue","Newton","Boon Lay","Choa Chu Kang","Yishun","Bedok","Bukit Panjang","Marina Bay","Caldecott","Clementi",
]);

/** Printed station names with coordinates, deduped across lines. */
export const stationLabels: Station[] = (() => {
  const seen = new Map<string, Station>();
  for (const l of mrtLines) for (const s of l.stations) if (labelledStations.has(s.name) && !seen.has(s.name)) seen.set(s.name, s);
  return [...seen.values()];
})();
