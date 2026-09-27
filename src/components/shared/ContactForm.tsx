"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "919876260822";

const services = [
  "Flight Booking",
  "Tour Package",
  "Visit Visa",
  "Hotel Reservation",
  "Corporate Travel",
  "Travel Insurance",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappMessage = [
      "Hello Journey Genie,",
      "",
      "I would like to make a travel inquiry.",
      "",
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Service Required: ${form.service}`,
      "",
      "Travel Requirements:",
      form.message,
      "",
      "Sent through Journey Genie Contact Form.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    /*
     * Open WhatsApp directly.
     * No API or email service is required.
     */
    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setStatus("success");
  };

  if (status === "success") {
    return (
      <Card className="border-gold/30">
        <CardContent className="p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />

          <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
            WhatsApp Ready!
          </h3>

          <p className="mt-2 text-muted-foreground">
            Your travel details have been prepared for Journey Genie on
            WhatsApp.
          </p>

          <Button
            variant="primaryGold"
            className="mt-4"
            onClick={() => {
              setForm({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
              });

              setStatus("idle");
            }}
          >
            Send Another Inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden rounded-[2rem] border-0 bg-white shadow-[0_30px_90px_rgba(25,45,65,.14)]">

      {/* HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#284d44] via-[#35665a] to-[#8b6a3d] p-7 text-white sm:p-9">

        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />

        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-navy">
          <Headphones className="h-5 w-5" />
        </div>

        <h2 className="relative mt-5 text-2xl font-bold">
          Tell us where you want to go
        </h2>

        <p className="relative mt-2 max-w-lg text-sm leading-6 text-white/70">
          Share your travel requirements and connect directly with
          Journey Genie on WhatsApp.
        </p>

        <div className="relative mt-5 flex flex-wrap gap-4 text-xs text-white/75">

          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
            Quick response
          </span>

          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
            Human support
          </span>

          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
            Direct WhatsApp
          </span>

        </div>
      </div>


      {/* FORM */}
      <CardContent className="p-7 sm:p-8">

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* NAME + PHONE */}

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="space-y-2">

              <Label htmlFor="name">
                Full Name *
              </Label>

              <Input
                id="name"
                className="h-12 rounded-xl border-navy/10 bg-[#faf8f4]"
                placeholder="Your full name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

            </div>


            <div className="space-y-2">

              <Label htmlFor="phone">
                Phone / WhatsApp *
              </Label>

              <Input
                id="phone"
                type="tel"
                className="h-12 rounded-xl border-navy/10 bg-[#faf8f4]"
                placeholder="e.g. +91 98765 43210"
                required
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />

            </div>

          </div>


          {/* EMAIL */}

          <div className="space-y-2">

            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              className="h-12 rounded-xl border-navy/10 bg-[#faf8f4]"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

          </div>


          {/* SERVICE */}

          <div className="space-y-2">

            <Label>
              Service Required *
            </Label>

            <Select
              value={form.service}
              onValueChange={(value) =>
                setForm({
                  ...form,
                  service: value || "",
                })
              }
            >

              <SelectTrigger className="h-12 w-full rounded-xl border-navy/10 bg-[#faf8f4]">
                <SelectValue placeholder="Choose the service you need" />
              </SelectTrigger>

              <SelectContent>

                {services.map((service) => (
                  <SelectItem
                    key={service}
                    value={service}
                  >
                    {service}
                  </SelectItem>
                ))}

              </SelectContent>

            </Select>

            {/* Hidden native validation for service */}
            <input
              type="text"
              value={form.service}
              required
              onChange={() => {}}
              tabIndex={-1}
              className="pointer-events-none absolute h-0 w-0 opacity-0"
              aria-hidden="true"
            />

          </div>


          {/* MESSAGE */}

          <div className="space-y-2">

            <Label htmlFor="message">
              Message *
            </Label>

            <Textarea
              id="message"
              required
              rows={5}
              className="rounded-xl border-navy/10 bg-[#faf8f4]"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              placeholder="Tell us about your travel requirements..."
            />

          </div>


          {/* SUBMIT */}

          <Button
            type="submit"
            variant="primaryGold"
            size="lg"
            className="h-12 w-full text-base"
            disabled={
              !form.name ||
              !form.phone ||
              !form.service ||
              !form.message
            }
          >

            <Send className="mr-2 h-4 w-4" />

            Send to WhatsApp

            <ArrowRight className="ml-2 h-4 w-4" />

          </Button>

        </form>

      </CardContent>

    </Card>
  );
}
