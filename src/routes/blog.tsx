import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, seo } from "@/components/site/Layout";
import { blogPosts } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => seo("Blog", "Training, nutrition and recovery advice from ReFormd's personal trainers in Singapore."),
  component: Blog,
});

function Blog() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeader eyebrow="Blog" title="Insights from our personal trainers" />
      <ul className="mt-12 divide-y divide-border border-y border-border">
        {blogPosts.map((p) => (
          <li key={p.slug} className="flex flex-col justify-between gap-2 py-6 md:flex-row md:items-center">
            <h2 className="text-2xl font-black uppercase">{p.title}</h2>
            <span className="text-sm text-muted-foreground">{p.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
