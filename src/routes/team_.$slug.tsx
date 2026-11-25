import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/Layout";
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
      {/* Banner photo only: no gradient, no text on top */}
      <img
        src={p.banner}
        alt={`${t.name} training`}
        className="block h-[46vh] max-h-[520px] min-h-[280px] w-full object-cover object-center sm:h-[56vh] lg:h-[62vh]"
      />

      {/* Everything else reads top to bottom in one column */}
      <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:py-20">
        <Link to="/team" className="font-display text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground hover:text-cta">
          &larr; All trainers
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-cta">{t.title}</p>
          <h1 className="mt-3 text-5xl font-black uppercase leading-[1.02] sm:text-6xl">
            <span className="underline decoration-cta decoration-4 underline-offset-[10px]">{t.firstName}</span>{" "}
            {t.lastName}
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">{p.focus.join("  |  ")}</p>
        </header>

        <img src={t.image} alt={t.name} className="mt-10 aspect-[3/4] w-full max-w-xs rounded-lg object-cover object-top" />

        <div className="mt-10 space-y-6 text-lg leading-relaxed">
          {p.bio.map((b) => <p key={b.slice(0, 20)}>{b}</p>)}
        </div>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Her training belief</h2>
          <p className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">{p.belief}</p>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Qualifications</h2>
          <ul className="mt-5 space-y-3 text-lg">
            {p.qualifications.map((q) => <li key={q} className="flex gap-3"><span className="mt-3 h-px w-6 shrink-0 bg-cta" />{q}</li>)}
          </ul>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Sporting achievements</h2>
          <ul className="mt-5 space-y-3 text-lg">
            {p.achievements.map((q) => <li key={q} className="flex gap-3"><span className="mt-3 h-px w-6 shrink-0 bg-cta" />{q}</li>)}
          </ul>
        </section>

        <div className="mt-14 border-t border-border pt-10">
          <CtaLink>Book a consultation</CtaLink>
        </div>
      </article>
    </>
  );
}
