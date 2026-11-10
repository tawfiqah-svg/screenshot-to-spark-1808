import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaLink, PageHero, Reveal, SectionHeader, seo } from "@/components/site/Layout";
import { images, resources } from "@/data/site";

export const Route = createFileRoute("/careers")({
  head: () => seo("Careers & RF Academy", "Grow your coaching career with RF Academy, and explore ReFormd's free educational resources hub."),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Coach with ReFormd" image={images.performance} />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-2 md:items-center">
        <Reveal>
          <SectionHeader eyebrow="RF Academy" title="Earn your personal training certification" text="Build a new income stream and open the door to a fitness career within ReFormd Group. RF Academy provides a direct pathway towards becoming a Personal Trainer with ReFormd Personal Training. Beyond earning your certification, you will gain practical experience by shadowing experienced trainers during real client sessions and learning how personal training is delivered in Singapore." />
          <p className="mt-5 text-lg text-muted-foreground">
            Develop the technical knowledge, coaching skills and client-management experience needed to begin your career with confidence. Graduates who meet ReFormd's coaching and professional standards will have the opportunity to apply for available Personal Trainer or Coach roles within ReFormd Personal Training and Body Fit Training studios owned by the ReFormd Group.
          </p>
          <div className="mt-8"><CtaLink>Get in touch</CtaLink></div>
        </Reveal>
        <img src={images.studio} alt="ReFormd studio" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader title="Free educational resources hub" text="Articles and guides from our coaches." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <a key={r.title} href="#" className="group flex flex-col justify-between rounded-lg bg-card p-7 transition-transform hover:-translate-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-cta">{r.tag}</span>
                <h3 className="mt-8 text-2xl font-black uppercase leading-tight">{r.title}</h3>
                <ArrowRight className="mt-6 size-5 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
