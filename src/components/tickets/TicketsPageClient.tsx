"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react";

import { TicketCard } from "@/components/tickets/TicketCard";
import { TicketFiltersPanel } from "@/components/tickets/TicketFiltersPanel";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  filterTickets,
  getUniqueFilterOptions,
} from "@/lib/ticket-filters";

import { airlines } from "@/data/airlines";
import type {
  Ticket,
  TicketFilters,
} from "@/types";

const airlineNames = Object.fromEntries(
  airlines.map((a) => [a.code, a.name])
);

const WHATSAPP_NUMBER = "919876260822";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export interface TicketsPageClientProps {
  tickets: Ticket[];
}

export function TicketsPageClient({
  tickets,
}: TicketsPageClientProps) {
  const searchParams = useSearchParams();

  const [filters, setFilters] =
    useState<TicketFilters>({});

  const [filtersOpen, setFiltersOpen] =
    useState(false);

  const [visibleCount, setVisibleCount] =
    useState(20);

  useEffect(() => {
    const initial: TicketFilters = {};

    const fromCity =
      searchParams.get("fromCity");

    const toCity =
      searchParams.get("toCity");

    const date =
      searchParams.get("date");

    if (fromCity) {
      initial.fromCity = fromCity;
    }

    if (toCity) {
      initial.toCity = toCity;
    }

    if (date) {
      initial.date = date;
    }

    const airline =
      searchParams.get("airline");

    if (
      airline &&
      airline !== "All Airlines"
    ) {
      initial.airline = airline;
    }

    setFilters(initial);
    setVisibleCount(20);
  }, [searchParams]);

  const options = useMemo(
    () =>
      getUniqueFilterOptions(tickets),
    [tickets]
  );

  const filtered = useMemo(
    () =>
      filterTickets(
        tickets,
        filters
      ),
    [tickets, filters]
  );

  const visible = filtered.slice(
    0,
    visibleCount
  );

  const activeFilterCount =
    Object.values(filters).filter(Boolean)
      .length;

  function updateFilters(
    next: TicketFilters
  ) {
    setFilters(next);
    setVisibleCount(20);
  }

  const whatsappUrl =
    buildWhatsAppUrl(
      "Hi Journey Genie, I want to check a flight fare. Please help me find the best available option."
    );

  return (
    <div className="space-y-8">
      {/* India-first introduction */}
      <section className="rounded-2xl border bg-background p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Journey Genie Flights
            </p>

            <h2 className="mt-2 font-heading text-2xl font-bold text-navy sm:text-3xl">
              Find Your Flight From India
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Compare available domestic and
              international flight options with
              Journey Genie. Flying from Delhi,
              Mumbai, Amritsar, Bengaluru or
              another Indian city? Tell us where
              you want to go and we will help you
              check the available options.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
              <span className="rounded-full bg-muted px-3 py-1.5">
                🇮🇳 India Domestic
              </span>

              <span className="rounded-full bg-muted px-3 py-1.5">
                🌍 International
              </span>

              <span className="rounded-full bg-muted px-3 py-1.5">
                ✈️ Flights Worldwide
              </span>

              <span className="rounded-full bg-muted px-3 py-1.5">
                💬 Personal Assistance
              </span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Check Fare on WhatsApp
          </a>
        </div>
      </section>

      {/* Popular India routes */}
      <section>
        <div className="mb-3">
          <h3 className="font-heading text-lg font-bold text-navy">
            Popular From India
          </h3>

          <p className="text-sm text-muted-foreground">
            Looking for one of these routes?
            Send us your requirement on WhatsApp.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Delhi → Dubai",
            "Delhi → Bali",
            "Delhi → Singapore",
            "Mumbai → Dubai",
            "Delhi → Bangkok",
            "Delhi → Goa",
            "Delhi → Kashmir",
            "Amritsar → Dubai",
          ].map((route) => (
            <a
              key={route}
              href={buildWhatsAppUrl(
                `Hi Journey Genie, I want to check the fare for ${route}. Please share the available options.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border bg-background px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-primary hover:text-primary"
            >
              {route}
            </a>
          ))}
        </div>
      </section>

      {/* Filters + results */}
      <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
          <TicketFiltersPanel
            filters={filters}
            onChange={updateFilters}
            options={options}
            airlineNames={airlineNames}
          />
        </aside>

        <div className="space-y-4">
          {/* Results header */}
          <div className="flex flex-col gap-3 rounded-xl border bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <strong className="text-navy">
                  {visible.length}
                </strong>{" "}
                of{" "}
                <strong className="text-navy">
                  {filtered.length}
                </strong>{" "}
                available flight options
              </p>

              {filtered.length !==
                tickets.length && (
                <p className="mt-1 text-xs text-muted-foreground/80">
                  Filtered from{" "}
                  {tickets.length} available
                  options
                </p>
              )}
            </div>

            <Sheet
              open={filtersOpen}
              onOpenChange={setFiltersOpen}
            >
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters

                    {activeFilterCount >
                      0 && (
                      <span className="ml-2 rounded-full bg-gold px-1.5 py-0.5 text-[10px] font-bold text-navy">
                        {activeFilterCount}
                      </span>
                    )}
                  </Button>
                }
              />

              <SheetContent
                side="bottom"
                className="max-h-[85vh] overflow-y-auto rounded-t-2xl"
              >
                <SheetHeader>
                  <SheetTitle className="font-heading text-navy">
                    Filter Flights
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-4 pb-6">
                  <TicketFiltersPanel
                    filters={filters}
                    onChange={(next) => {
                      updateFilters(next);
                    }}
                    options={options}
                    airlineNames={
                      airlineNames
                    }
                  />

                  <Button
                    className="mt-4 w-full bg-navy text-white hover:bg-navy-light"
                    onClick={() =>
                      setFiltersOpen(false)
                    }
                  >
                    Show{" "}
                    {filtered.length}{" "}
                    flights
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* No supplier inventory */}
          {tickets.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center sm:p-12">
              <p className="font-medium text-navy">
                Looking for a flight?
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Send your departure city,
                destination and travel date
                to Journey Genie on WhatsApp.
                Our travel team will check the
                available options for you.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Check Fare on WhatsApp
              </a>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-10 text-center sm:p-12">
              <p className="font-medium text-navy">
                We couldn't find a matching
                flight option.
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Try changing your filters or
                send your requirement directly
                to our travel team.
              </p>

              <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
                {activeFilterCount >
                  0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      updateFilters({})
                    }
                  >
                    Clear filters
                  </Button>
                )}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ask Journey Genie
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {visible.map(
                  (ticket) => (
                    <div
                      key={ticket.id}
                      className="inventory-card-shell"
                    >
                      <TicketCard
                        ticket={ticket}
                      />
                    </div>
                  )
                )}
              </div>

              {visibleCount <
                filtered.length && (
                <div className="flex justify-center pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      setVisibleCount(
                        (n) => n + 20
                      )
                    }
                  >
                    Load more flights
                  </Button>
                </div>
              )}

              {/* WhatsApp conversion CTA */}
              <section className="rounded-2xl border bg-muted/40 p-6 text-center sm:p-8">
                <h3 className="font-heading text-xl font-bold text-navy">
                  Found a better fare
                  somewhere else?
                </h3>

                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  Send us a screenshot on
                  WhatsApp. Our travel team
                  will check the available
                  options for you.
                </p>

                <a
                  href={buildWhatsAppUrl(
                    "Hi Journey Genie, I found a flight fare somewhere else. I am sharing the screenshot. Please check the available options for me."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send Fare on WhatsApp
                </a>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
