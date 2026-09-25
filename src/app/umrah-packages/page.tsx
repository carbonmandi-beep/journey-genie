import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Hotel,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const destinations = [
  {
    name: "Dubai",
    description:
      "Experience modern luxury, shopping, beaches and unforgettable city experiences.",
  },
  {
    name: "Bali",
    description:
      "Plan a relaxing tropical escape with beaches, resorts, culture and adventure.",
  },
  {
    name: "Singapore",
    description:
      "Discover a vibrant city destination with attractions, shopping and family experiences.",
  },
  {
    name: "Thailand",
    description:
      "Explore beautiful islands, vibrant cities, local culture and memorable experiences.",
  },
  {
    name: "Maldives",
    description:
      "Plan a relaxing island holiday with beautiful beaches and premium resorts.",
  },
  {
    name: "International Escapes",
    description:
      "Tell us your destination and travel dates and our team will help build your trip.",
  },
];

const benefits = [
  {
    icon: Plane,
    title: "Flights",
    text: "Domestic and international flight options based on your route and travel dates.",
  },
  {
    icon: Hotel,
    title: "Hotels",
    text: "Hotels and resorts selected around your destination, preferences and budget.",
  },
  {
    icon: Globe2,
    title: "Personalized Planning",
    text: "Travel plans designed around your family, couple, group or corporate requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Assistance",
    text: "Support throughout the enquiry and booking process from our travel team.",
  },
];

export const metadata = {
  title: "International Holiday Packages | Journey Genie",
  description:
    "Explore customized international holiday packages with Journey Genie. Flights, hotels and travel assistance for Dubai, Bali, Singapore, Thailand, Maldives and more.",
};

export default function InternationalHolidayPackagesPage() {
  const whatsappUrl =
    "https://wa.me/919876260822?text=Hi%20Journey%20Genie,%20I%20want%20to%20plan%20an%20international holiday.";

  return (
    <>
      <PageHero
        title="International Holiday Packages"
        subtitle="Discover the world with Journey Genie — customized flights, hotels and experiences planned around you."
        backgroundImage={ASSETS.heroes.tours}
        badge="Journey Genie"
        cta={{
          label: "Plan My Holiday",
          href: whatsappUrl,
        }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
              Explore The World
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Your Holiday. Your Way.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Whether you are planning a romantic escape, a family holiday,
              an adventure or a relaxing international trip, Journey Genie
              helps you put the journey together.
            </p>

            <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
              Tell us your destination, dates and preferences. Our travel team
              will help you explore the available flight, hotel and holiday
              options.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "primaryGold", size: "lg" }),
                "mt-7 gap-2"
              )}
            >
              <MessageCircle className="h-5 w-5" />
              Plan My Holiday on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Popular Destinations
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Where Do You Want to Go?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <a
                key={destination.name}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <Globe2 className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                  {destination.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {destination.description}
                </p>

                <span className="mt-5 inline-flex items-center text-sm font-bold text-royal">
                  Enquire now
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <Sparkles className="mx-auto h-8 w-8 text-gold" />

            <h2 className="mt-4 font-heading text-3xl font-bold text-navy md:text-4xl">
              We Help You Plan the Complete Journey
            </h2>

            <p className="mt-4 text-muted-foreground">
              From the first enquiry to your final booking, Journey Genie
              provides personal travel assistance.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Ready to Travel?
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              Tell Us Where You Want to Go
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Share your destination, travel dates, number of travellers and
              approximate budget. Our travel team will help you explore the
              available options.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-gold px-6 py-3.5 font-bold text-navy transition hover:opacity-90"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Journey Genie
              </a>

              <Link
                href="/contact/"
                className={cn(
                  buttonVariants({ variant: "outlineLight" }),
                  "gap-2"
                )}
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-5 text-sm text-white/50">
              {SITE.whatsappNumber}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
