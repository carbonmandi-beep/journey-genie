import Link from "next/link";
import {
  ArrowRight,
  FileCheck,
  Globe2,
  Hotel,
  MessageCircle,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Plane,
    title: "Domestic Flights",
    description:
      "Book and enquire about flights across India with personal assistance from our travel team.",
    href: "/available-tickets/",
  },
  {
    icon: Globe2,
    title: "International Flights",
    description:
      "Plan international journeys with flight options and personalized support.",
    href: "/available-tickets/",
  },
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    description:
      "Find hotels and resorts based on your destination, dates, preferences and budget.",
    href: "/hotels/",
  },
  {
    icon: Globe2,
    title: "Holiday Packages",
    description:
      "Customized domestic and international holidays for couples, families and groups.",
    href: "/tours/",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "Documentation and application assistance for selected international destinations.",
    href: "/visa-assistance/",
  },
  {
    icon: Users,
    title: "Corporate Travel",
    description:
      "Travel planning and booking assistance for businesses, teams and organizations.",
    href: "/corporate-travel/",
  },
];

const process = [
  {
    number: "01",
    title: "Tell Us Your Requirement",
    text: "Share your destination, dates, travellers and preferences with our team.",
  },
  {
    number: "02",
    title: "Explore Your Options",
    text: "We check the available flight, hotel and travel options for your requirement.",
  },
  {
    number: "03",
    title: "Choose What Works for You",
    text: "Compare the available options and select what suits your journey.",
  },
  {
    number: "04",
    title: "Travel With Confidence",
    text: "Our team remains available to support you through the booking process.",
  },
];

export const metadata = {
  title: "Travel Services | Journey Genie",
  description:
    "Explore Journey Genie travel services including domestic and international flights, hotels, holiday packages, visa assistance and corporate travel.",
};

export default function ServicesPage() {
  const whatsappUrl =
    "https://wa.me/919876260822?text=Hi%20Journey%20Genie,%20I%20need%20help%20with%20my%20travel%20booking.";

  return (
    <>
      <PageHero
        title="Travel Services"
        subtitle="Everything you need for your next journey — flights, hotels, holidays and visa assistance."
        backgroundImage={ASSETS.heroes.services}
        badge="Journey Genie"
        cta={{
          label: "Talk to Our Team",
          href: whatsappUrl,
        }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
              What We Offer
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Your Journey Starts Here
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Journey Genie brings your key travel requirements together in one
              place, with personal assistance from enquiry to booking.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex items-center text-sm font-bold text-royal">
                    Explore service
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              How It Works
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Simple. Personal. Travel-Focused.
            </h2>

            <p className="mt-4 text-muted-foreground">
              Tell us what you need and let our travel team help you navigate
              the available options.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-black tracking-widest text-gold">
                  {item.number}
                </div>

                <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <ShieldCheck className="mx-auto h-9 w-9 text-gold" />

            <h2 className="mt-5 font-heading text-3xl font-bold md:text-4xl">
              Found a Better Flight Fare?
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Send us a screenshot on WhatsApp. Our travel team will check the
              available options for you before you book.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center rounded-lg bg-gold px-6 py-3.5 font-bold text-navy transition hover:opacity-90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Check With Journey Genie
            </a>

            <p className="mt-4 text-sm text-white/50">
              WhatsApp: {SITE.whatsappNumber}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
