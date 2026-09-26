import { createPageMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { PAGE_HEROES } from "@/lib/page-heroes";
import { OFFICE_DISPLAY_ORDER, SITE } from "@/lib/constants";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import {
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Plane,
  ArrowRight,
} from "lucide-react";

export const metadata = createPageMetadata({
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  path: PAGE_SEO.contact.path,
  keywords: PAGE_SEO.contact.keywords,
});

function LinkedinIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 20.45H7.1V9H3.54v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero {...PAGE_HEROES.contact} />

      {/* CONTACT INFORMATION */}
      <section className="section-padding relative overflow-hidden bg-light-bg">
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(var(--navy)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="container-wide">
          <div className="relative grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              {OFFICE_DISPLAY_ORDER.map((office) => (
                <div
                  key={office.label}
                  className="group rounded-2xl border border-border/60 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <h2 className="font-heading text-lg font-semibold text-navy">
                      {office.label}
                    </h2>
                  </div>

                  <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    {office.address}
                  </p>

                  <a
                    href={`tel:${office.phoneTel}`}
                    className="mt-3 flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    {office.phone}
                  </a>

                  {"phoneAlt" in office && office.phoneAlt && (
                    <a
                      href={`tel:${office.phoneAltTel}`}
                      className="mt-2 flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold"
                    >
                      <Phone className="h-4 w-4 text-gold" />
                      {office.phoneAlt}
                    </a>
                  )}
                </div>
              ))}

              {/* CONNECT WITH US */}
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <h2 className="font-heading text-lg font-semibold text-navy">
                    Connect With Journey Genie
                  </h2>
                </div>

                <ul className="mt-5 space-y-4 text-sm text-muted-foreground">

                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-gold" />

                    <a
                      href={`mailto:${SITE.email}`}
                      className="transition hover:text-gold"
                    >
                      {SITE.email}
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 shrink-0 text-gold" />

                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy transition hover:text-gold"
                    >
                      WhatsApp: {SITE.whatsappNumber}
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-gold" />
                    {SITE.businessHours}
                  </li>

                </ul>

                {/* SOCIAL LINKS */}
                <div className="mt-6 flex gap-3">

                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-gold hover:text-gold"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-gold hover:text-gold"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-gold hover:text-gold"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>

                </div>
              </div>

              {/* WHATSAPP CTA */}
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light p-7 text-white shadow-xl">

                <Plane className="h-9 w-9 text-gold" />

                <h2 className="mt-5 text-2xl font-bold">
                  Planning your next journey?
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Send us your travel requirement on WhatsApp and our team
                  will help you explore the available options.
                </p>

                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-gold px-5 text-sm font-semibold text-navy transition hover:bg-gold-light"
                >
                  Chat on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>

            </div>

            {/* CONTACT FORM */}
            <ContactForm />

          </div>

          {/* OFFICE MAPS */}
          <div className="relative mt-14 grid gap-5 lg:grid-cols-2">

            {OFFICE_DISPLAY_ORDER.map((office, index) => (
              <article
                key={office.label}
                className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_18px_50px_rgba(25,45,65,.09)]"
              >

                <div className="p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-gold">
                    {index === 0 ? "Head Office" : "Office"}
                  </p>

                  <h2 className="mt-1 font-heading text-xl font-semibold text-navy">
                    {office.label}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {office.address}
                  </p>

                </div>

                <iframe
                  src={office.mapEmbed}
                  className="h-72 w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${office.label} map`}
                />

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-wide">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[.22em] text-gold">
              Your Magical Travel Partner
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Before you book, check with Journey Genie.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Flights, hotels, holiday packages and visa assistance —
              tell us what you need and let our travel team help you plan it.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gold px-7 font-semibold text-navy transition hover:bg-gold-light"
              >
                WhatsApp Journey Genie
                <MessageCircle className="h-4 w-4" />
              </a>

              <a
                href="tel:+919876260822"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 font-semibold text-white transition hover:bg-white/10"
              >
                Call Us
                <Phone className="h-4 w-4" />
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
