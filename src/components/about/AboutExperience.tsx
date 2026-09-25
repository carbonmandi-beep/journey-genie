{/* LEADERSHIP */}
<section className="relative overflow-hidden bg-[#f4efe7] text-navy">
  <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:px-8 lg:py-16">

    {/* Founder Photo */}
    <motion.div
      {...reveal}
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-navy shadow-2xl"
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src="/assets/team/abhinav-sekhri.jpg"
          alt="Abhinav Sekhri, Founder & CEO of Journey Genie"
          fill
          sizes="(max-width: 1024px) 90vw, 420px"
          className="object-cover"
        />
      </div>
    </motion.div>

    {/* Founder Content */}
    <motion.div {...reveal} className="relative">

      <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#a66d2f]">
        Founder & Leadership
      </p>

      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Meet Abhinav Sekhri
      </h2>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-gold">
        <BadgeCheck className="h-3.5 w-3.5" />
        Founder & CEO
      </div>

      <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">

        <p>
          Abhinav Sekhri is the Founder & CEO of Journey Genie, bringing an
          entrepreneurial, technology-driven and customer-first approach to
          the travel industry.
        </p>

        <p>
          His vision for Journey Genie is to build a modern travel platform
          that combines competitive travel options with personal assistance,
          making the booking experience simpler and more transparent for
          customers.
        </p>

        <p>
          Under his leadership, Journey Genie focuses on domestic and
          international flights, hotels, customized holiday packages, visa
          assistance and corporate travel solutions.
        </p>

        <p>
          His approach is built around a simple philosophy: customers should
          have a trusted travel partner they can reach before, during and
          after their journey.
        </p>

      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {[
          "Founder-led travel company",
          "Customer-first approach",
          "Technology & digital innovation",
          "India & global travel solutions",
        ].map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 text-sm font-semibold text-navy"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {item}
          </div>
        ))}
      </div>

      <figure className="mt-7 border-l-[3px] border-gold pl-4">
        <blockquote className="text-base font-medium italic leading-7 text-navy">
          “Travel should be simpler, more personal and more accessible.
          Journey Genie is built to make that happen.”
        </blockquote>

        <figcaption className="mt-2 text-xs font-semibold text-slate-500">
          — Abhinav Sekhri, Founder & CEO
        </figcaption>
      </figure>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="/inquiry/"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-gold px-5 text-sm font-semibold text-navy transition hover:bg-gold-light"
        >
          Plan your journey
          <ArrowRight className="h-4 w-4" />
        </Link>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-navy/15 bg-white px-5 text-sm font-semibold text-navy transition hover:border-gold/50 hover:bg-gold/5"
        >
          WhatsApp Journey Genie
        </a>
      </div>

    </motion.div>
  </div>
</section>
