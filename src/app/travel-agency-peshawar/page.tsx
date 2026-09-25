import Link from "next/link";
import {
  Globe2,
  Hotel,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { ASSETS } from "@/lib/assets";
import { OFFICES, SITE } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Journey Genie | Travel Agency in India",
  description:
    "Journey Genie is your magical travel partner for domestic and international flights, hotels, holiday packages and visa assistance.",
  path: "/travel-agency/",
  keywords: [
    "travel agency India",
    "travel agency Delhi",
    "flight booking India",
    "holiday packages India",
    "international travel",
    "domestic flights",
    "visa assistance",
  ],
});

const services = [
  {
    title: "Domestic & International Flights",
    text: "Explore flight options across India and worldwide destinations with personal fare assistance from our travel team.",
    href: "/available-tickets/",
    icon: Plane,
  },
  {
    title: "Hotels & Stays",
    text: "Find hotels, resorts and stays based on your destination, dates, preferences and budget.",
    href: "/hotels/",
    icon: Hotel,
  },
  {
    title: "Customized Holiday Packages",
    text: "Plan domestic and international holidays with flights, hotels, transfers and activities tailored to your trip.",
    href: "/tours/",
    icon: Globe2,
  },
  {
    title: "Visa Assistance",
    text: "Get documentation and application support for selected international destinations.",
    href: "/visa-assistance/",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    q: "What services does Journey Genie provide?",
    a: "Journey Genie provides domestic and international flight assistance, hotels, customized holiday packages and visa assistance.",
  },
  {
    q: "Can Journey Genie help me find a better flight fare?",
    a: "Yes. If you find a flight fare somewhere else, send the screenshot to Journey Genie on WhatsApp and our travel team will check the available options for you.",
  },
  {
    q: "Does Journey Genie handle international travel?",
    a: "Yes. Journey Genie supports both domestic and international travel enquiries, including flights, hotels, holiday packages and selected visa assistance.",
  },
  {
    q: "How can I contact Journey Genie?",
    a: `You can contact our travel team on WhatsApp at ${SITE.whatsappNumber} or visit our Delhi office during ${SITE.businessHours}.`,
  },
];

export default function TravelAgencyPage() {
  return (
    <>
      <PageHero
        title="Your Magical Travel Partner"
        subtitle="Domestic and international flights, hotels, holidays and visa assistance — with personal support from Journey Genie."
        backgroundImage={ASSETS.heroes.contact}
        badge="Journey Genie"
        cta={{
          label: "WhatsApp Journey Genie",
          href: SITE.whatsapp,
        }}
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
            Journey Genie
          </p>

          <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
            Travel More. Pay Smarter.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            Journey Genie helps travellers plan and book their journeys with
            personal assistance from enquiry to booking.
          </p>

          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
            Whether you are travelling within India or planning an international
            holiday, our team can help you explore available flights, hotels,
            holiday packages and visa assistance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants(), "gap-2")}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>

            <a
              href={`tel:${OFFICES.headOffice.phoneTel}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "gap-2"
              )}
            >
              <Phone className="h-4 w-4" />
              {OFFICES.headOffice.phone}
            </a>

            <Link
              href="/available-tickets/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "gap-2"
              )}
            >
              <Plane className="h-4 w-4" />
              Check Flights
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              What We Do
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Everything You Need for Your Journey
            </h2>

            <p className="mt-4 text-muted-foreground">
              One travel partner for domestic and international travel.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-semibold text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.text}
                  </p>

                  <span className="mt-5 inline-flex text-sm font-bold text-royal">
                    Explore service →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Visit Us
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">
              Journey Genie — Delhi Office
            </h2>

            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{OFFICES.headOffice.address}</span>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                <a
                  href={`tel:${OFFICES.headOffice.phoneTel}`}
                  className="hover:text-royal"
                >
                  {OFFICES.headOffice.phone}
                </a>
              </li>

              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-royal"
                >
                  WhatsApp {SITE.whatsappNumber}
                </a>
              </li>

              <li className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                <span>{SITE.businessHours}</span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <iframe
              src={OFFICES.headOffice.mapEmbed}
              className="h-80 w-full border-0 md:h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Journey Genie Delhi office map"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-bg">
        <div className="container-wide mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl font-bold text-navy">
            Journey Genie — FAQs
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border/70 bg-white p-5 open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none">
                  {item.q}
                </summary>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
