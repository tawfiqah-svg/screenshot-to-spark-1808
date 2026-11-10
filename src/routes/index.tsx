import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, LineChart, Moon, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaLink, Reveal, SectionHeader, seo } from "@/components/site/Layout";
import { LocationsCarousel, ReviewsCarousel } from "@/components/site/Carousels";
import { brandVideoUrl, images, locations, privateStudioCount, programs } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => seo("Feel strong, energised, & confident", "Personal training in Singapore with five private ReFormd studios, convenient RF-Operated Gyms and experienced personal trainers."),
  component: Home,
});

const why = [
  {
    icon: Lock,
    title: "Five private studios. More places to train.",
    summary: `${privateStudioCount} private studios, with RF-Operated Gyms for your convenience.`,
    details: [
      `Choose from our ${privateStudioCount} private ReFormd studios for focused, one-to-one personal training with no distractions.`,
      "Prefer somewhere closer to home or work? Your personal training session can also be conducted at our RF-Operated Gyms for your convenience with no additional gym membership access required.",
      "Your personal trainer helps you choose a location and session time that fit your routine.",
    ],
  },
  {
    icon: LineChart,
    title: "Data-driven, with testing & constant tracking",
    summary: "Your progress is measured, not guessed.",
    details: [
      "We start with a full assessment of your movement, strength, body composition and lifestyle, so we know exactly where you're starting from.",
      "Your program is built around that data and re-tested on a regular cycle, so you can see exactly what's improving.",
      "Your trainer records your sessions and adjusts your plan as your strength and fitness improve.",
    ],
  },
  {
    icon: Moon,
    title: "Conscious training beyond the session",
    summary: "Nutrition, sleep and stress are part of the plan.",
    details: [
      "Your trainer helps you build eating habits that fit your schedule and preferences.",
      "We factor sleep, stress and recovery into your program, so hard weeks at work don't derail your progress.",
      "You get practical guidance between sessions, so the support continues after you leave the studio.",
    ],
  },
];

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-[calc(100svh-5.6rem)] items-end overflow-hidden bg-ink text-ink-foreground lg:min-h-[calc(100svh-4rem)]">
        <img src={images.homeHero} alt="Client performing a barbell deadlift at a ReFormd studio" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover object-[50%_15%]" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:pb-24">
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-cta">Welcome to ReFormd</p>
          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] sm:text-7xl lg:text-8xl">Feel strong, energised, & confident.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85 md:text-xl">High-end personal training in Singapore for people who want real results.</p>
          <div className="mt-8"><CtaLink>Book your free consultation</CtaLink></div>
        </div>
      </section>

      {/* 2. Different */}
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-24">
        <Reveal><SectionHeader title="What makes us different?" /></Reveal>
        <Reveal>
          <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Your training should fit your life. We build a plan around your goals, track your progress and help you get the exercises right. Train one-to-one with a personal trainer at a private ReFormd studio or choose an RF-Operated Gym closer to home or work.
          </p>
        </Reveal>
      </section>

      {/* 3. Video */}
      <section className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="aspect-video overflow-hidden rounded-lg bg-ink">
            <iframe className="h-full w-full" src={brandVideoUrl} title="ReFormd brand video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* 4. Why */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal><SectionHeader title="Why you'll succeed here" /></Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {why.map(({ icon: Icon, title, summary, details }, i) => (
              <AccordionItem key={title} value={`why-${i}`} className="rounded-lg border border-border bg-card px-6 py-2 data-[state=open]:border-cta/40 md:px-8">
                <AccordionTrigger className="gap-4 py-6 hover:no-underline">
                  <span className="flex flex-1 items-center gap-5 text-left">
                    <Icon className="size-7 shrink-0 text-cta" />
                    <span>
                      <span className="block font-display text-2xl font-bold uppercase leading-tight tracking-wide md:text-3xl">{title}</span>
                      <span className="mt-1 block font-sans text-sm font-normal normal-case tracking-normal text-muted-foreground md:text-base">{summary}</span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-12 pr-2 md:pl-14">
                  <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                    {details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cta" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* 5. Programs */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal><SectionHeader title="Programs to support you at every age and stage" /></Reveal>
            <CtaLink to="/programs">Explore our programs</CtaLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <Link key={p.title} to="/programs" className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-overlay" />
                <h3 className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-2 text-2xl font-black uppercase leading-none">
                  {p.title} <ArrowRight className="size-5 shrink-0" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Reviews */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal><SectionHeader title="Real transformations from people like you" /></Reveal>
        <div className="mt-12"><ReviewsCarousel /></div>
      </section>

      {/* 7. Locations */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal><SectionHeader title="Always a studio near you." /></Reveal>
            <CtaLink to="/locations">Browse 15+ locations</CtaLink>
          </div>
          <div className="mt-12"><LocationsCarousel items={locations} /></div>
        </div>
      </section>

      {/* 8. Trial */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={images.studio} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center">
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-cta">Kickstart trial</p>
          <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">Try 3 sessions to be sure.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg opacity-85">
            Try our 3-Session Kickstarter Trial with a personal trainer at our private studio or an RF-Operated Gym, whichever is more convenient for you.
          </p>
          <div className="mt-8"><CtaLink>Book an online consultation</CtaLink></div>
        </div>
      </section>
    </>
  );
}
