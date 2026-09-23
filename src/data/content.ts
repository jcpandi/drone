import type { IconName } from "@/components/ui/Icon";

const PX = "https://images.pexels.com/photos";

const img = (path: string, w: number, h?: number) =>
  `${PX}/${path}?auto=compress&cs=tinysrgb&fit=crop&w=${w}${h ? `&h=${h}` : ""}`;

export const media = {
  heroCraft: img("11026274/pexels-photo-11026274.jpeg", 900, 1200),
  heroTerrain: img("28861948/pexels-photo-28861948.jpeg", 1600, 900),
  craftFolded: img("22679329/pexels-photo-22679329.jpeg", 1200, 800),
  propeller: img("30459258/pexels-photo-30459258.jpeg", 900, 1200),
  gimbal: img("13310697/pexels-photo-13310697.jpeg", 1200, 800),
  nightLed: img("13938851/pexels-photo-13938851.jpeg", 900, 1200),
  mist: img("4581166/pexels-photo-4581166.jpeg", 1400, 900),
  lake: img("2505972/pexels-photo-2505972.jpeg", 1400, 900),
  canyon: img("34444484/pexels-photo-34444484.jpeg", 1400, 900),
  cliffs: img("30286799/pexels-photo-30286799.jpeg", 1200, 1500),
  coastDusk: img("19226161/pexels-photo-19226161.jpeg", 1400, 800),
  sicily: img("18163741/pexels-photo-18163741.jpeg", 1200, 1500),
  perth: img("27300863/pexels-photo-27300863.jpeg", 1400, 800),
  fjord: img("4591169/pexels-photo-4591169.jpeg", 1200, 1500),
};

const avatar = (path: string) => img(path, 160, 160);

