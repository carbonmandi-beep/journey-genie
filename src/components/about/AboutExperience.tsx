"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  HeartHandshake,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { AirlineLogo } from "@/components/shared/AirlineLogo";
import { airlines } from "@/data/airlines";
import { OFFICE_DISPLAY_ORDER, SITE, TRUST_TEXT } from "@/lib/constants";
import type { Review, ReviewStats } from "@/types";

const ReviewForm = dynamic(
  () =>
    import("@/components/reviews/ReviewForm").then(
      (m) => m.ReviewForm
    ),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl border border-border bg-white p-6 text-sm text-navy/60 shadow-sm">
        Loading review form…
      </div>
    ),
  }
);

const values = [
  {
    icon: HeartHandshake,
    title: "Personal travel support",
    text: "Our team helps travelers with practical guidance from the first enquiry through the journey.",
  },
  {
    icon: ShieldCheck,
    title: "Clear & dependable",
    text: "We focus on transparent quotations, clear communication and dependable travel assistance.",
  },
  {
    icon: Globe2,
    title: "India & worldwide travel",
    text: "Domestic and international flights, hotels, holidays and travel assistance through one team.",
  },
  {
    icon: Clock3,
    title: "Responsive assistance",
    text: "Travel plans can change quickly. We stay available to help with updates, alternatives and support.",
  },
];

const services = [
  "Domestic flights",
  "International flights",
  "Holiday packages",
  "Hotel reservations",
  "Visa assistance",
  "Corporate travel",
  "Group travel",
  "Travel assistance",
];

const portals = [
  {
    icon: Users,
    title: "Customer & Agent Portal",
    text: "Access your travel account and manage your enquiries and booking-related information.",
    href: "/account/login/",
    cta: "Open portal",
  },
  {
    icon: Plane,
    title: "Flight Inventory",
    text: "Explore available flight options and connect with our team for booking assistance.",
    href: "/available-tickets/",
    cta: "View flights",
  },
];

