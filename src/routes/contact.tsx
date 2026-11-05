import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader, seo } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact & book a consultation", "Book a free 30-minute online consultation or send us your details and we'll get in touch on WhatsApp."),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeader eyebrow="Contact" title="Book your free consultation" text="Choose whichever option you prefer." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-ink p-8 text-ink-foreground">
          <CalendarDays className="size-8 text-cta" />
          <p className="mt-6 text-xs font-bold uppercase tracking-widest opacity-60">Option 1</p>
          <h2 className="mt-1 text-3xl font-black uppercase">Book an online consultation</h2>
          <p className="mt-3 opacity-80">A 30-minute video call about our programs.</p>
          {/* Placeholder: replace with your Calendly / booking embed */}
          <div className="mt-6 grid aspect-[4/3] place-items-center rounded-md border border-dashed border-ink-foreground/30 text-sm opacity-60">
            Booking calendar embed
          </div>
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
  );
}
