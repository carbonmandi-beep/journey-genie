"use client";

import { useState } from "react";
import {
  ArrowRightLeft,
  Calendar,
  MapPin,
  MessageCircle,
  Search,
  Users,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const POPULAR_CITIES = [
  // INDIA
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

  // UAE / GULF
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Doha",
  "Muscat",
  "Bahrain",
  "Riyadh",
  "Jeddah",
  "Madinah",
  "Dammam",
  "Kuwait City",
  "Al Ain",

  // SOUTH EAST ASIA
  "Singapore",
  "Bangkok",
  "Phuket",
  "Krabi",
  "Bali",
  "Jakarta",
  "Kuala Lumpur",
  "Langkawi",
  "Manila",
  "Ho Chi Minh City",
  "Hanoi",
  "Phnom Penh",
  "Yangon",
  "Colombo",
  "Male",

  // EUROPE
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

  // NORTH AMERICA
  "New York",
  "Los Angeles",
  "San Francisco",
  "Chicago",
  "Washington DC",
  "Boston",
  "Miami",
  "Dallas",
  "Houston",
  "Seattle",
  "Atlanta",
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",

  // AUSTRALIA / NEW ZEALAND
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Auckland",
  "Christchurch",

  // AFRICA
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

  // EAST ASIA
  "Tokyo",
  "Osaka",
  "Seoul",
  "Hong Kong",
  "Shanghai",
  "Beijing",
  "Guangzhou",
  "Shenzhen",
  "Taipei",

  // OTHER POPULAR DESTINATIONS
  "Maldives",
  "Mauritius",
  "Seychelles",
  "Tashkent",
  "Almaty",
  "Baku",
  "Tbilisi",
  "Yerevan",
  "Kathmandu",
  "Dhaka",
  "Kathmandu",
  "Male",
] as const;

const CABIN_CLASSES = [
  {
    label: "Economy",
    value: "Economy",
  },
  {
    label: "Premium Economy",
    value: "Premium Economy",
  },
  {
    label: "Business",
    value: "Business",
  },
  {
    label: "First Class",
    value: "First Class",
  },
] as const;

interface TicketsSearchBarProps {
  className?: string;
  basePath?: string;
}

export function TicketsSearchBar({
  className,
}: TicketsSearchBarProps) {
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Dubai");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState("1");
  const [cabinClass, setCabinClass] = useState("Economy");

  function swapCities() {
    setFrom(to);
    setTo(from);
  }

  function handleWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = `Hi Journey Genie,

I want to check a flight fare.

✈️ From: ${from}
🌍 To: ${to}
📅 Departure: ${departureDate || "Not selected"}
📅 Return: ${returnDate || "One way"}
👥 Travellers: ${travellers}
💺 Class: ${cabinClass}

Please check the available flight fare options for me.

Thank you.`;

    const whatsappUrl = `https://wa.me/919876260822?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleWhatsApp}
        className="overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-2xl shadow-navy/10"
      >
        {/* HEADER */}
        <div className="border-b border-white/10 bg-gradient-to-r from-navy to-navy-light px-5 py-6 text-white md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl">
              🇮🇳
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Journey Genie Flights
              </p>

              <h2 className="mt-1 font-heading text-xl font-bold md:text-2xl">
                Check Your Flight Fare Before You Book
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/70">
            From anywhere in India to anywhere in the world. Enter your
            destination and our Journey Genie travel team will check the
            available fare options for you on WhatsApp.
          </p>
        </div>

        <div className="p-5 md:p-7">
          {/* FROM / TO */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2 md:gap-4">
            {/* FROM */}
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                Flying From
              </Label>

              <input
                list="journey-genie-cities"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Search any city or airport"
                required
                className="h-12 w-full rounded-lg border border-border/60 bg-white px-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/10"
              />
            </div>

            {/* SWAP */}
            <button
              type="button"
              onClick={swapCities}
              className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-navy transition hover:rotate-180 hover:border-gold hover:text-gold"
              aria-label="Swap departure and destination"
            >
              <ArrowRightLeft className="h-4 w-4" />
            </button>

            {/* TO */}
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                Flying To
              </Label>

              <input
                list="journey-genie-cities"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Search any city or airport"
                required
                className="h-12 w-full rounded-lg border border-border/60 bg-white px-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/10"
              />
            </div>
          </div>

          {/* CITY SUGGESTIONS */}
          <datalist id="journey-genie-cities">
            {POPULAR_CITIES.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>

          {/* TRAVEL DETAILS */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* DEPARTURE */}
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <Calendar className="h-3.5 w-3.5 text-gold" />
                Departure
              </Label>

              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                className="h-12 w-full rounded-lg border border-border/60 bg-transparent px-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/10"
              />
            </div>

            {/* RETURN */}
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <Calendar className="h-3.5 w-3.5 text-gold" />
                Return
              </Label>

              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="h-12 w-full rounded-lg border border-border/60 bg-transparent px-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/10"
              />
            </div>

            {/* TRAVELLERS */}
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <Users className="h-3.5 w-3.5 text-gold" />
                Travellers
              </Label>

              <Select
                value={travellers}
                onValueChange={(value) => {
                  if (value) setTravellers(value);
                }}
              >
                <SelectTrigger className="h-12 w-full border-border/60">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="1">1 Traveller</SelectItem>
                  <SelectItem value="2">2 Travellers</SelectItem>
                  <SelectItem value="3">3 Travellers</SelectItem>
                  <SelectItem value="4">4 Travellers</SelectItem>
                  <SelectItem value="5">5 Travellers</SelectItem>
                  <SelectItem value="6+">6+ Travellers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* CABIN */}
            <div className="space-y-2">
              <Label className="text-navy">Cabin Class</Label>

              <Select
                value={cabinClass}
                onValueChange={(value) => {
                  if (value) setCabinClass(value);
                }}
              >
                <SelectTrigger className="h-12 w-full border-border/60">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  {CABIN_CLASSES.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 text-base font-bold text-white shadow-lg shadow-[#25D366]/20 transition hover:-translate-y-0.5 hover:brightness-105"
          >
            <MessageCircle className="h-5 w-5" />
            CHECK FARE ON WHATSAPP
          </button>

          {/* TRUST MESSAGE */}
          <div className="mt-5 rounded-xl bg-light-bg px-4 py-4 text-center">
            <p className="text-sm font-semibold text-navy">
              Found a cheaper fare somewhere else?
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Send us the screenshot on WhatsApp. Our travel team will check
              the available options for you.
            </p>
          </div>

          {/* POPULAR INDIA ROUTES */}
          <div className="mt-7">
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Popular Routes from India
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {[
                "Delhi → Dubai",
                "Mumbai → Dubai",
                "Delhi → Bali",
                "Delhi → Singapore",
                "Delhi → London",
                "Delhi → Bangkok",
                "Mumbai → London",
                "Delhi → Maldives",
                "Delhi → Paris",
                "Delhi → New York",
              ].map((route) => (
                <span
                  key={route}
                  className="rounded-full border border-border/60 bg-white px-3 py-1.5 text-xs font-medium text-navy/70"
                >
                  {route}
                </span>
              ))}
            </div>
          </div>

          {/* WORLDWIDE MESSAGE */}
          <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <Search className="h-3.5 w-3.5 text-gold" />
            <span>
              Can't find your city? Just type it — we support worldwide
              destinations.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
