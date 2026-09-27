"use client";

import type { TicketFilters } from "@/types";

interface TicketFiltersPanelProps {
  filters: TicketFilters;
  onChange: (filters: TicketFilters) => void;
  options: {
    airlines: string[];
    sectors: string[];
    fromCities: string[];
    toCities: string[];
    destinations: string[];
    dates: string[];
  };
  airlineNames: Record<string, string>;
  hideDestination?: boolean;
}

export function TicketFiltersPanel(
  _props: TicketFiltersPanelProps
) {
  return null;
}
