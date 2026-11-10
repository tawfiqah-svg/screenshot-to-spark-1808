import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink, PageHero, SectionHeader, seo } from "@/components/site/Layout";
import { aboutContent, groupSupport, images, rfEvents } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About the RF Group & Events", "Discover the Singapore-born ReFormd Group, our personal training, FORGED performance testing, Shelter recovery and community powerlifting events."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={aboutContent.title} text={aboutContent.mission} image={images.studio} />
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionHeader eyebrow="Born in Singapore" title="More than a place to train" text={aboutContent.intro} />
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{aboutContent.story}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {aboutContent.values.map((value) => (
            <div key={value.title} className="border-t border-border pt-6">
              <h3 className="text-2xl">{value.title}</h3>
              <p className="mt-3 text-muted-foreground">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ink py-16 text-ink-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="The RF Group" title="Training, testing and recovery" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="border-t border-ink-foreground/20 pt-6">
              <p className="text-sm font-semibold uppercase text-cta">Personal training</p>
              <h3 className="mt-3 text-3xl">ReFormd Personal Training</h3>
              <p className="mt-4 opacity-80">One-to-one sessions with a personal trainer, built around your goals and your starting point. Train at our private studios or RF-Operated Gyms at your convenience.</p>
            </div>
            {groupSupport.map((brand) => (
              <div key={brand.title} className="border-t border-ink-foreground/20 pt-6">
                <p className="text-sm font-semibold uppercase text-cta">{brand.label}</p>
                <h3 className="mt-3 text-3xl">{brand.title}</h3>
                <p className="mt-4 opacity-80">{brand.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><CtaLink to="/programs">Explore our programs</CtaLink></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionHeader eyebrow="RF Events" title="Progress beyond the studio" text={aboutContent.eventsIntro} />
        <div className="mt-12 space-y-0">
          {rfEvents.map((event, i) => (
            <article key={event.title} className="grid gap-5 border-t border-border py-8 md:grid-cols-[64px_1fr_1fr] md:gap-8">
              <span className="font-display text-4xl text-cta">0{i + 1}</span>
              <div><p className="mb-2 text-sm text-muted-foreground">{event.venue}</p><h3 className="text-3xl leading-none">{event.title}</h3></div>
              <div>
                <p className="text-muted-foreground">{event.text}</p>
                <Button asChild variant="link" className="mt-3 h-auto justify-start px-0 text-foreground">
                  <a href={event.link} target="_blank" rel="noopener noreferrer">{event.cta}<ArrowRight className="size-4" /></a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
