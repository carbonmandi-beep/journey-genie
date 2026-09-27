import { createPageMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Become a Journey Genie Travel Partner",
  description:
    "Join Journey Genie as a travel partner. Contact our team directly on WhatsApp.",
  path: "/account/signup/",
  keywords: [
    "Journey Genie travel partner",
    "travel agent partner",
    "travel agency partnership",
    "Journey Genie partner",
  ],
});

export default function AccountSignupPage() {
  const whatsappNumber = "919876260822";

  const message =
    "Hi Abhinav, I am interested in becoming a Journey Genie Travel Partner. Please share the details.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <main className="min-h-screen bg-white">
      <section className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-4xl">
            💬
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Become a Journey Genie Travel Partner
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Grow your travel business with Journey Genie. Connect with our
            team directly to learn about partnership opportunities.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02]"
          >
            💬 Become a Partner on WhatsApp
          </a>

          <p className="mt-4 text-sm text-slate-500">
            No signup or sign-in required.
          </p>
        </div>
      </section>
    </main>
  );
}
