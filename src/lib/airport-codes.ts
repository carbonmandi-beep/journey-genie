/**
 * Journey Genie
 * Airport and city code utilities.
 *
 * IMPORTANT:
 * This file preserves the existing inventory-system API.
 */

export type AirportResolution = {
  code: string;
  city: string;
};

const AIRPORT_CITIES: Record<string, string> = {
  // INDIA
  DEL: "Delhi",
  BOM: "Mumbai",
  BLR: "Bengaluru",
  HYD: "Hyderabad",
  MAA: "Chennai",
  CCU: "Kolkata",
  AMD: "Ahmedabad",
  ATQ: "Amritsar",
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
  IXE: "Mangaluru",
  DED: "Dehradun",
  IXL: "Leh",
  IXB: "Bagdogra",
  IXZ: "Port Blair",
  RPR: "Raipur",
  JDH: "Jodhpur",
  UDR: "Udaipur",
  IXC: "Chandigarh",
  KUU: "Kullu",
  DHM: "Dharamshala",
  IXJ: "Jammu",
  AJL: "Aizawl",
  IMF: "Imphal",
  IXA: "Agartala",
  IXW: "Jamshedpur",
  VTZ: "Visakhapatnam",
  TIR: "Tirupati",
  TRZ: "Tiruchirappalli",
  VGA: "Vijayawada",
  HBX: "Hubballi",
  IXG: "Belagavi",
  BDQ: "Vadodara",
  RAJ: "Rajkot",
  BHU: "Bhavnagar",
  JGA: "Jamnagar",
  DIB: "Dibrugarh",
  DMU: "Dimapur",
  IXI: "Lilabari",
  RDP: "Durgapur",
  IXU: "Aurangabad",
  AGR: "Agra",
  GWL: "Gwalior",
  KNU: "Kanpur",
  IXS: "Silchar",
  TEZ: "Tezpur",
  PYG: "Pakyong",
  IXK: "Keshod",
  DIU: "Diu",
  PBD: "Porbandar",
  TCR: "Tuticorin",
  RJA: "Rajahmundry",
  KJB: "Kurnool",
  SXV: "Salem",
  MYQ: "Mysuru",

  // PAKISTAN
  ISB: "Islamabad",
  LHE: "Lahore",
  KHI: "Karachi",
  PEW: "Peshawar",
  SKT: "Sialkot",
  MUX: "Multan",
  LYP: "Faisalabad",
  UET: "Quetta",
  GIL: "Gilgit",
  SKZ: "Sukkur",
  BHW: "Bahawalpur",
  DSK: "Dera Ismail Khan",
  RYK: "Rahim Yar Khan",
  WNS: "Nawabshah",
  MJD: "Moenjodaro",
  KDU: "Skardu",
  DBR: "Dalbandin",
  PZH: "Zhob",

  // SAUDI ARABIA
  JED: "Jeddah",
  MED: "Madinah",
  RUH: "Riyadh",
  DMM: "Dammam",
  AHB: "Abha",
  TIF: "Taif",
  ELQ: "Al Qassim",
  HAS: "Hail",
  GIZ: "Jizan",
  EAM: "Neom",
  AJF: "Al Jouf",
  TUU: "Tabuk",
  ULH: "Al Ula",
  AQI: "Qaisumah",
  BHH: "Bisha",
  TUI: "Turaif",
  RAE: "Arar",

  // UAE
  DXB: "Dubai",
  AUH: "Abu Dhabi",
  SHJ: "Sharjah",
  AAN: "Al Ain",
  RKT: "Ras Al Khaimah",
  DWC: "Dubai Al Maktoum",

  // QATAR / BAHRAIN / OMAN / KUWAIT
  DOH: "Doha",
  BAH: "Bahrain",
  MCT: "Muscat",
  SLL: "Salalah",
  KWI: "Kuwait City",

  // MIDDLE EAST
  BGW: "Baghdad",
  EBL: "Erbil",
  AMM: "Amman",
  BEY: "Beirut",
  TLV: "Tel Aviv",
  CAI: "Cairo",
  SSH: "Sharm El Sheikh",
  HRG: "Hurghada",
  IST: "Istanbul",
  SAW: "Istanbul",
  ADB: "Izmir",
  ESB: "Ankara",
  TBS: "Tbilisi",
  EVN: "Yerevan",
  GYD: "Baku",

  // SOUTH ASIA
  KTM: "Kathmandu",
  DAC: "Dhaka",
  CGP: "Chittagong",
  CMB: "Colombo",
  MLE: "Male",
  HRI: "Hambantota",
  KBL: "Kabul",

  // SOUTHEAST ASIA
  SIN: "Singapore",
  KUL: "Kuala Lumpur",
  BKK: "Bangkok",
  DMK: "Bangkok",
  HKT: "Phuket",
  CNX: "Chiang Mai",
  DPS: "Bali",
  CGK: "Jakarta",
  SUB: "Surabaya",
  KNO: "Medan",
  HAN: "Hanoi",
  SGN: "Ho Chi Minh City",
  DAD: "Da Nang",
  MNL: "Manila",
  CEB: "Cebu",
  PNH: "Phnom Penh",
  REP: "Siem Reap",
  VTE: "Vientiane",
  RGN: "Yangon",
  BWN: "Bandar Seri Begawan",
  DIL: "Dili",

  // EAST ASIA
  HKG: "Hong Kong",
  NRT: "Tokyo",
  HND: "Tokyo",
  KIX: "Osaka",
  NGO: "Nagoya",
  ICN: "Seoul",
  GMP: "Seoul",
  PEK: "Beijing",
  PKX: "Beijing",
  PVG: "Shanghai",
  SHA: "Shanghai",
  CAN: "Guangzhou",
  SZX: "Shenzhen",
  HAK: "Haikou",
  TPE: "Taipei",
  MFM: "Macau",

  // UK / IRELAND
  LHR: "London",
  LGW: "London",
  STN: "London",
  LTN: "London",
  MAN: "Manchester",
  BHX: "Birmingham",
  EDI: "Edinburgh",
  GLA: "Glasgow",
  BRS: "Bristol",
  DUB: "Dublin",

  // EUROPE
  CDG: "Paris",
  ORY: "Paris",
  FRA: "Frankfurt",
  MUC: "Munich",
  BER: "Berlin",
  DUS: "Dusseldorf",
  HAM: "Hamburg",
  AMS: "Amsterdam",
  ZRH: "Zurich",
  GVA: "Geneva",
  VIE: "Vienna",
  FCO: "Rome",
  MXP: "Milan",
  VCE: "Venice",
  BCN: "Barcelona",
  MAD: "Madrid",
  LIS: "Lisbon",
  ATH: "Athens",
  CPH: "Copenhagen",
  ARN: "Stockholm",
  OSL: "Oslo",
  HEL: "Helsinki",
  WAW: "Warsaw",
  PRG: "Prague",
  BUD: "Budapest",
  BRU: "Brussels",
  ZAG: "Zagreb",
  SOF: "Sofia",
  OTP: "Bucharest",
  SVO: "Moscow",
  DME: "Moscow",
  LED: "Saint Petersburg",

  // USA
  JFK: "New York",
  EWR: "Newark",
  LGA: "New York",
  BOS: "Boston",
  ORD: "Chicago",
  IAD: "Washington DC",
  DCA: "Washington DC",
  ATL: "Atlanta",
  MIA: "Miami",
  LAX: "Los Angeles",
  SFO: "San Francisco",
  SEA: "Seattle",
  DFW: "Dallas",
  IAH: "Houston",
  DEN: "Denver",
  LAS: "Las Vegas",
  PHX: "Phoenix",
  MCO: "Orlando",
  MSP: "Minneapolis",
  DTW: "Detroit",
  CLT: "Charlotte",
  PHL: "Philadelphia",
  SAN: "San Diego",
  AUS: "Austin",
  SJC: "San Jose",
  PDX: "Portland",

  // CANADA
  YYZ: "Toronto",
  YVR: "Vancouver",
  YUL: "Montreal",
  YYC: "Calgary",
  YEG: "Edmonton",
  YOW: "Ottawa",
  YHZ: "Halifax",

  // AUSTRALIA / NEW ZEALAND
  SYD: "Sydney",
  MEL: "Melbourne",
  BNE: "Brisbane",
  PER: "Perth",
  ADL: "Adelaide",
  DRW: "Darwin",
  AKL: "Auckland",
  WLG: "Wellington",
  CHC: "Christchurch",
  ZQN: "Queenstown",

  // AFRICA
  ADD: "Addis Ababa",
  NBO: "Nairobi",
  JNB: "Johannesburg",
  CPT: "Cape Town",
  DUR: "Durban",
  LOS: "Lagos",
  ABV: "Abuja",
  ACC: "Accra",
  KGL: "Kigali",
  DAR: "Dar es Salaam",
  ZNZ: "Zanzibar",
  MRU: "Mauritius",
  SEZ: "Seychelles",
  CMN: "Casablanca",
  RAK: "Marrakech",
  TUN: "Tunis",
  ALG: "Algiers",
  LUN: "Lusaka",
  HRE: "Harare",
  MBA: "Mombasa",

  // CENTRAL ASIA
  TSE: "Astana",
  ALA: "Almaty",
  TAS: "Tashkent",
  SKD: "Samarkand",
  FRU: "Bishkek",
  DYU: "Dushanbe",
  ASB: "Ashgabat",
  UGC: "Urgench",
};

