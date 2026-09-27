import { MessageCircle, BadgeCheck, Headphones, UserPlus } from "lucide-react";
import { GsapReveal } from "@/components/motion/GsapReveal";

const ABHINAV_WHATSAPP_NUMBER = "919876260822";

export function SubAgentCTA() {
  const whatsappMessage =
    "Hi Abhinav, I am interested in becoming a Journey Genie Travel Partner. Please share the details.";

  const whatsappUrl = `https://wa.me/${ABHINAV_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <GsapReveal className="relative isolate overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy via-navy-light to-royal px-7 py-12 text-white shadow-2xl shadow-navy/20 sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-gold/20 bg-gold/10 blur-sm" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-royal/30 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-light">
                <UserPlus className="h-4 w-4" />
                Partner with Journey Genie
              </span>

              <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                Become a Journey Genie Travel Partner
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Grow your travel business with Journey Genie. Get access to
                travel solutions, competitive inventory and dedicated support
                to serve your customers better.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-gold" />
                  Trusted travel partner
                </span>

                <span className="inline-flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-gold" />
                  Dedicated team support
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 min-w-64 items-center justify-center rounded-xl bg-gold px-7 text-base font-bold text-navy shadow-lg transition hover:scale-[1.02] hover:bg-gold-light"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Become a Partner on WhatsApp
              </a>

              <p className="text-center text-xs text-white/55">
                No signup or sign-in required
              </p>
            </div>
          </div>
        </GsapReveal>
      </div>
    </section>
  );
}
