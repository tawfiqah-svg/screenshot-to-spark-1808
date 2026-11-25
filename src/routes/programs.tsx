import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Reveal, SectionHeader, seo } from "@/components/site/Layout";
import { groupSupport, programs } from "@/data/site";
import programsHeroAsset from "@/assets/rfpt-marketing.png.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => seo("Programs", "Personal training for weight loss and muscle building, performance, longevity, and pregnancy, with FORGED testing and Shelter recovery options."),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Programs to support you at every age and stage" image={programsHeroAsset.url} imagePosition="center 35%" />
      <div className="mx-auto max-w-7xl space-y-24 px-5 py-24">
        {programs.map((p, i) => (
          <Reveal key={p.title}>
            <article className="grid items-center gap-10 md:grid-cols-2">
              <img src={p.image} alt={p.title} loading="lazy" className={`aspect-[4/3] w-full rounded-lg object-cover ${p.crop} ${i % 2 ? "md:order-2" : ""}`} />
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
          <SectionHeader eyebrow="The ReFormd Group" title="Support beyond your training" />
          <p className="mt-5 max-w-2xl text-lg opacity-80">Your personal trainer can recommend performance testing at FORGED by ReFormd and recovery facilities at Shelter to complement your sessions.</p>
          <Accordion type="multiple" className="mt-12 grid items-start gap-12 md:grid-cols-2">
            {groupSupport.map((a) => (
              <AccordionItem key={a.title} value={a.title} className="min-w-0 border-ink-foreground/20">
                <p className="mb-4 font-display text-2xl uppercase text-cta">{a.label}</p>
                <img src={a.image} alt={a.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <AccordionTrigger className="min-h-24 gap-4 font-display text-3xl leading-tight hover:text-cta hover:no-underline [&>svg]:size-5 [&>svg]:text-ink-foreground md:text-4xl">
                  {a.title}
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="text-lg text-ink-foreground/80">{a.text}</p>
                  <ul className="my-6 space-y-3 text-base text-ink-foreground/80">
                    {a.services.map((service) => (
                      <li key={service} className="flex items-start gap-3"><span aria-hidden="true" className="font-semibold text-cta">+</span><span>{service}</span></li>
                    ))}
                  </ul>
                  <Button asChild variant="cta" size="xl">
                    <a href={a.website} target="_blank" rel="noopener noreferrer">{a.cta}<ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