const CITY_TO_CODE: Record<string, string> = {};

for (const [code, city] of Object.entries(AIRPORT_CITIES)) {
  const key = city.toLowerCase().trim();

  if (!CITY_TO_CODE[key]) {
    CITY_TO_CODE[key] = code;
  }
}

/**
 * Pakistan airports.
 */
export const PK_AIRPORT_CODES = new Set<string>([
  "ISB",
  "LHE",
  "KHI",
  "PEW",
  "SKT",
  "MUX",
  "LYP",
  "UET",
  "GIL",
  "SKZ",
  "BHW",
  "DSK",
  "RYK",
  "WNS",
  "MJD",
  "KDU",
  "DBR",
  "PZH",
]);

/**
 * Gulf airports.
 */
export const GULF_AIRPORT_CODES = new Set<string>([
  "DXB",
  "AUH",
  "SHJ",
  "DWC",
  "AAN",
  "RKT",
  "DOH",
  "BAH",
  "MCT",
  "SLL",
  "KWI",
  "JED",
  "MED",
  "RUH",
  "DMM",
  "AHB",
  "TIF",
  "ELQ",
  "HAS",
  "GIZ",
  "TUU",
  "ULH",
  "AJF",
  "RAE",
  "EAM",
]);

/**
 * Check whether a value looks like an IATA code.
 */
