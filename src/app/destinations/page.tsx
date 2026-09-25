import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  MapPin,
  MessageCircle,
  Plane,
  Sparkles,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const destinations = [
  {
    name: "Goa",
    region: "India",
    type: "Beach Holiday",
    description:
      "Beaches, resorts, nightlife and relaxed coastal experiences.",
  },
  {
    name: "Kashmir",
    region: "India",
    type: "Mountain Escape",
    description:
      "Beautiful valleys, mountains, lakes and unforgettable family holidays.",
  },
  {
    name: "Kerala",
    region: "India",
    type: "Nature & Backwaters",
    description:
      "Backwaters, beaches, nature, wellness and memorable stays.",
  },
  {
    name: "Rajasthan",
    region: "India",
    type: "Culture & Heritage",
    description:
      "Palaces, forts, heritage hotels and vibrant local experiences.",
  },
  {
    name: "Dubai",
    region: "International",
    type: "City Escape",
    description:
      "Luxury, shopping, beaches, attractions and unforgettable city experiences.",
  },
  {
    name: "Bali",
    region: "International",
    type: "Tropical Escape",
    description:
      "Beaches, resorts, culture, adventure and relaxing island experiences.",
  },
  {
    name: "Singapore",
    region: "International",
    type: "Family Holiday",
    description:
      "World-class attractions, shopping, food and family experiences.",
  },
  {
    name: "Thailand",
    region: "International",
    type: "Beach & Adventure",
    description:
      "Islands, beaches, vibrant cities, food and exciting experiences.",
  },
  {
    name: "Maldives",
    region: "International",
    type: "Luxury Escape",
    description:
      "Beautiful islands, beaches and premium resort experiences.",
  },
];

const whatsappUrl =
  "https://wa.me/919876260822?text=Hi%20Journey%20Genie,%20I%20want%20to%20plan%20a%20trip.";

export const metadata = {
  title: "Travel Destinations | India & Worldwide | Journey Genie",
  description:
    "Explore popular domestic and international destinations with Journey Genie. Plan flights, hotels and customized holidays with personal travel assistance.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Explore Destinations"
        subtitle="From incredible journeys across India to unforgettable international escapes — your next adventure starts with Journey Genie."
        backgroundImage={ASSETS.heroes.destinations}
        badge="Journey Genie"
        cta={{
          label: "Plan My Trip",
          href: whatsappUrl,
        }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
              India & Worldwide
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Where Will Your Journey Take You?
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Whether you want a weekend escape within India or an
              international holiday, Journey Genie helps you plan the complete
              journey around your requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <a
                key={destination.name}
                href={`${whatsappUrl}%20Destination:%20${encodeURIComponent(
                  destination.name
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {destination.region}
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gold">
                  {destination.type}
                </p>

                <h3 className="mt-2 font-heading text-2xl font-bold text-navy">
                  {destination.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {destination.description}
                </p>

                <span className="mt-5 inline-flex items-center text-sm font-bold text-royal">
                  Plan this trip
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto h-8 w-8 text-gold" />

            <h2 className="mt-4 font-heading text-3xl font-bold text-navy md:text-4xl">
              Domestic or International?
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              You choose the destination. Journey Genie helps you explore the
              available flights, hotels and holiday options.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                <MapPin className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-heading text-2xl font-bold text-navy">
                Explore India
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Plan holidays across India's beaches, mountains, heritage
                destinations, cities and natural escapes.
              </p>

              <Link
                href="/tours/"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-6 gap-2"
                )}
              >
                Explore Holidays
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl bg-navy p-8 text-white shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy">
                <Globe2 className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-heading text-2xl font-bold">
                Explore the World
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Discover international destinations with flights, hotels and
                customized holiday planning.
              </p>

              <Link
                href="/tour-packages/"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 font-bold text-navy transition hover:opacity-90"
              >
                International Holidays
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-navy to-royal px-6 py-12 text-center text-white md:px-12">
            <Plane className="mx-auto h-9 w-9 text-gold" />

            <h2 className="mt-5 font-heading text-3xl font-bold md:text-4xl">
              Found Your Destination?
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Tell us your destination, travel dates and number of travellers.
              Our travel team will help you explore the available options.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center rounded-lg bg-gold px-6 py-3.5 font-bold text-navy transition hover:opacity-90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Plan My Trip on WhatsApp
            </a>

            <p className="mt-4 text-sm text-white/50">
              {SITE.whatsappNumber}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
