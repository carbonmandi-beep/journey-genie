interface AnnouncementTickerProps {
  announcements?: unknown[];
}

const JOURNEY_GENIE_MESSAGES = [
  "✈️ Domestic & International Flights",
  "💰 Found a better fare? Check with Journey Genie",
  "🌴 Customized Holiday Packages",
  "🏨 Hotels & Transfers",
  "🛂 Visa Assistance",
  "💬 Personal Travel Support",
  "🌍 Travel More. Pay Smarter.",
];

export function AnnouncementTicker({
  announcements: _announcements,
}: AnnouncementTickerProps) {
  const items = [
    ...JOURNEY_GENIE_MESSAGES,
    ...JOURNEY_GENIE_MESSAGES,
  ];

  return (
    <div className="overflow-hidden bg-gold py-2.5 text-navy">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((message, i) => (
          <span
            key={`${message}-${i}`}
            className="mx-8 inline-flex items-center text-sm font-medium"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-navy" />
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