export function isIataCode(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  return /^[A-Za-z]{3}$/.test(value.trim());
}

/**
 * Resolve airport/city into the structure expected by the
 * existing Journey Genie inventory code.
 *
 * Returns:
 * {
 *   code: "DEL",
 *   city: "Delhi"
 * }
 *
 * or null when it cannot resolve the value.
 */
export function resolveAirport(
  value: unknown,
): AirportResolution | null {
  if (typeof value !== "string") {
    return null;
  }

  const input = value.trim();

  if (!input) {
    return null;
  }

  const upper = input.toUpperCase();

  if (AIRPORT_CITIES[upper]) {
    return {
      code: upper,
      city: AIRPORT_CITIES[upper],
    };
  }

  const code = CITY_TO_CODE[input.toLowerCase()];

  if (!code) {
    return null;
  }

  return {
    code,
    city: AIRPORT_CITIES[code],
  };
}

/**
 * Existing project expects TWO arguments here:
 *
 * isOutboundGroupTicket(from, to)
 */
export function isOutboundGroupTicket(
  from: unknown,
  to?: unknown,
): boolean {
  const fromAirport = resolveAirport(from);
  const toAirport = resolveAirport(to);

  if (!fromAirport || !toAirport) {
    return false;
  }

  return (
    PK_AIRPORT_CODES.has(fromAirport.code) &&
    GULF_AIRPORT_CODES.has(toAirport.code)
  );
}

/**
 * Return-leg detection.
 */
