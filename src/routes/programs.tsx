import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Reveal, SectionHeader, seo } from "@/components/site/Layout";
import { groupSupport, images, programs } from "@/data/site";

export const Route = createFileRoute("/programs")({
  head: () => seo("Programs", "Personal training for weight loss and muscle building, performance, longevity, and pregnancy, with FORGED testing and Shelter recovery options."),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Programs to support you at every age and stage" image={images.performance} />
      <div className="mx-auto max-w-7xl space-y-24 px-5 py-24">
        {programs.map((p, i) => (
          <Reveal key={p.title}>
            <article className="grid items-center gap-10 md:grid-cols-2">
              <img src={p.image} alt={p.title} loading="lazy" className={`aspect-[4/3] w-full rounded-lg object-cover ${i === 0 ? "object-[50%_38%]" : ""} ${i % 2 ? "md:order-2" : ""}`} />
              <div>
                <span className="font-display text-6xl font-black text-border">0{i + 1}</span>
                <h2 className="mt-2 text-4xl font-black uppercase leading-none md:text-5xl">{p.title}</h2>
                <p className="mt-5 text-lg text-muted-foreground">{p.text}</p>
                <div className="mt-8"><CtaLink to="/testimonials">See results</CtaLink></div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="The ReFormd Group" title="Testing and recovery to support your training" />
          <p className="mt-5 max-w-2xl text-lg opacity-80">Your personal trainer can recommend performance testing at FORGED by ReFormd and recovery facilities at Shelter to complement your sessions.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {groupSupport.map((a) => (
              <div key={a.title} className="border-t border-ink-foreground/20 py-8">
                <p className="mb-3 text-sm font-semibold uppercase text-cta">{a.label}</p>
                <h3 className="text-3xl font-black uppercase">{a.title}</h3>
                <p className="mt-3 text-lg opacity-80">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
