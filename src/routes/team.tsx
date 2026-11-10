import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaLink, PageHero, Reveal, seo } from "@/components/site/Layout";
import { images, team } from "@/data/site";

export const Route = createFileRoute("/team")({
  head: () => seo("Our team", "Meet ReFormd's expert personal trainers in Singapore and their specialisations."),
  component: Team,
});

function Team() {
  return (
    <>
      <PageHero eyebrow="Team" title="Meet your coaches" text="Expert coaches who help you cut through the noise and focus on what works for you." image={images.studio} />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <Reveal key={t.name}>
              <article>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
                  {t.senior && <span className="absolute left-3 top-3 rounded-full bg-cta px-3 py-1 text-xs font-bold uppercase tracking-wider text-cta-foreground">Senior trainer</span>}
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
          <Link to="/careers" className="text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            Want to coach with us? See careers
          </Link>
        </div>
      </section>
    </>
  );
}
