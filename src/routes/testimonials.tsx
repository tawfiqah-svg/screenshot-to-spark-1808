import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, SectionHeader, seo } from "@/components/site/Layout";
import { ReviewCard } from "@/components/site/Carousels";
import { brandVideoUrl, caseStudies, images, reviews } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => seo("Testimonials", "Google reviews, before & after transformations, client videos and case studies from ReFormd clients in Singapore."),
  component: Testimonials,
});

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
      <img src={images.hero} alt="After" className="absolute inset-0 h-full w-full object-cover" />
      <img src={images.hero} alt="Before" className="absolute inset-0 h-full w-full object-cover grayscale" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <div className="absolute inset-y-0 w-0.5 bg-background" style={{ left: `${pos}%` }} />
      <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase text-ink-foreground">Before</span>
      <span className="absolute right-3 top-3 rounded-full bg-cta px-3 py-1 text-xs font-bold uppercase text-cta-foreground">After</span>
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Compare before and after" className="absolute inset-x-4 bottom-4 accent-cta" />
    </div>
  );
}

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Real transformations from people like you" image={images.hero} />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeader title="Google reviews" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => <Reveal key={r.name}><ReviewCard {...r} /></Reveal>)}
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader title="Before / after" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <BeforeAfter />
            <BeforeAfter />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeader title="Client testimonial videos" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="aspect-video overflow-hidden rounded-lg bg-ink">
              <iframe className="h-full w-full" src={brandVideoUrl} title={`Client testimonial video ${n}`} loading="lazy" allowFullScreen />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader title="Case studies" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.title}>
                <img src={c.image} alt={c.name} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <p className="mt-4 text-sm opacity-60">{c.name}</p>
                <h3 className="mt-1 text-2xl font-black uppercase leading-tight">{c.title}</h3>
                <a href="#" className="mt-3 inline-flex items-center gap-2 font-bold text-cta">Learn more <ArrowRight className="size-4" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
