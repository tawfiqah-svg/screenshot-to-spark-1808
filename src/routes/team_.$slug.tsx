import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaLink, PageHero } from "@/components/site/Layout";
import { team } from "@/data/site";

export const Route = createFileRoute("/team_/$slug")({
  loader: ({ params }) => {
    const trainer = team.find((t) => t.slug === params.slug && t.profile);
    if (!trainer) throw notFound();
    return { slug: trainer.slug };
  },
  head: ({ loaderData }) => {
    const t = team.find((x) => x.slug === loaderData?.slug);
    const title = t ? `${t.name}, ${t.title} | ReFormd` : "Trainer | ReFormd";
    const desc = t?.profile?.bio[0]?.slice(0, 155) ?? "Meet a ReFormd personal trainer in Singapore.";
    return { meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: TrainerPage,
});

function TrainerPage() {
  const { slug } = Route.useLoaderData();
  const t = team.find((x) => x.slug === slug)!;
  const p = t.profile!;
  return (
    <>
      <PageHero eyebrow={t.title} title={t.name} text={p.focus.join("  |  ")} image={p.banner} imagePosition="center 25%" />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1fr_360px]">
        <div>
          <Link to="/team" className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-cta">&larr; All trainers</Link>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {p.bio.map((b) => <p key={b.slice(0, 20)}>{b}</p>)}
          </div>
          <blockquote className="mt-10 border-l-4 border-cta pl-6">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">Her training belief</p>
            <p className="mt-2 text-3xl font-black uppercase sm:text-4xl">{p.belief}</p>
          </blockquote>
        </div>
        <aside className="space-y-10">
          <img src={t.image} alt={t.name} className="aspect-[3/4] w-full rounded-lg object-cover object-top" />
          <div>
            <h2 className="text-2xl font-black uppercase">Qualifications</h2>
            <ul className="mt-4 space-y-2 border-t border-border pt-4">{p.qualifications.map((q) => <li key={q}>{q}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase">Sporting achievements</h2>
            <ul className="mt-4 space-y-2 border-t border-border pt-4">{p.achievements.map((q) => <li key={q}>{q}</li>)}</ul>
          </div>
          <CtaLink>Book a consultation</CtaLink>
        </aside>
      </section>
    </>
  );
}
