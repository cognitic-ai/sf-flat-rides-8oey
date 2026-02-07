export interface RoutePoint {
  latitude: number;
  longitude: number;
}

export interface BikeRoute {
  id: string;
  name: string;
  description: string;
  distance: string;
  duration: string;
  difficulty: "Easy" | "Moderate";
  elevationGain: string;
  highlights: string[];
  color: string;
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  points: RoutePoint[];
  elevationProfile: number[];
}

export const ROUTES: BikeRoute[] = [
  {
    id: "embarcadero",
    name: "The Embarcadero",
    description:
      "A classic waterfront ride along the eastern shore of SF. Virtually flat from AT&T Park to Fisherman's Wharf, with stunning bay views, the Ferry Building, and Pier 39.",
    distance: "5.2 mi",
    duration: "30–40 min",
    difficulty: "Easy",
    elevationGain: "45 ft",
    highlights: [
      "Ferry Building Marketplace",
      "Oracle Park",
      "Pier 39 & Sea Lions",
      "Bay Bridge Views",
    ],
    color: "#007AFF",
    region: {
      latitude: 37.7955,
      longitude: -122.393,
      latitudeDelta: 0.035,
      longitudeDelta: 0.035,
    },
    points: [
      { latitude: 37.7786, longitude: -122.3893 },
      { latitude: 37.7855, longitude: -122.3889 },
      { latitude: 37.7935, longitude: -122.3934 },
      { latitude: 37.7956, longitude: -122.3937 },
      { latitude: 37.7995, longitude: -122.3985 },
      { latitude: 37.8063, longitude: -122.4058 },
      { latitude: 37.8087, longitude: -122.4098 },
    ],
    elevationProfile: [5, 8, 6, 10, 8, 12, 15, 10, 8, 6, 10, 14, 12, 8, 5],
  },
  {
    id: "crissy-field",
    name: "Crissy Field to Fort Point",
    description:
      "A breezy, flat coastal path through the Presidio's northern waterfront. Ride along the restored marsh, sandy beach, and end beneath the Golden Gate Bridge at Fort Point.",
    distance: "3.8 mi",
    duration: "20–30 min",
    difficulty: "Easy",
    elevationGain: "30 ft",
    highlights: [
      "Golden Gate Bridge Views",
      "Crissy Field Marsh",
      "Warming Hut Café",
      "Fort Point Historic Site",
    ],
    color: "#FF6B35",
    region: {
      latitude: 37.8045,
      longitude: -122.4565,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },
    points: [
      { latitude: 37.8012, longitude: -122.4378 },
      { latitude: 37.8035, longitude: -122.4445 },
      { latitude: 37.8045, longitude: -122.4512 },
      { latitude: 37.8055, longitude: -122.4578 },
      { latitude: 37.8059, longitude: -122.4615 },
      { latitude: 37.8108, longitude: -122.4769 },
    ],
    elevationProfile: [3, 5, 4, 6, 5, 4, 3, 5, 8, 12, 10, 8],
  },
  {
    id: "golden-gate-park",
    name: "Golden Gate Park Path",
    description:
      "Cruise through SF's beloved urban park on dedicated bike paths. A mostly flat ride past botanical gardens, lakes, bison paddock, and museums — ending at Ocean Beach.",
    distance: "4.5 mi",
    duration: "25–35 min",
    difficulty: "Easy",
    elevationGain: "65 ft",
    highlights: [
      "de Young Museum",
      "California Academy of Sciences",
      "Stow Lake",
      "Bison Paddock",
      "Ocean Beach",
    ],
    color: "#34C759",
    region: {
      latitude: 37.7694,
      longitude: -122.4662,
      latitudeDelta: 0.03,
      longitudeDelta: 0.06,
    },
    points: [
      { latitude: 37.77, longitude: -122.4376 },
      { latitude: 37.7699, longitude: -122.4455 },
      { latitude: 37.7695, longitude: -122.454 },
      { latitude: 37.769, longitude: -122.4625 },
      { latitude: 37.7688, longitude: -122.471 },
      { latitude: 37.7685, longitude: -122.48 },
      { latitude: 37.768, longitude: -122.4895 },
      { latitude: 37.7678, longitude: -122.5058 },
    ],
    elevationProfile: [
      45, 50, 48, 55, 60, 55, 50, 48, 52, 55, 50, 45, 40, 35, 30, 25,
    ],
  },
  {
    id: "wiggle",
    name: "The Wiggle",
    description:
      "SF's famous low-grade bike route connecting the Mission to the Haight. This clever zig-zag path was designed to avoid the steep hills of the Western Addition while staying on bike-friendly streets.",
    distance: "2.1 mi",
    duration: "15–20 min",
    difficulty: "Moderate",
    elevationGain: "95 ft",
    highlights: [
      "Historic Haight-Ashbury",
      "Duboce Park",
      "Painted Ladies nearby",
      "Local Coffee Shops",
    ],
    color: "#AF52DE",
    region: {
      latitude: 37.7695,
      longitude: -122.4305,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
    points: [
      { latitude: 37.7651, longitude: -122.4194 },
      { latitude: 37.7668, longitude: -122.4222 },
      { latitude: 37.7688, longitude: -122.4253 },
      { latitude: 37.7699, longitude: -122.4285 },
      { latitude: 37.7708, longitude: -122.4318 },
      { latitude: 37.7719, longitude: -122.4358 },
      { latitude: 37.7725, longitude: -122.4395 },
      { latitude: 37.7712, longitude: -122.4428 },
    ],
    elevationProfile: [
      35, 40, 50, 55, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110,
    ],
  },
  {
    id: "mission-creek",
    name: "Mission Creek Trail",
    description:
      "A hidden gem along Mission Creek channel from the waterfront into the heart of the Mission. Flat, protected paths through UCSF campus and along the creek to local murals and taquerias.",
    distance: "3.2 mi",
    duration: "20–25 min",
    difficulty: "Easy",
    elevationGain: "25 ft",
    highlights: [
      "Mission Creek Houseboats",
      "UCSF Medical Campus",
      "Mission District Murals",
      "Local Taquerias",
    ],
    color: "#FF2D55",
    region: {
      latitude: 37.768,
      longitude: -122.398,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },
    points: [
      { latitude: 37.7735, longitude: -122.3888 },
      { latitude: 37.771, longitude: -122.3905 },
      { latitude: 37.7685, longitude: -122.3935 },
      { latitude: 37.766, longitude: -122.3965 },
      { latitude: 37.764, longitude: -122.4005 },
      { latitude: 37.762, longitude: -122.4065 },
    ],
    elevationProfile: [3, 5, 4, 6, 5, 4, 5, 7, 6, 5, 4, 3],
  },
  {
    id: "panhandle",
    name: "The Panhandle & JFK Promenade",
    description:
      "Start at the leafy Panhandle park strip and glide into car-free JFK Promenade through Golden Gate Park. A peaceful, shaded ride perfect for a relaxed morning spin.",
    distance: "3.0 mi",
    duration: "18–25 min",
    difficulty: "Easy",
    elevationGain: "35 ft",
    highlights: [
      "Car-free JFK Promenade",
      "Conservatory of Flowers",
      "Hippie Hill",
      "Alvord Lake Bridge",
    ],
    color: "#5856D6",
    region: {
      latitude: 37.7718,
      longitude: -122.4485,
      latitudeDelta: 0.02,
      longitudeDelta: 0.04,
    },
    points: [
      { latitude: 37.7732, longitude: -122.4312 },
      { latitude: 37.7729, longitude: -122.436 },
      { latitude: 37.7725, longitude: -122.4408 },
      { latitude: 37.772, longitude: -122.446 },
      { latitude: 37.7712, longitude: -122.451 },
      { latitude: 37.7705, longitude: -122.456 },
      { latitude: 37.7698, longitude: -122.462 },
    ],
    elevationProfile: [55, 52, 50, 48, 50, 52, 50, 48, 45, 48, 50, 52],
  },
  {
    id: "bay-trail-south",
    name: "Bay Trail South",
    description:
      "Follow the Bay Trail from Oracle Park south through Bayview-Hunters Point along the waterfront. Wide paths, industrial-chic views, and a taste of SF's emerging southern waterfront.",
    distance: "4.8 mi",
    duration: "28–38 min",
    difficulty: "Easy",
    elevationGain: "40 ft",
    highlights: [
      "Crane Cove Park",
      "India Basin Shoreline",
      "Heron's Head Park",
      "Bayview Waterfront",
    ],
    color: "#FF9500",
    region: {
      latitude: 37.762,
      longitude: -122.3835,
      latitudeDelta: 0.045,
      longitudeDelta: 0.03,
    },
    points: [
      { latitude: 37.7786, longitude: -122.3893 },
      { latitude: 37.774, longitude: -122.387 },
      { latitude: 37.769, longitude: -122.384 },
      { latitude: 37.764, longitude: -122.3815 },
      { latitude: 37.758, longitude: -122.3795 },
      { latitude: 37.752, longitude: -122.378 },
      { latitude: 37.746, longitude: -122.377 },
    ],
    elevationProfile: [5, 8, 6, 4, 6, 8, 5, 4, 6, 5, 4, 3, 5, 8],
  },
  {
    id: "lake-merced",
    name: "Lake Merced Loop",
    description:
      "A scenic loop around Lake Merced on the southwestern edge of SF. Flat, car-free path circling the lake with views of the Pacific, Harding Park golf course, and abundant birdlife.",
    distance: "4.4 mi",
    duration: "25–35 min",
    difficulty: "Easy",
    elevationGain: "50 ft",
    highlights: [
      "Lake Merced Views",
      "Pacific Ocean Vistas",
      "Harding Park",
      "Bird Watching",
    ],
    color: "#30B0C7",
    region: {
      latitude: 37.7285,
      longitude: -122.4865,
      latitudeDelta: 0.035,
      longitudeDelta: 0.035,
    },
    points: [
      { latitude: 37.7355, longitude: -122.4868 },
      { latitude: 37.7325, longitude: -122.4825 },
      { latitude: 37.728, longitude: -122.4815 },
      { latitude: 37.7235, longitude: -122.4835 },
      { latitude: 37.721, longitude: -122.4875 },
      { latitude: 37.7225, longitude: -122.4915 },
      { latitude: 37.727, longitude: -122.493 },
      { latitude: 37.732, longitude: -122.4915 },
      { latitude: 37.7355, longitude: -122.4868 },
    ],
    elevationProfile: [25, 28, 30, 32, 30, 28, 25, 28, 32, 30, 27, 25],
  },
];