export function AboutExperience({
  reviews,
  reviewStats,
}: {
  reviews: Review[];
  reviewStats: ReviewStats;
}) {
  const reduced = useReducedMotion();

  const reveal = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.5 },
      };

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="relative isolate min-h-[600px] overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(11,93,168,.5),transparent_34%),radial-gradient(circle_at_15%_10%,rgba(214,168,79,.18),transparent_28%)]" />

        <div className="about-grid absolute inset-0 opacity-25" />

        <motion.div
          aria-hidden
          className="absolute right-[7%] top-24 hidden h-80 w-80 rounded-full border border-gold/20 lg:block"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-8 rounded-full border border-white/10" />

          <Plane className="absolute -right-5 top-1/2 h-10 w-10 -translate-y-1/2 rotate-12 text-gold" />

          <MapPin className="absolute bottom-10 left-3 h-7 w-7 text-white/70" />
        </motion.div>

        <div className="container-wide relative flex min-h-[600px] items-center py-24">
          <motion.div {...reveal} className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-light">
              <Sparkles className="h-4 w-4" />
              Your Magical Travel Partner
            </span>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Travel made simpler,
              <span className="text-gradient-gold">
                {" "}more personal and more convenient.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {SITE.name} helps travelers discover flights, hotels, holiday
              packages and travel assistance with personal support from
              enquiry to booking.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/inquiry/"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gold px-6 font-semibold text-navy transition hover:bg-gold-light"
              >
                Plan your journey
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                WhatsApp us
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-padding">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

          <motion.div {...reveal}>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-royal">
              Who we are
            </p>

            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              One travel partner for your journey
            </h2>

            <div className="mt-6 space-y-4 leading-7 text-muted-foreground">
              <p>
                Journey Genie is a travel company built around a simple idea:
                making travel planning easier, more transparent and more
                personal.
              </p>

              <p>
                From finding the right flight to planning a holiday, arranging
                hotels or assisting with visa requirements, our team helps
                travelers explore their options and move forward with
                confidence.
              </p>

              <p>
                Whether you are travelling alone, with family, as a group or
                for business, Journey Genie is designed to be the travel
                partner you can reach when you need real assistance.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 text-sm font-medium text-navy"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="relative rounded-[2rem] border border-navy/10 bg-gradient-to-br from-navy to-navy-light p-7 text-white shadow-2xl shadow-navy/20 sm:p-10"
          >
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-3xl border border-gold/25 bg-gold/10 backdrop-blur" />

            <BadgeCheck className="h-12 w-12 text-gold" />

            <h3 className="mt-6 text-2xl font-bold">
              Why choose Journey Genie?
            </h3>

            <ul className="mt-6 space-y-4">
              {TRUST_TEXT.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-white/75"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-white/60">
                Found a better flight fare online?
              </p>

              <p className="mt-2 font-semibold text-gold-light">
                Send us the screenshot and let our team check the available
                options for you.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOUNDER & CEO */}
      <section className="relative overflow-hidden bg-[#f4efe7] text-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:px-8 lg:py-16">

          {/* Founder Photo */}
          <motion.div
            {...reveal}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-navy shadow-2xl"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/assets/team/abhinav-sekhri.jpg"
                alt="Abhinav Sekhri, Founder & CEO of Journey Genie"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Founder Content */}
          <motion.div {...reveal} className="relative">

            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#a66d2f]">
              Founder & Leadership
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Abhinav Sekhri
            </h2>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-gold">
              <BadgeCheck className="h-3.5 w-3.5" />
              Founder & CEO
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">

              <p>
                Abhinav Sekhri is the Founder & CEO of Journey Genie, bringing
                an entrepreneurial, technology-driven and customer-first
                approach to the travel industry.
              </p>

              <p>
                His vision for Journey Genie is to build a modern travel
                platform that combines competitive travel options with
                personal assistance, making the booking experience simpler
                and more transparent for customers.
              </p>

              <p>
                Under his leadership, Journey Genie focuses on domestic and
                international flights, hotels, customized holiday packages,
                visa assistance and corporate travel solutions.
              </p>

              <p>
                His approach is built around a simple philosophy: customers
                should have a trusted travel partner they can reach before,
                during and after their journey.
              </p>

            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Founder-led travel company",
                "Customer-first approach",
                "Technology & digital innovation",
                "India & global travel solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm font-semibold text-navy"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </div>
              ))}
            </div>

            <figure className="mt-7 border-l-[3px] border-gold pl-4">
              <blockquote className="text-base font-medium italic leading-7 text-navy">
                “Travel should be simpler, more personal and more accessible.
                Journey Genie is built to make that happen.”
              </blockquote>

              <figcaption className="mt-2 text-xs font-semibold text-slate-500">
                — Abhinav Sekhri, Founder & CEO
              </figcaption>
            </figure>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/inquiry/"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-gold px-5 text-sm font-semibold text-navy transition hover:bg-gold-light"
              >
                Plan your journey
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-navy/15 bg-white px-5 text-sm font-semibold text-navy transition hover:border-gold/50 hover:bg-gold/5"
              >
                WhatsApp Journey Genie
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* WHY JOURNEY GENIE */}
      <section className="section-padding bg-secondary/60">
        <div className="container-wide">

          <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-royal">
              Why Journey Genie
            </p>

            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Professional care with modern capability
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="about-tilt-card rounded-2xl border border-border/70 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <value.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-navy">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {value.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* AIRLINE NETWORK */}
      <section className="section-padding bg-navy text-white">
        <div className="container-wide">

          <motion.div
            {...reveal}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-gold">
                Airline network
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Airlines we work with
              </h2>

              <p className="mt-3 max-w-2xl text-white/65">
                Explore flight options across leading domestic, Gulf and
                international carriers.
              </p>
            </div>

            <p className="text-sm text-white/50">
              {airlines.length} airline partners represented
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11">
            {airlines.map((airline) => (
              <div
                key={airline.code}
                className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 text-center transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
              >
                <AirlineLogo
                  code={airline.code}
                  name={airline.name}
                  logo={airline.logo}
                  size="sm"
                  className="border-0"
                />

                <span className="line-clamp-1 w-full text-[10px] text-white/70">
                  {airline.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TRAVEL TOOLS */}
      <section className="section-padding">
        <div className="container-wide">

          <motion.div {...reveal} className="text-center">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-royal">
              Travel tools
            </p>

            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Travel with Journey Genie
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {portals.map((portal) => (
              <article
                key={portal.title}
                className="group rounded-2xl border border-border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl"
              >
                <portal.icon className="h-9 w-9 text-royal" />

                <h3 className="mt-5 text-xl font-bold text-navy">
                  {portal.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">
                  {portal.text}
                </p>

                <Link
                  href={portal.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-royal"
                >
                  {portal.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* OFFICES */}
      <section className="section-padding bg-secondary/60">
        <div className="container-wide">

          <motion.div {...reveal} className="text-center">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-royal">
              Where to find us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Our travel support locations
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
              Connect with Journey Genie through our available office
              locations or reach our team directly on WhatsApp.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {OFFICE_DISPLAY_ORDER.map((office) => (
              <article
                key={office.label}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              >
                <iframe
                  title={`${office.label} map`}
                  src={office.mapEmbed}
                  className="h-48 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="p-6">
                  <Building2 className="h-7 w-7 text-gold" />

                  <h3 className="mt-4 text-lg font-bold text-navy">
                    {office.label}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                    {office.address}
                  </p>

                  <a
                    href={`tel:${office.phoneTel}`}
                    className="mt-4 inline-flex font-semibold text-royal"
                  >
                    {office.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-padding bg-navy-light text-white">
        <div className="container-wide">

          <motion.div
            {...reveal}
            className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[.22em] text-gold">
                Client reviews
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Experiences shared by our travelers
              </h2>
            </div>

            {reviewStats.count > 0 && (
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                <strong className="text-2xl text-gold">
                  {reviewStats.average.toFixed(1)}
                </strong>

                <span className="ml-2 text-sm text-white/60">
                  from {reviewStats.count}{" "}
                  {reviewStats.count === 1 ? "review" : "reviews"}
                </span>
              </div>
            )}
          </motion.div>

          {reviews.length ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div
                    className="flex gap-1"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        className={`h-4 w-4 ${
                          n <= review.rating
                            ? "fill-gold text-gold"
                            : "text-white/20"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/80">
                    “{review.comment}”
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                    {review.avatar_url ? (
                      <Image
                        src={review.avatar_url}
                        alt=""
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-bold text-navy">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div>
                      <p className="font-semibold">{review.name}</p>

                      <p className="text-xs text-gold-light">
                        {[review.city, review.service]
                          .filter(Boolean)
                          .join(" · ") || "Verified client"}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/65">
              Traveler reviews will appear here soon.
            </div>
          )}

          <div className="mt-12 max-w-xl">
            <p className="mb-4 text-sm text-white/70">
              Traveled with Journey Genie? Sign in to share your experience
              with future travelers.
            </p>

            <ReviewForm />
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-white">
        <div className="container-wide">

          <motion.div
            {...reveal}
            className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-navy to-navy-light p-8 text-center text-white shadow-2xl sm:p-12"
          >
            <p className="text-sm font-bold uppercase tracking-[.22em] text-gold">
              Start your journey
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
              Before you book, check with Journey Genie.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Tell us your travel requirement and our team will help you
              explore the available options.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/inquiry/"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gold px-7 font-semibold text-navy transition hover:bg-gold-light"
              >
                Plan your journey
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 font-semibold text-white hover:bg-white/10"
              >
                WhatsApp Journey Genie
              </a>
            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}
