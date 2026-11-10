import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, seo } from "@/components/site/Layout";
import { images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About us", "The ReFormd Group is Asia's leading fitness brand, home to FORGED by ReFormd, Shelter, The Laboratory and BFT gyms."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="The ReFormd Group is Asia's leading fitness brand." image={images.hero} />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-5 sm:grid-cols-2">
          <Link to="/testimonials" className="flex items-center justify-between rounded-lg bg-ink p-8 text-ink-foreground">
            <span className="font-display text-3xl font-black uppercase">Client results</span>
            <ArrowRight className="size-6" />
          </Link>
          <Link to="/blog" className="flex items-center justify-between rounded-lg bg-ink p-8 text-ink-foreground">
            <span className="font-display text-3xl font-black uppercase">Read our blog</span>
            <ArrowRight className="size-6" />
          </Link>
        </div>
      </section>
    </>
  );
}