export function isReturnLegExternalId(
  externalId: unknown,
): boolean {
  if (typeof externalId !== "string") {
    return false;
  }

  const value = externalId.toLowerCase().trim();

  return (
    value.includes("return") ||
    value.includes("return-leg") ||
    value.includes("return_leg") ||
    value.includes("inbound") ||
    value.includes("in-bound")
  );
}

/**
 * Match an airport/city against a search filter.
 */
export function cityMatchesFilter(
  airportCode: unknown,
  filter: unknown,
): boolean {
  if (typeof filter !== "string" || !filter.trim()) {
    return true;
  }

  if (typeof airportCode !== "string") {
    return false;
  }

  const search = filter.trim().toLowerCase();
  const code = airportCode.trim().toUpperCase();
  const city = AIRPORT_CITIES[code]?.toLowerCase() || "";

  return (
    code.toLowerCase().includes(search) ||
    city.includes(search)
  );
}

/**
 * Format a route for display.
 */
export function formatRouteLabel(
  from: unknown,
  to: unknown,
): string {
  const fromAirport = resolveAirport(from);
  const toAirport = resolveAirport(to);

  const fromLabel =
    fromAirport?.city ||
    (typeof from === "string" && from.trim()) ||
    "Origin";

  const toLabel =
    toAirport?.city ||
    (typeof to === "string" && to.trim()) ||
    "Destination";

  return `${fromLabel} → ${toLabel}`;
}

/**
 * Popular cities used by the search UI.
 *
 * The search bar can still accept destinations not listed here.
 */
export const SEARCH_CITIES = [
  // India
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Amritsar",
  "Pune",
  "Goa",
  "Srinagar",
  "Jaipur",
  "Lucknow",
  "Varanasi",
  "Chandigarh",
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
  "Mangaluru",
  "Dehradun",
  "Leh",
  "Jammu",
  "Dharamshala",
  "Jodhpur",
  "Udaipur",
  "Agra",

  // Pakistan
  "Islamabad",
  "Lahore",
  "Karachi",
  "Peshawar",
  "Sialkot",
  "Multan",
  "Faisalabad",
  "Quetta",

  // Gulf
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Doha",
  "Riyadh",
  "Jeddah",
  "Madinah",
  "Dammam",
  "Muscat",
  "Kuwait City",
  "Bahrain",

  // Asia
  "Singapore",
  "Bangkok",
  "Phuket",
  "Bali",
  "Kuala Lumpur",
  "Jakarta",
  "Manila",
  "Hong Kong",
  "Tokyo",
  "Osaka",
  "Seoul",
  "Beijing",
  "Shanghai",
  "Hanoi",
  "Ho Chi Minh City",
  "Colombo",
  "Kathmandu",
  "Male",
  "Dhaka",
  "Istanbul",

  // Europe
  "London",
  "Manchester",
  "Paris",
  "Amsterdam",
  "Frankfurt",
  "Munich",
  "Zurich",
  "Rome",
  "Milan",
  "Barcelona",
  "Madrid",
  "Lisbon",
  "Vienna",
  "Athens",
  "Prague",
  "Budapest",
  "Brussels",
  "Copenhagen",
  "Stockholm",

  // North America
  "New York",
  "Boston",
  "Chicago",
  "Washington DC",
  "Atlanta",
  "Miami",
  "Los Angeles",
  "San Francisco",
  "Seattle",
  "Dallas",
  "Houston",
  "Toronto",
  "Vancouver",
  "Montreal",

  // Australia / New Zealand
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Auckland",
  "Wellington",
  "Christchurch",

  // Africa
  "Nairobi",
  "Johannesburg",
  "Cape Town",
  "Lagos",
  "Accra",
  "Addis Ababa",
  "Mauritius",
  "Seychelles",
  "Zanzibar",

  // Central Asia
  "Tashkent",
  "Almaty",
  "Astana",
  "Bishkek",
  "Dushanbe",
  "Baku",
  "Tbilisi",
  "Yerevan",
] as const;

/**
 * Export complete airport directory.
 */
export { AIRPORT_CITIES, CITY_TO_CODE };
