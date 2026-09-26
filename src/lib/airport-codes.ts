const AIRPORT_CITIES: Record<string, string> = {
  // INDIA
  DEL: "Delhi",
  BOM: "Mumbai",
  ATQ: "Amritsar",
  BLR: "Bengaluru",
  HYD: "Hyderabad",
  MAA: "Chennai",
  CCU: "Kolkata",
  AMD: "Ahmedabad",
  IXC: "Chandigarh",
  PNQ: "Pune",
  GOI: "Goa",
  SXR: "Srinagar",
  COK: "Kochi",
  TRV: "Thiruvananthapuram",
  JAI: "Jaipur",
  LKO: "Lucknow",
  VNS: "Varanasi",
  IDR: "Indore",
  BHO: "Bhopal",
  PAT: "Patna",
  IXR: "Ranchi",
  BBI: "Bhubaneswar",
  GAU: "Guwahati",
  NAG: "Nagpur",
  STV: "Surat",
  CJB: "Coimbatore",
  IXM: "Madurai",
  IXE: "Mangalore",
  DED: "Dehradun",
  IXL: "Leh",
  Jammu: "Jammu",
  JAI: "Jaipur",

  // PAKISTAN - EXISTING INVENTORY SUPPORT
  ISB: "Islamabad",
  LHE: "Lahore",
  KHI: "Karachi",
  PEW: "Peshawar",
  SKT: "Sialkot",
  MUX: "Multan",
  LYP: "Faisalabad",

  // SAUDI ARABIA
  JED: "Jeddah",
  MED: "Madinah",
  RUH: "Riyadh",
  DMM: "Dammam",

  // UAE
  DXB: "Dubai",
  AUH: "Abu Dhabi",
  SHJ: "Sharjah",
  AAN: "Al Ain",

  // QATAR / BAHRAIN / OMAN / KUWAIT
  DOH: "Doha",
  BAH: "Bahrain",
  MCT: "Muscat",
  KWI: "Kuwait City",

  // SOUTH ASIA
  KTM: "Kathmandu",
  DAC: "Dhaka",
  CMB: "Colombo",
  MLE: "Maldives",
  KBL: "Kabul",

  // SOUTH EAST ASIA
  SIN: "Singapore",
  BKK: "Bangkok",
  HKT: "Phuket",
  KUL: "Kuala Lumpur",
  LGK: "Langkawi",
  DPS: "Bali",
  CGK: "Jakarta",
  MNL: "Manila",
  HAN: "Hanoi",
  SGN: "Ho Chi Minh City",
  PNH: "Phnom Penh",
  RGN: "Yangon",

  // EAST ASIA
  TYO: "Tokyo",
  NRT: "Tokyo",
  HND: "Tokyo",
  KIX: "Osaka",
  ICN: "Seoul",
  HKG: "Hong Kong",
  PVG: "Shanghai",
  PEK: "Beijing",
  CAN: "Guangzhou",
  SZX: "Shenzhen",
  TPE: "Taipei",

  // EUROPE
  LHR: "London",
  LGW: "London",
  CDG: "Paris",
  AMS: "Amsterdam",
  FRA: "Frankfurt",
  MUC: "Munich",
  BER: "Berlin",
  FCO: "Rome",
  MXP: "Milan",
  VCE: "Venice",
  MAD: "Madrid",
  BCN: "Barcelona",
  LIS: "Lisbon",
  ZRH: "Zurich",
  GVA: "Geneva",
  VIE: "Vienna",
  PRG: "Prague",
  BUD: "Budapest",
  ATH: "Athens",
  IST: "Istanbul",
  DUB: "Dublin",
  BRU: "Brussels",
  CPH: "Copenhagen",
  ARN: "Stockholm",
  OSL: "Oslo",
  HEL: "Helsinki",
  WAW: "Warsaw",
  SVO: "Moscow",

  // NORTH AMERICA
  JFK: "New York",
  EWR: "Newark",
  LAX: "Los Angeles",
  SFO: "San Francisco",
  ORD: "Chicago",
  IAD: "Washington",
  BOS: "Boston",
  MIA: "Miami",
  DFW: "Dallas",
  IAH: "Houston",
  SEA: "Seattle",
  ATL: "Atlanta",

  // CANADA
  YYZ: "Toronto",
  YVR: "Vancouver",
  YUL: "Montreal",
  YYC: "Calgary",

  // AUSTRALIA / NEW ZEALAND
  SYD: "Sydney",
  MEL: "Melbourne",
  BNE: "Brisbane",
  PER: "Perth",
  ADL: "Adelaide",
  AKL: "Auckland",
  CHC: "Christchurch",

  // AFRICA
  JNB: "Johannesburg",
  CPT: "Cape Town",
  NBO: "Nairobi",
  ADD: "Addis Ababa",
  CAI: "Cairo",
  CMN: "Casablanca",
  LOS: "Lagos",
  ACC: "Accra",
  DAR: "Dar es Salaam",
  ZNZ: "Zanzibar",

  // CENTRAL ASIA / CAUCASUS
  TAS: "Tashkent",
  ALA: "Almaty",
  GYD: "Baku",
  TBS: "Tbilisi",
  EVN: "Yerevan",
};

const CITY_TO_CODE: Record<string, string> = Object.fromEntries(
  Object.entries(AIRPORT_CITIES).map(([code, city]) => [
    city.toLowerCase(),
    code,
  ])
);

/**
 * Pakistan departure airports for existing group/Umrah inventory.
 * Kept for compatibility with the existing inventory system.
 */
