import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaLink, SectionHeader, seo } from "@/components/site/Layout";
import { faqs } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ", "Answers to common questions about training at ReFormd studios and gyms in Singapore."),
  component: Faq,
});

function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
      <Accordion type="single" collapsible className="mt-12">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left font-display text-lg font-bold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-12"><CtaLink>Book a consultation</CtaLink></div>
    </section>
  );
}
