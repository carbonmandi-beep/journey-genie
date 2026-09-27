import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Headphones,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Stamp,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { ASSETS } from "@/lib/assets";
import { SITE } from "@/lib/constants";

const WHATSAPP_NUMBER = "919876260822";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Abhinav, I need help with visa assistance through Journey Genie. Please share the details."
)}`;

const visaServices = [
  {
    icon: Stamp,
    title: "Visa Assistance",
    text: "Get guidance on visa requirements, documentation and the application process for your destination.",
  },
  {
    icon: Globe2,
    title: "International Travel",
    text: "Planning an international trip? Share your destination and travel dates with our team.",
  },
  {
    icon: FileCheck2,
    title: "Document Guidance",
    text: "Understand the documents and information generally required for your visa application.",
  },
  {
    icon: ShieldCheck,
    title: "Application Support",
    text: "Our team can help you understand the next steps and prepare your travel documentation.",
  },
];

const popularVisaDestinations = [
  "Dubai",
  "Singapore",
  "Thailand",
  "Bali",
  "Europe",
  "UK",
  "USA",
  "Australia",
];

const process = [
  {
    number: "01",
    title: "Tell Us Your Destination",
    text: "Share the country you want to visit, your travel dates and purpose of travel.",
  },
  {
    number: "02",
    title: "Share Your Requirements",
    text: "Tell us about your passport, travellers and the type of visa you need.",
  },
  {
    number: "03",
    title: "Understand the Process",
    text: "Our team will guide you through the relevant documentation and application steps.",
  },
  {
    number: "04",
    title: "Prepare for Your Journey",
    text: "Once your travel documentation is ready, continue planning your complete journey.",
  },
];

export const metadata = {
  title: "Visa Assistance | Journey Genie",
  description:
    "Get visa assistance and travel documentation guidance with Journey Genie for international travel.",
};

export default function VisaAssistancePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Visa Assistance"
        subtitle="Planning international travel? Journey Genie helps you understand the visa process and travel documentation requirements."
        backgroundImage={ASSETS.heroes.services}
        badge="Journey Genie Visa Assistance"
        cta={{
          label: "Talk to Abhinav",
          href: whatsappUrl,
        }}
      />

      {/* INTRO */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
              Travel Documentation
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Visa assistance made simpler
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Every destination can have different visa requirements. Tell
              Journey Genie where you are travelling, and our team can help
              you understand the documentation and application process.
            </p>
          </div>

          {/* SERVICES */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {visaServices.map((service) => {
              const Icon = service.icon;

              const serviceWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi Abhinav, I need help with ${service.title} through Journey Genie. Please share the details.`
              )}`;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.text}
                  </p>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-royal transition hover:text-gold"
                  >
                    Ask Abhinav
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section-padding bg-light-bg">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Popular Destinations
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Where are you planning to travel?
            </h2>

            <p className="mt-4 text-muted-foreground">
              Select a destination and connect with Journey Genie for visa
              assistance.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {popularVisaDestinations.map((destination) => {
              const destinationWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi Abhinav, I need visa assistance for ${destination}. Please share the requirements and process through Journey Genie.`
              )}`;

              return (
                <a
                  key={destination}
                  href={destinationWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Globe2 className="h-5 w-5" />
                  </div>

                  <span className="font-semibold text-navy">
                    {destination}
                  </span>

                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              How It Works
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
              Your visa enquiry in 4 simple steps
            </h2>

            <p className="mt-4 text-muted-foreground">
              Start with a WhatsApp message and let our team guide you through
              the next steps.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOURNEY GENIE */}
      <section className="section-padding bg-navy text-white">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Why Journey Genie
              </p>

              <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl">
                One team for your international travel planning
              </h2>

              <p className="mt-5 leading-8 text-white/70">
                Visa assistance is just one part of your journey. Journey
                Genie can also help coordinate flights, hotels, holidays and
                other travel requirements.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Personal travel assistance",
                  "Domestic & international travel support",
                  "Visa documentation guidance",
                  "Flights, hotels and holiday assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <Sparkles className="h-9 w-9 text-gold" />

              <h3 className="mt-5 text-2xl font-bold">
                Need visa assistance?
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Send Abhinav your destination, travel dates and visa
                requirement. The Journey Genie team will guide you on the next
                steps.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-bold text-navy transition hover:bg-gold-light"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Abhinav
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="rounded-[2rem] bg-gradient-to-r from-navy to-navy-light p-8 text-center text-white shadow-2xl sm:p-12">
            <Plane className="mx-auto h-10 w-10 text-gold" />

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-gold">
              Ready for Your International Journey?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
              Start your visa enquiry today.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Tell us your destination and travel requirements. Connect
              directly with Abhinav on WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gold px-7 font-semibold text-navy transition hover:bg-gold-light"
              >
                WhatsApp Abhinav
                <MessageCircle className="h-4 w-4" />
              </a>

              <Link
                href="/inquiry/"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 font-semibold text-white transition hover:bg-white/10"
              >
                Send an Enquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-white/50">
              <Headphones className="h-4 w-4" />
              WhatsApp: {SITE.whatsappNumber}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
