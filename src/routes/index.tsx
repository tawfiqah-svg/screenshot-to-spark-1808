import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, LineChart, Moon, ArrowRight } from "lucide-react";
import { CtaLink, Reveal, SectionHeader, seo } from "@/components/site/Layout";
import { LocationsCarousel, ReviewsCarousel } from "@/components/site/Carousels";
import { brandVideoUrl, images, locations, programs } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => seo("Feel strong, energised, & confident", "High-end personal training in Singapore for people who want real results. Private studios, expert coaches, data-driven programs."),
  component: Home,
});

const why = [
  { icon: Lock, text: "Your private space to train and focus." },
  { icon: LineChart, text: "Data-driven. Testing & constant tracking." },
  { icon: Moon, text: "Conscious training, helping with nutrition, sleep, and stress." },
];

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-ink text-ink-foreground">
        <img src={images.hero} alt="ReFormd coach guiding a client through a barbell squat" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:pb-24">
          <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-cta">Welcome to ReFormd</p>
          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] sm:text-7xl lg:text-8xl">Feel strong, energised, & confident.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85 md:text-xl">High-end personal training in Singapore for people who want real results.</p>
          <div className="mt-8"><CtaLink>Book your free consultation</CtaLink></div>
        </div>
      </section>

      {/* 2. Different */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-2 md:items-center">
        <Reveal><SectionHeader title="What makes us different?" /></Reveal>
        <Reveal>
          <p className="text-xl leading-relaxed text-muted-foreground">
            You have high standards, a full agenda, and little time for guesswork. In our private, stylish Singapore studios, you'll build strength, gain energy, and develop confidence that extends well beyond your workout sessions. Our expert coaches help you cut through the noise and focus on what works for you.
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
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {why.map(({ icon: Icon, text }, i) => (
            <Reveal key={text}>
              <div className="h-full rounded-lg border border-border bg-card p-8">
                <div className="flex items-center justify-between">
                  <Icon className="size-8 text-cta" />
                  <span className="font-display text-5xl font-black text-border">0{i + 1}</span>
                </div>
                <p className="mt-10 font-display text-2xl font-bold leading-tight">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
            <CtaLink to="/locations">Browse our 20 locations</CtaLink>
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
            The Kickstart trial gives you 3 sessions with an expert coach in a private studio, so you can feel the difference before you commit.
          </p>
          <p className="mx-auto mt-3 max-w-xl opacity-70">Book a consultation to find out more about the Kickstart trial.</p>
          <div className="mt-8"><CtaLink>Book an online consultation</CtaLink></div>
        </div>
      </section>
    </>
  );
}
