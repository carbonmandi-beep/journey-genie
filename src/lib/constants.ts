export const SITE = {
  name: "Journey Genie",
  shortName: "Journey Genie",
  tagline: "Your Magical Travel Partner",
  heroSubheading:
    "Domestic and international flights, hotels, holiday packages and visa assistance — with personal support from our travel team.",
  description:
    "Journey Genie is your magical travel partner for domestic and international flights, hotels, customized holiday packages and visa assistance.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://journeygenie.co",
  whatsapp:
    "https://wa.me/919876260822?text=Hi%20Journey%20Genie,%20I%20need%20help%20with%20my%20travel%20booking.",
  whatsappNumber: "+91 98762 60822",
  email: "",
  businessHours: "Monday – Saturday: 9:00 AM – 8:00 PM",
  regions: [
    "India",
    "Delhi",
    "Punjab",
    "Domestic",
    "International",
    "Worldwide",
  ],
  geo: {
    latitude: 28.6008,
    longitude: 77.2961,
  },
} as const;

export const PAYMENT = {
  bankName: "Journey Genie",
  accountTitle: "Journey Genie",
  accountNumber: "Payment details shared after booking confirmation",
  iban: "",
  instructions:
    "Please contact Journey Genie on WhatsApp for payment instructions after your booking details have been confirmed.",
} as const;

export const OFFICES = {
  headOffice: {
  label: "Delhi Office",
  address:
    "C-2/8, Street No. 2, Acharya Niketan, Mayur Vihar Phase-I, Delhi – 110091",
  phone: "+91 70117 60572",
  phoneTel: "+917011760572",
  phoneAlt: "",
  phoneAltTel: "",
  mapEmbed:
      "https://www.google.com/maps?q=C-2%2F8%2C%20Street%20No.%202%2C%20Acharya%20Niketan%2C%20Mayur%20Vihar%20Phase-I%2C%20Delhi%20110091&output=embed",
  },

 islamabad: {
  label: "Punjab Office — Amritsar",
  address:
    "Gumtala, Mirankot Road, Meerankot Chowk, Amritsar – 143001, Punjab",
  phone: "+91 98762 60822",
  phoneTel: "+919876260822",
  phoneAlt: "",
  phoneAltTel: "",
  mapEmbed:
      "https://www.google.com/maps?q=Gumtala%2C%20Mirankot%20Road%2C%20Meerankot%20Chowk%2C%20Amritsar%20143001%2C%20Punjab&output=embed",
  },

  bannu: {
    label: "Punjab Office — Amritsar",
    address:
      "Gumtala, Mirankot Road, Meerankot Chowk, Amritsar – 143001, Punjab",
    phone: "+91 98762 60822",
    phoneTel: "+919876260822",
    mapEmbed:
      "https://www.google.com/maps?q=Gumtala%2C%20Mirankot%20Road%2C%20Meerankot%20Chowk%2C%20Amritsar%20143001%2C%20Punjab&output=embed",
  },
} as const;

export const OFFICE_DISPLAY_ORDER = [
  OFFICES.headOffice,
  OFFICES.islamabad,
] as const;

export const SOCIAL = {
  facebook: "",
  facebookGroup: "",
  instagram: "https://www.instagram.com/journeygenie.co/",
  linkedin: "https://www.linkedin.com/company/journey-genie/",
  twitter: "",
  whatsapp: SITE.whatsapp,
} as const;

export const TRUST_BADGES = [
  "Domestic & International",
  "Personal Travel Support",
  "WhatsApp Assistance",
  "Customized Travel",
] as const;

export const TRUST_TEXT = [
  "Domestic and international travel assistance",
  "Personal support from enquiry to booking",
  "Flights, hotels and holiday packages",
  "Visa documentation and application assistance",
  "WhatsApp support at +91 98762 60822",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/available-tickets/", label: "Flights" },
  { href: "/tours/", label: "Holidays" },
  { href: "/hotels/", label: "Hotels" },
  { href: "/visa-assistance/", label: "Visa Assistance" },
  { href: "/about/", label: "About Us" },
  { href: "/contact/", label: "Contact" },
] as const;

export const LOGO_PATH = "/assets/logo/logo.png";

/** Compact transparent mark optimized for navbar / compact chrome */
export const LOGO_NAV_PATH = "/assets/logo/logo-nav.png";

export const LOGO_ALT_PATH = "/assets/logo/logo-alt.png";

// Legacy alias
export const MAP_EMBED_URL = OFFICES.headOffice.mapEmbed;
