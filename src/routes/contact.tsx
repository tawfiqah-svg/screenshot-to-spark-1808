import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader, seo } from "@/components/site/Layout";
import { consultationBooking, faqs } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact & FAQ", "Book a free in-person consultation at one of four ReFormd Studios, send us your details, or read answers to common questions about training with us."),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader eyebrow="Contact" title="Book your free consultation" text="Choose whichever option you prefer." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-ink p-8 text-ink-foreground">
            <CalendarDays className="size-8 text-cta" />
            <h2 className="mt-6 text-3xl font-black uppercase">Book an IRL consultation</h2>
            <p className="mt-3 opacity-80">Choose from 4 of our Studios for a 1 hour in-person consultation.</p>
            <iframe
              src={consultationBooking?.url ?? "https://reformdpersonaltraining.setmore.com"}
              title="Book an in-person consultation with ReFormd"
              className="mt-6 h-[620px] w-full rounded-md border border-ink-foreground/20 bg-background"
              loading="lazy"
            />
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <MessageCircle className="size-8 text-cta" />
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">Option 2</p>
            <h2 className="mt-1 text-3xl font-black uppercase">Fill in the form</h2>
            <p className="mt-3 text-muted-foreground">We'll get in touch through WhatsApp first.</p>
            {sent ? (
              <p className="mt-8 rounded-md bg-secondary p-6 font-semibold" role="status">Thanks! We'll message you on WhatsApp shortly.</p>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div><Label htmlFor="name">Name</Label><Input id="name" required className="mt-1.5 h-12" /></div>
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required className="mt-1.5 h-12" /></div>
                <div><Label htmlFor="phone">Phone / WhatsApp number</Label><Input id="phone" type="tel" required className="mt-1.5 h-12" /></div>
                <div><Label htmlFor="msg">Message</Label><Textarea id="msg" rows={4} className="mt-1.5" /></div>
                <Button type="submit" variant="cta" size="xl" className="w-full">Send</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" text="Can't find your answer? Send it through the form above and we'll reply on WhatsApp." />
          <Accordion type="single" collapsible className="mt-12">
            {(faqs ?? []).map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left font-display text-lg font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
