import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, ClipboardCheck, Network } from "lucide-react";
import { CtaLink, PageHero, Reveal, SectionHeader, seo } from "@/components/site/Layout";
import { images, resources } from "@/data/site";

export const Route = createFileRoute("/careers")({
  head: () => seo("Careers & RF Academy", "Earn your personal training certification, gain practical experience and explore career opportunities within the ReFormd Group."),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="RF Academy" text="Become ReFormd Certified and take the next step towards a fitness career." image={images.performance} />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <SectionHeader eyebrow="Learn. Practise. Progress." title="Start your career in personal training" text="RF Academy combines personal training certification with practical experience. Learn the fundamentals, shadow experienced trainers during real client sessions and see how personal training is delivered in Singapore." />
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            Build your exercise knowledge, training skills and experience working with clients. After assessment, graduates who meet ReFormd's professional standards can apply for available roles across the Group.
          </p>
          <div className="mt-8"><CtaLink>Get in touch</CtaLink></div>
        </Reveal>
        <div className="mt-20 border-t border-border pt-12">
          <SectionHeader eyebrow="Your pathway" title="From learning to a career" />
          <ol className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {[
              { icon: GraduationCap, step: "01", title: "RF Academy", text: "Work towards your certification. Learn training fundamentals and gain practical experience by shadowing personal trainers." },
              { icon: ClipboardCheck, step: "02", title: "Practical assessment", text: "Be assessed on your technical knowledge, training skills and ability to work with clients against ReFormd's professional standards." },
              { icon: Network, step: "03", title: "Careers within the RF Group", text: "If you meet the required standards, apply for available roles across the ReFormd network." },
            ].map(({ icon: Icon, step, title, text }, i) => (
              <li key={step} className="relative border-t-2 border-cta pt-6">
                <div className="flex items-center justify-between">
                  <Icon className="size-8 text-cta" />
                  <span className="font-display text-4xl text-muted-foreground">{step}</span>
                </div>
                <h3 className="mt-6 text-3xl leading-tight">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
                {i < 2 && <ArrowRight aria-hidden="true" className="absolute -right-6 top-7 hidden size-5 text-cta lg:block" />}
                {i === 2 && (
                  <ul className="mt-6 space-y-4 border-t border-border pt-5">
                    <li><p className="font-semibold">ReFormd Personal Training</p><p className="text-sm text-muted-foreground">Personal Trainer</p></li>
                    <li><p className="font-semibold">Body Fit Training (BFT)</p><p className="text-sm text-muted-foreground">BFT Coach</p></li>
                  </ul>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-sm text-muted-foreground">Career opportunities depend on assessment results and available vacancies. Completing RF Academy does not guarantee a role.</p>
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader title="Free educational resources hub" text="Articles and guides from our personal trainers." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(resources ?? []).map((r) => (
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
