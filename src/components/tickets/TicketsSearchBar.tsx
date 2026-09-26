"use client";

import { useState } from "react";
import {
  ArrowRightLeft,
  Calendar,
  MapPin,
  MessageCircle,
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

const INDIAN_CITIES = [
  "Delhi (DEL)",
  "Mumbai (BOM)",
  "Amritsar (ATQ)",
  "Bengaluru (BLR)",
  "Hyderabad (HYD)",
  "Chennai (MAA)",
  "Kolkata (CCU)",
  "Ahmedabad (AMD)",
  "Chandigarh (IXC)",
  "Pune (PNQ)",
  "Goa (GOI)",
  "Srinagar (SXR)",
  "Kochi (COK)",
  "Jaipur (JAI)",
  "Lucknow (LKO)",
  "Other Indian City",
] as const;

const POPULAR_DESTINATIONS = [
  "Dubai (DXB)",
  "Bali (DPS)",
  "Singapore (SIN)",
  "Bangkok (BKK)",
  "Maldives (MLE)",
  "London (LHR)",
  "Paris (CDG)",
  "New York (JFK)",
  "Goa (GOI)",
  "Srinagar (SXR)",
  "Kerala (COK)",
  "Other Destination",
] as const;

const CABIN_CLASSES = [
  { label: "Economy", value: "Economy" },
  { label: "Premium Economy", value: "Premium Economy" },
  { label: "Business", value: "Business" },
] as const;

interface TicketsSearchBarProps {
  className?: string;
  basePath?: string;
}

export function TicketsSearchBar({
  className,
}: TicketsSearchBarProps) {
  const [from, setFrom] = useState("Delhi (DEL)");
  const [to, setTo] = useState("Dubai (DXB)");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState("1");
  const [cabinClass, setCabinClass] = useState("Economy");

  function swapCities() {
    setFrom(to);
    setTo(from);
  }

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault();

    const message = `Hi Journey Genie,

I want to check a flight fare.

From: ${from}
To: ${to}
Departure: ${departureDate || "Not selected"}
Return: ${returnDate || "One way"}
Travellers: ${travellers}
Class: ${cabinClass}

Please check the available flight fares for me.`;

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
        {/* India-focused heading */}
        <div className="border-b border-border/60 bg-gradient-to-r from-navy to-navy-light px-5 py-5 text-white md:px-7">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇮🇳</span>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Flights from India
              </p>

              <h2 className="mt-1 font-heading text-xl font-bold md:text-2xl">
                Check Your Flight Fare Before You Book
              </h2>
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
            Tell us your travel details and our Journey Genie team will check
            the available flight fare options for you on WhatsApp.
          </p>
        </div>

        <div className="p-5 md:p-7">

          {/* From / To */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2 md:gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                Flying From
              </Label>

              <Select value={from} onValueChange={setFrom}>
                <SelectTrigger className="h-12 w-full border-border/60">
                  <SelectValue placeholder="Select departure city" />
                </SelectTrigger>

                <SelectContent>
                  {INDIAN_CITIES.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              type="button"
              onClick={swapCities}
              className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-secondary/50 text-navy transition hover:rotate-180 hover:border-gold hover:text-gold"
              aria-label="Swap departure and destination"
            >
              <ArrowRightLeft className="h-4 w-4" />
            </button>

            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                Flying To
              </Label>

              <Select value={to} onValueChange={setTo}>
                <SelectTrigger className="h-12 w-full border-border/60">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>

                <SelectContent>
                  {POPULAR_DESTINATIONS.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Travel details */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Departure */}
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <Calendar className="h-3.5 w-3.5 text-gold" />
                Departure
              </Label>

              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="h-12 w-full rounded-lg border border-border/60 bg-transparent px-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/10"
              />
            </div>

            {/* Return */}
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

            {/* Travellers */}
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-navy">
                <Users className="h-3.5 w-3.5 text-gold" />
                Travellers
              </Label>

              <Select value={travellers} onValueChange={setTravellers}>
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

            {/* Class */}
            <div className="space-y-2">
              <Label className="text-navy">
                Cabin Class
              </Label>

              <Select value={cabinClass} onValueChange={setCabinClass}>
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

          {/* Trust message */}
          <div className="mt-5 rounded-xl bg-light-bg px-4 py-3 text-center">
            <p className="text-sm font-semibold text-navy">
              Found a cheaper fare somewhere else?
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Send us the screenshot on WhatsApp. Our travel team will check
              the available options for you.
            </p>
          </div>

          {/* Popular India routes */}
          <div className="mt-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Popular from India
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {[
                "Delhi → Dubai",
                "Delhi → Bali",
                "Mumbai → Dubai",
                "Delhi → Singapore",
                "Delhi → Goa",
                "Delhi → Kashmir",
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
        </div>
      </form>
    </div>
  );
}
