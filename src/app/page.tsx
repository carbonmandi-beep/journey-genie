import Link from "next/link";
import {
  Plane,
  Hotel,
  Palmtree,
  FileCheck,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Headphones,
  IndianRupee,
  Globe2,
} from "lucide-react";

import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementTicker } from "@/components/home/AnnouncementTicker";

export const revalidate = 600;

const whatsappUrl =
  "https://wa.me/919876260822?text=Hi%20Journey%20Genie,%20I%20want%20help%20with%20my%20travel%20booking.";

const services = [
  {
    icon: Plane,
    title: "Flights",
    description:
      "Domestic and international flights with personalized fare assistance.",
  },
  {
    icon: Hotel,
    title: "Hotels",
    description:
      "Hotels, resorts and stays selected around your destination and budget.",
  },
  {
    icon: Palmtree,
    title: "Holiday Packages",
    description:
      "Customized domestic and international holidays designed around you.",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "Documentation and application support for selected international destinations.",
  },
];

const destinations = [
  {
    title: "Dubai",
    subtitle: "International",
    route: "Delhi → Dubai",
  },
  {
    title: "Bali",
    subtitle: "International",
    route: "India → Bali",
  },
  {
    title: "Singapore",
    subtitle: "International",
    route: "India → Singapore",
  },
  {
    title: "Goa",
    subtitle: "Domestic",
    route: "Delhi → Goa",
  },
  {
    title: "Kashmir",
    subtitle: "Domestic",
    route: "Delhi → Srinagar",
  },
  {
    title: "Kerala",
    subtitle: "Domestic",
    route: "India → Kerala",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection posters={[]} />

      <AnnouncementTicker />

      {/* Services */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
              Journey Genie
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Everything You Need for Your Journey
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              From finding the right flight to planning your complete holiday,
              our travel team helps you make the right choice.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center text-sm font-bold text-royal"
                  >
                    Enquire on WhatsApp
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domestic + International */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                Explore
              </p>

              <h2 className="mt-2 font-heading text-3xl font-bold text-navy md:text-4xl">
                Domestic & International Travel
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600">
                Popular routes and destinations from India, with personalized
                assistance from enquiry to booking.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex shrink-0 items-center justify-center rounded-lg
                bg-navy px-5 py-3 text-sm font-bold text-white
                transition hover:bg-royal
              `}
            >
              Plan My Trip
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <a
                key={destination.title}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">
                      {destination.subtitle}
                    </p>

                    <h3 className="mt-2 font-heading text-2xl font-bold text-navy">
                      {destination.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {destination.route}
                    </p>
                  </div>

                  <Globe2 className="h-5 w-5 text-royal transition-transform group-hover:rotate-12" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Journey Genie */}
      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Why Journey Genie
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              Travel With a Real Travel Partner
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              We combine travel options with personal assistance so you can
              make your booking decision with confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <IndianRupee className="h-7 w-7 text-gold" />

              <h3 className="mt-4 text-xl font-bold">
                Check Before You Book
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Found a fare somewhere else? Send us the screenshot and we will
                check the available options for you.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Headphones className="h-7 w-7 text-gold" />

              <h3 className="mt-4 text-xl font-bold">
                Personal Assistance
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Speak with our travel team instead of navigating your entire
                trip alone.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ShieldCheck className="h-7 w-7 text-gold" />

              <h3 className="mt-4 text-xl font-bold">
                One Travel Partner
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Flights, hotels, holidays and visa assistance in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-royal px-6 py-12 text-center text-white md:px-12">
            <MessageCircle className="mx-auto h-10 w-10 text-gold" />

            <h2 className="mt-5 font-heading text-3xl font-bold md:text-4xl">
              Planning Your Next Journey?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              Tell us where you want to go, your travel dates and your
              preferences. Our travel team will help you explore the available
              options.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center rounded-lg bg-gold px-6 py-3.5 font-bold text-navy transition hover:opacity-90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat With Journey Genie
            </a>

            <p className="mt-4 text-sm text-white/60">
              WhatsApp: +91 98762 60822
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