export const nav = [
  { label: "Aircraft", href: "#aircraft" },
  { label: "Capabilities", href: "#features" },
  { label: "Terrain", href: "#terrain" },
  { label: "Field Notes", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export const heroSpecs = [
  { value: "52", unit: "min", label: "Flight time" },
  { value: "8K", unit: "60 HDR", label: "Cine sensor" },
  { value: "1.8", unit: "lb", label: "Packed weight" },
  { value: "12", unit: "km", label: "MeshLink range" },
  { value: "IP55", unit: "", label: "Storm rated" },
];

export const partners = [
  "ALPINIST CO.",
  "TERRAFILM",
  "NORTHBOUND",
  "SUMMIT & CO",
  "WILDLINE",
  "PEAKWIRE",
  "GEOFRAME",
  "BASECAMP MEDIA",
];

export const stats = [
  { value: 41200, suffix: "+", label: "Pilots in the field", hint: "Since the 2024 beta" },
  { value: 2.4, suffix: "M km", label: "Autonomous flight logged", decimals: 1 },
  { value: 4.9, suffix: "/5", label: "From 3,182 verified reviews", decimals: 1 },
  { value: 190, suffix: "", label: "Countries flying Aether" },
];

export const awards = [
  "Red Dot: Best of the Best 2025",
  "Outside — Gear of the Year",
  "CES Innovation Honoree",
];

export type Feature = {
  icon: IconName;
  eyebrow: string;
  title: string;
  body: string;
  span: string;
  image?: string;
  accent?: "ice" | "aurora" | "ember";
  stat?: { value: string; label: string };
};

export const features: Feature[] = [
  {
    icon: "target",
    eyebrow: "TrailLock™ autonomy",
    title: "It doesn't follow you. It reads the line and gets there first.",
    body: "Twenty-one vision sensors and a solid-state LiDAR array build a live 3D model of the terrain at 60 fps. Aether One predicts your descent, picks the cinematic angle, and threads gaps a human pilot wouldn't dare — at up to 68 km/h.",
    span: "lg:col-span-3 lg:row-span-2",
    image: media.mist,
    accent: "ice",
    stat: { value: "68 km/h", label: "Pursuit speed, fully autonomous" },
  },
  {
    icon: "battery",
    eyebrow: "Endurance",
    title: "52 minutes on a single pack",
    body: "Graphene-hybrid cells and a 9% drag reduction give you a full descent, a full swell set, a full golden hour.",
    span: "lg:col-span-3",
    accent: "ember",
    stat: { value: "156 min", label: "With the Expedition three-pack" },
  },
  {
    icon: "shield",
    eyebrow: "StormClass™ airframe",
    title: "Rated for the weather you actually fly in",
    body: "IP55 sealing, −20°C cold-start, and stability locked in 38 mph gusts. Carbon-weave arms fold to the size of a 1L bottle.",
    span: "lg:col-span-3",
    accent: "aurora",
  },
  {
    icon: "camera",
    eyebrow: "Optics",
    title: "A 1-inch cine sensor with 14 stops",
    body: "8K60 HDR, 10-bit LogM, and a hand-calibrated 24 mm equivalent lens. Colour that grades like cinema glass, not like a toy.",
    span: "lg:col-span-2",
    accent: "ice",
  },
  {
    icon: "feather",
    eyebrow: "Launch",
    title: "Palm to sky in 2.4 seconds",
    body: "Open your hand. It lifts, locks onto you and goes. Raise your palm and it settles back into it — no controller, no gloves off.",
    span: "lg:col-span-2",
    accent: "ember",
  },
  {
    icon: "signal",
    eyebrow: "MeshLink",
    title: "12 km of link that survives canyons",
    body: "Dual-band relay with self-healing mesh hops keeps the feed alive through slot canyons, forest canopy and granite walls.",
    span: "lg:col-span-2",
    accent: "aurora",
  },
];

export const microFeatures = [
  { icon: "volume" as IconName, title: "Whisper props", body: "42% quieter. Wildlife stays put." },
  { icon: "map" as IconName, title: "Offline Sky Maps", body: "Airspace + terrain cached, no signal needed." },
  { icon: "cpu" as IconName, title: "On-board edit", body: "Auto-cut a 60s reel before you're back at camp." },
  { icon: "globe" as IconName, title: "Geo-aware", body: "Live no-fly, altitude and permit awareness in 190 countries." },
];

export type ShowcaseTab = {
  id: string;
  label: string;
  title: string;
  body: string;
  image: string;
  specs: { k: string; v: string }[];
  hotspots: { x: number; y: number; label: string }[];
};

export const showcase: ShowcaseTab[] = [
  {
    id: "airframe",
    label: "Airframe",
    title: "Carbon-weave, folded to a water bottle",
    body: "A unibody monocoque milled from forged carbon, sealed against dust and driving rain. 814 grams packed — it disappears into a hip belt and shrugs off a 1.2 m drop onto granite.",
    image: media.craftFolded,
    specs: [
      { k: "Packed", v: "182 × 86 × 74 mm" },
      { k: "Weight", v: "814 g" },
      { k: "Sealing", v: "IP55" },
    ],
    hotspots: [
      { x: 27, y: 34, label: "Forged carbon arm · 4-stage fold" },
      { x: 68, y: 58, label: "Magnetic swap battery bay" },
      { x: 46, y: 76, label: "Titanium landing skids" },
    ],
  },
  {
    id: "optics",
    label: "Optics",
    title: "One inch of sensor. Fourteen stops of latitude.",
    body: "A triple-axis gimbal stabilised to 0.002° holds the horizon while you get thrown around below it. Shoot 8K60 HDR, 4K240 slow motion, and 10-bit LogM that grades like it came off a cine rig.",
    image: media.gimbal,
    specs: [
      { k: "Sensor", v: '1" CMOS · 50 MP' },
      { k: "Video", v: "8K60 · 4K240" },
      { k: "Gimbal", v: "±0.002° 3-axis" },
    ],
    hotspots: [
      { x: 38, y: 44, label: "24 mm f/1.7 cine glass" },
      { x: 62, y: 62, label: "Liquid-damped 3-axis gimbal" },
      { x: 76, y: 30, label: "Forward LiDAR aperture" },
    ],
  },
  {
    id: "autonomy",
    label: "Autonomy",
    title: "A pilot's instincts, running at 60 frames per second",
    body: "The Aether NPU fuses 21 vision sensors, LiDAR depth and IMU data into a rolling 3D map. It brakes for branches, re-frames when you drop out of shot, and finds its own way home when the light goes.",
    image: media.nightLed,
    specs: [
      { k: "Sensors", v: "21 vision + LiDAR" },
      { k: "Compute", v: "34 TOPS on-board" },
      { k: "Modes", v: "9 cinematic presets" },
    ],
    hotspots: [
      { x: 32, y: 40, label: "Omnidirectional obstacle array" },
      { x: 64, y: 54, label: "Night-flight beacon · 3 km visible" },
      { x: 50, y: 24, label: "Return-to-palm homing antenna" },
    ],
  },
  {
    id: "power",
    label: "Power",
    title: "Charge at the trailhead. Fly until the light dies.",
    body: "Graphene-hybrid packs hit 80% in 22 minutes off a 65 W USB-C source — the same brick that charges your laptop. Cold-weather pre-heat keeps full capacity at −20°C.",
    image: media.propeller,
    specs: [
      { k: "Per pack", v: "52 min" },
      { k: "Charge", v: "0→80% in 22 min" },
      { k: "Cold rating", v: "−20°C cold start" },
    ],
    hotspots: [
      { x: 44, y: 36, label: "Whisper-pitch propeller · 42% quieter" },
      { x: 60, y: 68, label: "Field-swappable 5,200 mAh pack" },
      { x: 28, y: 58, label: "USB-C PD in · 65 W" },
    ],
  },
];

export const terrains = [
  {
    tag: "Alpine",
    title: "Above the couloir",
    body: "Cold-start at −20°C, hold a line in 38 mph katabatic gusts, and keep the horizon nailed while you ski the fall line.",
    image: media.canyon,
    points: ["Cold-weather pre-heat", "Gust-lock stabilisation", "Avalanche-zone geofencing"],
  },
  {
    tag: "Coast",
    title: "Inside the set",
    body: "Salt-sealed bearings, hydrophobic lens coating and a wave-tracking mode that stays with you from take-off to close-out.",
    image: media.cliffs,
    points: ["IP55 salt-spray sealing", "Swell-tracking autopilot", "Water-launch & palm return"],
  },
  {
    tag: "Backcountry",
    title: "Off the grid entirely",
    body: "Cached terrain and airspace, 12 km of mesh link, and a solar-friendly 65 W charge path. No bars required.",
    image: media.fjord,
    points: ["Fully offline Sky Maps", "Self-healing mesh relay", "USB-C solar charging"],
  },
];

export const comparison = [
  { label: "Flight time on one pack", aether: "52 minutes", other: "28–34 minutes" },
  { label: "Launch without a controller", aether: "Palm launch & return", other: "Controller required" },
  { label: "Weather rating", aether: "IP55 · −20°C · 38 mph", other: "Fair weather only" },
  { label: "Link through canyons", aether: "12 km self-healing mesh", other: "Line of sight" },
  { label: "Crash cover", aether: "2 replacements a year", other: "Paid repair" },
];

export const testimonials = [
  {
    quote:
      "I put it up over a first descent in Chamonix at −17°C. It held frame through the whole couloir while I was fighting for my life. The footage sold the film.",
    name: "Mara Lindqvist",
    role: "Ski mountaineer · Chamonix, FR",
    avatar: avatar("3525907/pexels-photo-3525907.jpeg"),
    metric: "312 flights logged",
  },
  {
    quote:
      "We shot a full desert episode with two Aethers and no second unit. Palm launch means it's in the air before the light changes. That's the whole game.",
    name: "Diego Ferran",
    role: "Director of photography · TerraFilm",
    avatar: avatar("4985179/pexels-photo-4985179.jpeg"),
    metric: "4 broadcast features",
  },
  {
    quote:
      "Nine days on the Alaska traverse, charging off a 20 W panel. It never once lost me in the trees and it never once needed a controller out of the pack.",
    name: "Jonah Reeve",
    role: "Expedition photographer · Anchorage, US",
    avatar: avatar("22776488/pexels-photo-22776488.jpeg"),
    metric: "Solar-only for 9 days",
  },
  {
    quote:
      "I've broken three drones in the surf. This one came out of a close-out, dried off, and flew the next set. The salt sealing is not marketing.",
    name: "Kaia Moreno",
    role: "Surf filmer · Uluwatu, ID",
    avatar: avatar("30805229/pexels-photo-30805229.jpeg"),
    metric: "600+ hours over water",
  },
];

export type Plan = {
  name: string;
  tagline: string;
  once: number;
  monthly: number;
  featured?: boolean;
  badge?: string;
  cta: string;
  includes: string[];
};

export const plans: Plan[] = [
  {
    name: "Scout",
    tagline: "The whole aircraft, nothing you won't use.",
    once: 1199,
    monthly: 100,
    cta: "Reserve Scout",
    includes: [
      "Aether One aircraft",
      "One 52-minute pack",
      "8K30 HDR · 4K120",
      "Palm launch & return",
      "Offline Sky Maps",
      "1-year limited warranty",
    ],
  },
  {
    name: "Expedition",
    tagline: "What 8 in 10 pilots actually take into the field.",
    once: 1499,
    monthly: 125,
    featured: true,
    badge: "Most reserved",
    cta: "Reserve Expedition",
    includes: [
      "Everything in Scout",
      "Three packs · 156 min total",
      "8K60 HDR · 4K240 slow-mo",
      "TrailLock™ Pro autonomy suite",
      "MeshLink 12 km relay",
      "Weather-sealed field case",
      "2-year Care+ with 1 crash swap",
    ],
  },
  {
    name: "Summit",
    tagline: "For crews shipping paid work off the mountain.",
    once: 2290,
    monthly: 191,
    cta: "Reserve Summit",
    includes: [
      "Everything in Expedition",
      "Five packs + 4-bay field charger",
      "Pro controller with 1000-nit screen",
      "Cine filter set (ND8–ND512)",
      "3-year Care+ · 2 crash swaps a year",
      "Priority Spring 2026 shipping",
      "1:1 onboarding with a staff pilot",
    ],
  },
];

export const planAssurances = [
  "Free worldwide shipping",
  "30-day flight test, full refund",
  "Firmware updates for life",
];

export const faqs = [
  {
    q: "Do I need a licence to fly Aether One?",
    a: "In most countries, recreational flight under 250 g needs no licence — but Aether One is 814 g, so you'll typically need a short online registration (about 20 minutes). The Aether app detects your jurisdiction, walks you through the exact forms, and stores your operator ID on the aircraft. Commercial work usually requires a certificate; we cover the requirements for 190 countries in the app.",
  },
  {
    q: "How does TrailLock handle trees, cables and slot canyons?",
    a: "Twenty-one vision sensors and a forward LiDAR array build a 3D depth map 60 times a second, out to 42 metres. The aircraft brakes, re-routes around obstacles thinner than a 6 mm cable, and holds your frame through the manoeuvre. If it genuinely loses a safe path it climbs to a clear altitude and re-acquires you rather than pushing through.",
  },
  {
    q: "What happens if I crash it?",
    a: "Expedition and Summit include Care+, which covers a full aircraft swap after a crash — one per year on Expedition, two on Summit — with no questions about fault. Turnaround is typically 4 business days, and we ship the replacement before you send the wreck back so a trip isn't lost. Scout owners can add Care+ any time in the first 90 days.",
  },
  {
    q: "Does it work with no phone signal?",
    a: "Yes. Terrain, airspace and permit data for your region download before you leave and live on the aircraft, not the cloud. Palm launch, TrailLock tracking, return-to-palm and on-board editing all run without a single bar of service.",
  },
  {
    q: "How cold and how wet can it get?",
    a: "Certified for −20°C to 50°C with a pre-heat cycle that protects full pack capacity in the cold, and IP55 sealing that handles driving rain, sea spray and blowing snow. It is not submersible — but it will fly home wet, and the salt-flush routine in the app takes two minutes at camp.",
  },
  {
    q: "When does it ship, and can I change my mind?",
    a: "Reservations ship in order from March 2026. Your deposit is fully refundable until the moment your unit enters final assembly, and every aircraft comes with a 30-day flight test: fly it anywhere, and if it isn't the best gear in your pack, send it back for a full refund including shipping.",
  },
];

export const footerColumns = [
  {
    title: "Aircraft",
    links: ["Aether One", "Pro Controller", "Batteries & power", "Filters & optics", "Field cases", "Compare models"],
  },
  {
    title: "Company",
    links: ["Our story", "Engineering log", "Pilot programme", "Ambassadors", "Careers", "Press kit"],
  },
  {
    title: "Support",
    links: ["Help centre", "Flight academy", "Care+ coverage", "Firmware releases", "Airspace rules", "Contact a pilot"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Warranty", "Safety & compliance", "Accessibility", "Cookie settings"],
  },
];
