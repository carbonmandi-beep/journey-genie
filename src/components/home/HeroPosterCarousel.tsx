"use client";

import { Plane, MapPin, Sparkles } from "lucide-react";

export function HeroPosterCarousel({ posters: _posters }: { posters: string[] }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-gold/10 p-5 shadow-2xl backdrop-blur-md">

      {/* Decorative glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-royal/30 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between">

        {/* Brand */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold-light">
            <Sparkles className="h-3.5 w-3.5" />
            JOURNEY GENIE
          </div>

          <h2 className="font-heading text-3xl font-bold leading-tight text-white">
            Your Journey.
            <span className="block text-gradient-gold">
              Our Magic.
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Flights, hotels and unforgettable holidays — planned around you.
          </p>
        </div>

        {/* Destination cards */}
        <div className="space-y-3">

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15">
                <Plane className="h-5 w-5 text-gold" />
              </div>

              <div>
                <div className="text-xs text-white/50">
                  POPULAR FLIGHT
                </div>
                <div className="font-semibold text-white">
                  Delhi → Dubai
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
              <MapPin className="mb-2 h-4 w-4 text-gold" />
              <div className="text-xs text-white/50">
                HOLIDAY
              </div>
              <div className="mt-1 font-semibold text-white">
                Bali
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
              <MapPin className="mb-2 h-4 w-4 text-gold" />
              <div className="text-xs text-white/50">
                HOLIDAY
              </div>
              <div className="mt-1 font-semibold text-white">
                Singapore
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl border border-gold/20 bg-gold/10 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-gold">
            Before you book
          </div>

          <div className="mt-1 text-sm font-semibold text-white">
            Check your fare with Journey Genie.
          </div>

          <div className="mt-2 text-xs text-white/60">
            Personal assistance on WhatsApp
          </div>
        </div>

      </div>
    </div>
  );
}
