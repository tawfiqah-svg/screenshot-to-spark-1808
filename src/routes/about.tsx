import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink, PageHero, SectionHeader, seo } from "@/components/site/Layout";
import { aboutContent, images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About ReFormd Personal Training", "Discover our approach to personal training, the goals we support, our diverse trainer team and the shared coaching standard across every ReFormd location."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About ReFormd Personal Training" title={aboutContent.title} text={aboutContent.mission} image={images.studio} />

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionHeader eyebrow="Who we are" title={aboutContent.introHeading} text={aboutContent.intro} />
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{aboutContent.story}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {aboutContent.values.map((value, index) => (
            <article key={value.title} className="border-t border-border pt-6">
              <span className="font-display text-sm tracking-[0.2em] text-cta">0{index + 1}</span>
              <h3 className="mt-3 text-2xl">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Who we train" title={aboutContent.goalsHeading} text={aboutContent.goalsIntro} />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.goals.map((goal) => (
              <article key={goal.title} className="bg-background p-6 sm:p-8">
                <span aria-hidden="true" className="font-display text-3xl leading-none text-cta">+</span>
                <h3 className="mt-8 text-2xl leading-tight">{goal.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{goal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader eyebrow="Our trainers" title={aboutContent.teamHeading} text={aboutContent.teamIntro} />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{aboutContent.teamStory}</p>
            <Button asChild variant="outline" size="xl" className="mt-8">
              <Link to="/team">Meet our trainers<ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
          <div className="border-t border-border">
            {aboutContent.standards.map((standard, index) => (
              <article key={standard.title} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[40px_1fr] sm:gap-5">
                <span className="font-display text-xl text-cta">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl">{standard.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{standard.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-ink-foreground md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-cta">{aboutContent.workshops.eyebrow}</p>
            <h2 className="text-3xl font-black uppercase leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">{aboutContent.workshops.heading}</h2>
            <p className="mt-8 font-display text-5xl uppercase leading-none text-cta sm:text-6xl">{aboutContent.workshops.cadence}</p>
          </div>
          <div className="lg:pt-8">
            <p className="text-xl leading-relaxed text-ink-foreground">{aboutContent.workshops.text}</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-foreground/75">{aboutContent.workshops.detail}</p>
            <ul className="mt-8 space-y-4 border-t border-ink-foreground/20 pt-8">
              {aboutContent.workshops.points.map((point) => (
                <li key={point} className="flex items-start gap-4 text-ink-foreground/85">
                  <span aria-hidden="true" className="font-display text-2xl leading-none text-cta">+</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 text-center md:py-24">
        <SectionHeader center eyebrow="Start your journey" title={aboutContent.ctaHeading} text={aboutContent.ctaText} />
        <CtaLink className="mt-8">Book a consultation</CtaLink>
      </section>
    </>
  );
}
