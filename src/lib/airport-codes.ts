/**
 * Journey Genie
 * Airport and city code utilities.
 *
 * This file maintains compatibility with the existing ticket/inventory
 * system while supporting India and worldwide destinations.
 */

const AIRPORT_CITIES: Record<string, string> = {
  // =========================================================
  // INDIA
  // =========================================================

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

  // =========================================================
  // PAKISTAN
  // =========================================================

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

  // =========================================================
  // SAUDI ARABIA
  // =========================================================

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

  // =========================================================
  // UAE
  // =========================================================

  DXB: "Dubai",
  AUH: "Abu Dhabi",
  SHJ: "Sharjah",
  AAN: "Al Ain",
  RKT: "Ras Al Khaimah",
  DWC: "Dubai Al Maktoum",

  // =========================================================
  // QATAR / BAHRAIN / OMAN / KUWAIT
  // =========================================================

  DOH: "Doha",
  BAH: "Bahrain",
  MCT: "Muscat",
  SLL: "Salalah",
  KWI: "Kuwait City",

  // =========================================================
  // MIDDLE EAST
  // =========================================================

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

  // =========================================================
  // SOUTH ASIA
  // =========================================================

  KTM: "Kathmandu",
  DAC: "Dhaka",
  CGP: "Chittagong",
  CMB: "Colombo",
  MLE: "Male",
  HRI: "Hambantota",
  KBL: "Kabul",

  // =========================================================
  // SOUTHEAST ASIA
  // =========================================================

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

  // =========================================================
  // EAST ASIA
  // =========================================================

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

  // =========================================================
  // UNITED KINGDOM / IRELAND
  // =========================================================

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

  // =========================================================
  // EUROPE
  // =========================================================

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

  // =========================================================
  // USA
  // =========================================================

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

  // =========================================================
  // CANADA
  // =========================================================

  YYZ: "Toronto",
  YVR: "Vancouver",
  YUL: "Montreal",
  YYC: "Calgary",
  YEG: "Edmonton",
  YOW: "Ottawa",
  YHZ: "Halifax",

  // =========================================================
  // AUSTRALIA / NEW ZEALAND
  // =========================================================

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

  // =========================================================
  // AFRICA
  // =========================================================

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

  // =========================================================
  // CENTRAL ASIA
  // =========================================================

  TSE: "Astana",
  ALA: "Almaty",
  TAS: "Tashkent",
  SKD: "Samarkand",
  FRU: "Bishkek",
  DYU: "Dushanbe",
  ASB: "Ashgabat",
  UGC: "Urgench",
};

/**
 * City name -> IATA code.
 *
 * If multiple airports have the same city name, the first airport
 * in the directory becomes the default city code.
 */
const CITY_TO_CODE: Record<string, string> = {};

for (const [code, city] of Object.entries(AIRPORT_CITIES)) {
  const normalizedCity = city.trim().toLowerCase();

  if (!CITY_TO_CODE[normalizedCity]) {
    CITY_TO_CODE[normalizedCity] = code;
  }
}

/**
 * Pakistan airport codes.
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
 * Gulf airport codes.
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
 * Determine whether a value is a valid-looking IATA code.
 */
export function isIataCode(value: unknown): boolean {
  if (typeof value !== "string") {
    return false;
  }

  return /^[A-Za-z]{3}$/.test(value.trim());
}

/**
 * Resolve a city or airport code.
 *
 * Examples:
 * resolveAirport("Delhi") -> "DEL"
 * resolveAirport("DEL") -> "DEL"
 * resolveAirport("Dubai") -> "DXB"
 */
export function resolveAirport(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();

  if (!normalized) {
    return null;
  }

  const upper = normalized.toUpperCase();

  if (AIRPORT_CITIES[upper]) {
    return upper;
  }

  return CITY_TO_CODE[normalized.toLowerCase()] || null;
}

/**
 * Determine whether a route is an outbound group ticket.
 *
 * IMPORTANT:
 * The existing project calls this function with TWO arguments:
 *
 * isOutboundGroupTicket(from, to)
 *
 * Therefore both arguments are supported here.
 *
 * The second argument is optional so older one-argument calls,
 * if any, remain compatible.
 */
export function isOutboundGroupTicket(
  from: unknown,
  to?: unknown,
): boolean {
  const fromCode = resolveAirport(from);
  const toCode = resolveAirport(to);

  if (!fromCode || !toCode) {
    return false;
  }

  /*
   * Existing inventory logic is primarily concerned with
   * Pakistan -> Gulf/Saudi outbound routes.
   */
  return (
    PK_AIRPORT_CODES.has(fromCode) &&
    GULF_AIRPORT_CODES.has(toCode)
  );
}

/**
 * Detect return-leg external IDs.
 */
export function isReturnLegExternalId(
  externalId: unknown,
): boolean {
  if (typeof externalId !== "string") {
    return false;
  }

  const value = externalId.trim().toLowerCase();

  if (!value) {
    return false;
  }

  return (
    value.includes("return") ||
    value.includes("return-leg") ||
    value.includes("return_leg") ||
    value.includes("inbound") ||
    value.includes("in-bound")
  );
}

/**
 * Determine whether a city/airport matches a filter.
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
 *
 * Example:
 * DEL + DXB
 * -> Delhi → Dubai
 */
export function formatRouteLabel(
  from: unknown,
  to: unknown,
): string {
  const fromValue =
    typeof from === "string" ? from.trim() : "";

  const toValue =
    typeof to === "string" ? to.trim() : "";

  const fromCode = resolveAirport(fromValue);
  const toCode = resolveAirport(toValue);

  const fromLabel =
    (fromCode && AIRPORT_CITIES[fromCode]) ||
    fromValue ||
    "Origin";

  const toLabel =
    (toCode && AIRPORT_CITIES[toCode]) ||
    toValue ||
    "Destination";

  return `${fromLabel} → ${toLabel}`;
}

/**
 * Popular search cities.
 *
 * The actual Journey Genie search bar can still accept
 * any city worldwide because it uses free-text input.
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
 * Export the complete airport directory.
 */
export { AIRPORT_CITIES, CITY_TO_CODE };
