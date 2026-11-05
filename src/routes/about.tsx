import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeader, seo } from "@/components/site/Layout";
import { images, subBrands } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About us", "The ReFormd Group is Asia's leading fitness brand, home to FORGED by ReFormd, Shelter, The Laboratory and BFT gyms."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="The ReFormd Group is Asia's leading fitness brand." image={images.hero} />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeader title="Our brands" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-4">
          {subBrands.map((b) => (
            <div key={b} className="flex aspect-square items-center justify-center bg-card p-6 text-center">
              <span className="font-display text-2xl font-black uppercase">{b === "BFT" ? "BFT gyms" : b}</span>
            </div>
          ))}
        </div>
        <Link to="/blog" className="mt-16 flex items-center justify-between rounded-lg bg-ink p-8 text-ink-foreground">
          <span className="font-display text-3xl font-black uppercase">Read our blog</span>
          <ArrowRight className="size-6" />
        </Link>
      </section>
    </>
  );
}
