import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageHero, Reveal, seo } from "@/components/site/Layout";
import { images, team } from "@/data/site";

export const Route = createFileRoute("/team")({
  head: () => seo("Our team", "Meet ReFormd's expert personal trainers in Singapore and their specialisations."),
  component: Team,
});

function Team() {
  return (
    <>
      <PageHero eyebrow="Team" title="Meet your personal trainers" text="Our dedicated trainers each have their own specialisation and experience. Our team helps match you to a trainer that fits your goals." image={images.studio} />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <Reveal key={t.name}>
              <article>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h2 className="mt-4 text-2xl font-black uppercase">{t.name}</h2>
                <p className="text-sm text-muted-foreground">{t.title}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {t.specialisations.map((s) => <li key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{s}</li>)}
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
