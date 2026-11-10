import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Instagram, Facebook, Youtube, Linkedin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, subBrands } from "@/data/site";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/reformd-logo.png.asset.json";

export function Logo({ className, inverse }: { className?: string; inverse?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="ReFormd"
      className={cn("h-6 w-auto", inverse && "brightness-0 invert", className)}
    />
  );
}

export function CtaLink({ to = "/contact", children, inverse }: { to?: string; children: ReactNode; inverse?: boolean }) {
  return (
    <Button asChild variant={inverse ? "ctaInverse" : "cta"} size="xl">
      <Link to={to}>{children}</Link>
    </Button>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" aria-label="ReFormd home">
          <Logo className="h-8" />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 overflow-x-auto">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="whitespace-nowrap font-display text-base tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="cta" size="sm" className="h-10 px-5">
            <Link to="/contact">Book a consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <Logo inverse className="h-8" />
          <p className="mt-3 max-w-xs text-sm opacity-70">High-end personal training in Singapore.</p>
          <div className="mt-6 flex gap-4">
            {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label={["Instagram", "Facebook", "YouTube", "LinkedIn"][i]} className="opacity-70 hover:opacity-100">
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="opacity-70 hover:opacity-100">
              {n.label}
            </Link>
          ))}
          <Link to="/blog" className="opacity-70 hover:opacity-100">Blog</Link>
        </nav>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest opacity-60">The ReFormd Group</p>
          <ul className="mt-3 space-y-2 text-sm">
            {subBrands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-ink-foreground/10 py-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} ReFormd. All rights reserved.
      </p>
    </footer>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && setVisible(true), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", visible && "is-visible", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, text, center }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-cta">{eyebrow}</p>}
      <h2 className="text-4xl font-black uppercase leading-[0.95] md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image: string }) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-ink text-ink-foreground">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32">
        <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-cta">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] md:text-7xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg opacity-85">{text}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={cn("size-4", i < n ? "fill-star text-star" : "text-border")} />
      ))}
    </div>
  );
}

export function seo(title: string, description: string) {
  const t = `${title} | ReFormd`;
  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
