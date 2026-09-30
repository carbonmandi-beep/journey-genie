import { ASSETS } from "./assets";

export const PAGE_HEROES = {
  about: {
    title: "About Journey Genie",
    subtitle:
      "Your trusted travel partner for flights, holidays, hotels, visas and personalized travel support across India and worldwide.",
    backgroundImage: ASSETS.heroes.about,
  },

  services: {
    title: "Our Services",
    subtitle:
      "Domestic & international flights, holiday packages, hotels, visas, travel assistance and personalized support.",
    backgroundImage: ASSETS.heroes.services,
  },

  umrah: {
    title: "Umrah Packages",
    subtitle:
      "Carefully planned Umrah packages with flights, hotels and complete travel assistance.",
    backgroundImage: ASSETS.heroes.umrah,
  },

  tours: {
    title: "Tour Packages",
    subtitle:
      "Discover Dubai, Turkey, Malaysia, Thailand, Azerbaijan and worldwide holiday destinations.",
    backgroundImage: ASSETS.heroes.tours,
  },

  tickets: {
    title: "Group Flight Tickets",
    subtitle:
      "Explore flight options for individual, family and group travel and send your booking request to our team.",
    backgroundImage: ASSETS.heroes.tickets,
  },

  destinations: {
    title: "Explore Destinations",
    subtitle:
      "Discover exciting domestic and international destinations for your next journey.",
    backgroundImage: ASSETS.heroes.destinations,
  },

  corporate: {
    title: "Corporate Travel",
    subtitle:
      "Travel management and personalized support for companies, organizations, groups and business travellers.",
    backgroundImage: ASSETS.heroes.corporate,
  },

  gallery: {
    title: "Travel Gallery",
    subtitle:
      "Explore inspiring destinations, journeys and travel experiences from Journey Genie.",
    backgroundImage: ASSETS.heroes.poster,
  },

  blog: {
    title: "Blog & Travel News",
    subtitle:
      "Travel guides, destination ideas, booking tips and useful travel updates.",
    backgroundImage: ASSETS.heroes.blog,
  },

  contact: {
    title: "Contact Us",
    subtitle:
      "Delhi and Amritsar offices — phone, WhatsApp and personal travel support.",
    backgroundImage: ASSETS.heroes.contact,
  },

  inquiry: {
    title: "Book / Inquiry",
    subtitle:
      "Send us your travel requirement and our team will help you plan your journey.",
    backgroundImage: ASSETS.heroes.inquiry,
  },
} as const;
