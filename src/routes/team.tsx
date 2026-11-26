import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { TrainerName } from "@/components/site/TrainerName";
import { CtaLink, PageHero, Reveal, seo } from "@/components/site/Layout";
import { images, team } from "@/data/site";

export const Route = createFileRoute("/team")({
  head: () => seo("Our team", "Meet ReFormd's expert personal trainers in Singapore and their specialisations."),
  component: Team,
});

function Team() {
  return (
    <>
      <PageHero eyebrow="Team" title="Meet your personal trainers" text="Our dedicated trainers each have their own specialisation and experience. Our team helps match you to a trainer that fits your goals." image={images.teamBanner} ratio="3/2" />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {(team ?? []).map((t) => (
            <Reveal key={t.name}>
              <article className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105"><img src={t.image} alt={t.name} loading="lazy" style={t.imageStyle as CSSProperties | undefined} className="h-full w-full object-cover object-top" /></div>
                </div>
                <h2 className="mt-4 text-2xl font-black uppercase">
                  {t.profile ? (
                    <Link to="/team/$slug" params={{ slug: t.slug }} className="after:absolute after:inset-0"><TrainerName t={t} /></Link>
                  ) : <TrainerName t={t} />}
                </h2>
                <p className="text-sm text-muted-foreground">{t.title}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {(t.specialisations ?? []).map((s) => <li key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{s}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center gap-4">
          <CtaLink>Book a consultation</CtaLink>
        </div>
      </section>
    </>
  );
}
