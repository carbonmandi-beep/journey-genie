import { redirect } from "next/navigation";
import { resolveAirport } from "@/lib/airport-codes";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Flight Results",
  description: "Browse live group flight inventory.",
  path: "/flight-booking/results/",
});

export default async function FlightResultsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;

  const pick = (key: string) => {
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const from = pick("from");
  const to = pick("to");
  const date = pick("departureDate");

  const query = new URLSearchParams();

  if (from) {
    const resolvedFrom = resolveAirport(from);
    query.set("fromCity", resolvedFrom?.city || from);
  }

  if (to) {
    const resolvedTo = resolveAirport(to);
    query.set("toCity", resolvedTo?.city || to);
  }

  if (date) {
    query.set("date", date);
  }

  redirect(`/available-tickets/?${query.toString()}`);
}