export const PK_AIRPORT_CODES = new Set([
  "ISB",
  "LHE",
  "KHI",
  "PEW",
  "SKT",
  "MUX",
  "LYP",
]);

const GULF_AIRPORT_CODES = new Set([
  "JED",
  "MED",
  "RUH",
  "DMM",
  "DXB",
  "AUH",
  "SHJ",
  "DOH",
  "BAH",
  "MCT",
]);

/**
 * Existing group inventory logic.
 * Pakistan departure → destination.
 */
export function isOutboundGroupTicket(
  fromCode: string,
  toCode: string
): boolean {
  const from = fromCode.toUpperCase();
  const to = toCode.toUpperCase();

  if (!PK_AIRPORT_CODES.has(from)) return false;

  if (GULF_AIRPORT_CODES.has(to)) return true;

  return ["IST", "LHR", "ADD", "KBL"].includes(to);
}

export function isReturnLegExternalId(
  externalId?: string | null
): boolean {
  return Boolean(externalId && /-(ret)$/i.test(externalId));
}

export function isIataCode(value: string): boolean {
  return /^[A-Z]{3}$/i.test(value.trim());
}

export function resolveAirport(
  value?: string | null
): { code: string; city: string } {
  const raw = String(value || "").trim();

  if (!raw) {
    return {
      code: "",
      city: "",
    };
  }

  if (isIataCode(raw)) {
    const code = raw.toUpperCase();

    return {
      code,
      city: AIRPORT_CITIES[code] || code,
    };
  }

  const code = CITY_TO_CODE[raw.toLowerCase()];

  if (code) {
    return {
      code,
      city: AIRPORT_CITIES[code] || raw,
    };
  }

  return {
    code: raw.toUpperCase().slice(0, 3),
    city: raw,
  };
}

export function cityMatchesFilter(
  code: string,
  city: string,
  filterValue: string
): boolean {
  const filter = filterValue.trim();

  if (!filter || filter === "all") {
    return true;
  }

  const normalizedFilter = filter.toLowerCase();

  if (code.toLowerCase() === normalizedFilter) {
    return true;
  }

  if (city.toLowerCase() === normalizedFilter) {
    return true;
  }

  if (city.toLowerCase().includes(normalizedFilter)) {
    return true;
  }

  const filterCode = CITY_TO_CODE[normalizedFilter];

  if (filterCode && code.toUpperCase() === filterCode) {
    return true;
  }

  return false;
}

export function formatRouteLabel(
  fromCode: string,
  fromCity: string,
  toCode: string,
  toCity: string
): string {
  const from =
    fromCity && fromCity !== fromCode
      ? `${fromCity} (${fromCode})`
      : fromCode;

  const to =
    toCity && toCity !== toCode
      ? `${toCity} (${toCode})`
      : toCode;

  return `${from} → ${to}`;
}

/**
 * Cities shown in legacy/inventory search dropdowns.
 * The new Journey Genie customer fare checker does NOT depend
 * on this list because it allows free-text worldwide city entry.
 */
export const SEARCH_CITIES = [
  // India
  "Delhi",
  "Mumbai",
  "Amritsar",
  "Chandigarh",
  "Srinagar",
  "Jammu",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Pune",
  "Goa",
  "Jaipur",
  "Lucknow",
  "Varanasi",
  "Kochi",
  "Thiruvananthapuram",
  "Indore",
  "Bhopal",
  "Patna",
  "Ranchi",
  "Bhubaneswar",
  "Guwahati",
  "Nagpur",
  "Surat",
  "Coimbatore",
  "Madurai",
  "Mangalore",
  "Dehradun",
  "Leh",

  // Pakistan
  "Islamabad",
  "Lahore",
  "Karachi",
  "Peshawar",
  "Faisalabad",
  "Sialkot",
  "Multan",

  // Gulf
  "Jeddah",
  "Madinah",
  "Riyadh",
  "Dammam",
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Doha",
  "Bahrain",
  "Muscat",
  "Kuwait City",

  // Asia
  "Kathmandu",
  "Dhaka",
  "Colombo",
  "Maldives",
  "Singapore",
  "Bangkok",
  "Phuket",
  "Kuala Lumpur",
  "Langkawi",
  "Bali",
  "Jakarta",
  "Manila",
  "Hanoi",
  "Ho Chi Minh City",
  "Tokyo",
  "Osaka",
  "Seoul",
  "Hong Kong",
  "Shanghai",
  "Beijing",

  // Europe
  "London",
  "Paris",
  "Amsterdam",
  "Frankfurt",
  "Munich",
  "Berlin",
  "Rome",
  "Milan",
  "Venice",
  "Madrid",
  "Barcelona",
  "Lisbon",
  "Zurich",
  "Geneva",
  "Vienna",
  "Prague",
  "Budapest",
  "Athens",
  "Istanbul",
  "Dublin",
  "Brussels",
  "Copenhagen",
  "Stockholm",
  "Oslo",
  "Helsinki",
  "Warsaw",
  "Moscow",

  // North America
  "New York",
  "Los Angeles",
  "San Francisco",
  "Chicago",
  "Washington",
  "Boston",
  "Miami",
  "Dallas",
  "Houston",
  "Seattle",
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",

  // Australia / New Zealand
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Auckland",
  "Christchurch",

  // Africa
  "Johannesburg",
  "Cape Town",
  "Nairobi",
  "Addis Ababa",
  "Cairo",
  "Casablanca",
  "Lagos",
  "Accra",
  "Dar es Salaam",
  "Zanzibar",

  // Central Asia / Caucasus
  "Tashkent",
  "Almaty",
  "Baku",
  "Tbilisi",
  "Yerevan",
] as const;
