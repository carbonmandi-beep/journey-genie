```tsx
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import {
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/shared/SocialIcons";

import { GsapReveal } from "@/components/motion/GsapReveal";

import {
  GsapStagger,
  GsapStaggerItem,
} from "@/components/motion/GsapStagger";

import {
  OFFICES,
  SITE,
  SOCIAL,
  TRUST_BADGES,
} from "@/lib/constants";

const exploreLinks = [
  ["Flights", "/available-tickets/"],
  ["Hotels", "/hotels/"],
  ["Holiday Packages", "/tours/"],
  ["Visa Assistance", "/visa-assistance/"],
  ["Destinations", "/destinations/"],
  ["Corporate Travel", "/corporate-travel/"],
] as const;

const companyLinks = [
  ["About Journey Genie", "/about/"],
  ["Our Services", "/services/"],
  ["Travel Agency", "/travel-agency/"],
  ["Contact Us", "/contact/"],
] as const;

const socialLinks = [
  {
    href: SOCIAL.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/company/journey-genie/?viewAsMember=true",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: SOCIAL.whatsapp,
    label: "WhatsApp",
    Icon: WhatsAppIcon,
  },
] as const;

const trustIcons = [
  BadgeCheck,
  ShieldCheck,
  Clock,
  Globe,
] as const;

export function Footer() {
  const regions = SITE.regions.join(", ");

  return (
    <footer className="relative bg-navy text-white">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />

      {/* CTA */}
      <div className="relative overflow-hidden border-b border-white/10 bg-navy-light">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-royal/20 blur-3xl"
        />

        <GsapReveal
          y={16}
          className="container-wide relative flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:justify-between lg:py-8"
        >
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Your journey starts here
            </p>

            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Travel with your magical travel partner.
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Flights, hotels, holidays and visa assistance — with personal
              support from Journey Genie.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>

            <Link
              href="/inquiry/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 font-semibold transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/10"
            >
              Plan a Journey
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </GsapReveal>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-10 lg:py-12">
        <GsapStagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.75fr_0.75fr_1.1fr] lg:gap-10">

          {/* Brand */}
          <GsapStaggerItem>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/assets/brand/journey-genie-logo.jpeg"
                alt="Journey Genie"
                width={100}
                height={100}
                className="h-16 w-16 object-contain"
                unoptimized
              />

              <div>
                <p className="font-brand text-xl font-bold leading-tight">
                  Journey Genie
                </p>

                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                  Your Magical Travel Partner
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
              Journey Genie helps travellers explore flights, hotels, holiday
              packages and visa assistance across {regions}.
            </p>

            <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-white/45">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {OFFICES.headOffice.address}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge, index) => {
                const Icon =
                  trustIcons[index] ?? ShieldCheck;

                return (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/60"
                  >
                    <Icon className="h-3 w-3 text-gold" />
                    {badge}
                  </span>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map(
                ({ href, label, Icon }) => (
                  <a
                    key={
