"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const MAIN_NAV = [
  { href: "/", label: "Home" },
  { href: "/available-tickets/", label: "Flights" },
  { href: "/tours/", label: "Holidays" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/" || pathname === ""
      : pathname?.startsWith(href.replace(/\/$/, ""));

  const whatsappUrl =
    "https://wa.me/919876260822?text=Hi%20Journey%20Genie,%20I%20need%20help%20with%20my%20travel%20booking.";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white transition-shadow duration-300",
        scrolled
          ? "border-slate-200 shadow-[0_6px_24px_rgba(15,32,66,.08)]"
          : "border-slate-100"
      )}
    >
      <div className="container-wide">
        <div className="flex h-[74px] items-center justify-between gap-4 lg:h-[86px]">

          {/* Journey Genie Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            aria-label="Journey Genie"
          >
            <Image
              src="/assets/brand/journey-genie-logo.jpeg"
              alt="Journey Genie"
              width={110}
              height={110}
              className="h-[62px] w-[62px] object-contain sm:h-[70px] sm:w-[70px] lg:h-[76px] lg:w-[76px]"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {MAIN_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-[15px] font-semibold tracking-wide transition-colors lg:text-base",
                  isActive(link.href)
                    ? "text-royal"
                    : "text-navy/70 hover:text-navy"
                )}
              >
                {link.label}

                {isActive(link.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}
              </Link>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "primaryGold",
                  size: "sm",
                }),
                "ml-3"
              )}
            >
              <MessageCircle className="mr-1.5 h-4 w-4" />
              WhatsApp Us
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-10 w-10 text-navy hover:bg-navy/5"
                )}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Open menu</span>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[min(100vw-1.5rem,360px)] overflow-y-auto border-l border-white/10 bg-navy text-white"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-3 text-left">
                    <Image
                      src="/assets/brand/journey-genie-logo.jpeg"
                      alt="Journey Genie"
                      width={70}
                      height={70}
                      className="h-14 w-14 object-contain"
                      unoptimized
                    />

                    <span className="font-heading text-2xl font-bold text-white">
                      Journey <span className="text-gold">Genie</span>
                    </span>
                  </SheetTitle>

                  <p className="text-left text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                    Your Magical Travel Partner
                  </p>
                </SheetHeader>

                <nav className="mt-8 flex flex-col gap-1">
                  {MAIN_NAV.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-lg font-semibold transition-colors hover:bg-white/10",
                        isActive(link.href)
                          ? "bg-white/5 text-gold"
                          : "text-white/85"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="mt-4 flex items-center justify-center rounded-xl bg-gold px-4 py-3 text-lg font-bold text-navy"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
