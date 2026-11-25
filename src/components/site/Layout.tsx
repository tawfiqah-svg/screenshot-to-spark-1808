import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Instagram, Facebook, Star, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, socialLinks, subBrands } from "@/data/site";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
const logoAsset = { url: "/images/reformd-logo.png" };

export function Logo({ className, inverse }: { className?: string; inverse?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="ReFormd"
      className={cn("h-6 w-auto", inverse && "brightness-0 invert", className)}
    />
  );
}

export function CtaLink({ to = "/contact", children, inverse, className }: { to?: string; children: ReactNode; inverse?: boolean; className?: string }) {
  return (
    <Button asChild variant={inverse ? "ctaInverse" : "cta"} size="xl" className={className}>
      <Link to={to}>{children}</Link>
    </Button>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-5 md:h-16">
        <Link to="/" aria-label="ReFormd home" className="shrink-0">
          <Logo className="h-7 sm:h-8" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-2 overflow-x-auto sm:gap-5 md:flex">
          {nav.map((n) =>
            "children" in n ? (
              <div key={n.label} onMouseEnter={() => openMenu(n.label)} onMouseLeave={scheduleClose}>
                <DropdownMenu open={openDropdown === n.label} onOpenChange={(o) => setOpenDropdown(o ? n.label : null)} modal={false}>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex shrink-0 items-center gap-1 whitespace-nowrap font-display text-xs tracking-normal transition-colors hover:text-foreground sm:text-base",
                      n.children.some((c) => c.to === pathname) ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {n.label} <ChevronDown className={cn("size-3 transition-transform", openDropdown === n.label && "rotate-180")} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" sideOffset={12} className="w-80 max-w-[calc(100vw-24px)] rounded-none p-2" onMouseEnter={() => openMenu(n.label)} onMouseLeave={scheduleClose}>
                    {n.children.map((c) => (
                      <DropdownMenuItem key={c.to} asChild className="group cursor-pointer gap-4 rounded-none p-2 focus:bg-muted">
                        <Link to={c.to} onClick={() => setOpenDropdown(null)}>
                          <img src={c.image} alt="" className="h-16 w-20 shrink-0 object-cover" />
                          <span className="min-w-0">
                            <span className="block font-display text-xl uppercase">{c.label}</span>
                            <span className="mt-1 block font-sans text-sm text-muted-foreground">{c.description}</span>
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="shrink-0 whitespace-nowrap font-display text-xs tracking-normal text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="cta" size="lg" className="h-12 px-4 text-base sm:px-7 sm:text-lg">
            <Link to="/contact"><span className="sm:hidden">Book now</span><span className="hidden sm:inline">Book a consultation</span></Link>
          </Button>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="size-12 border-border md:hidden"
              >
                <Menu className="size-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[86%] max-w-xs flex-col gap-0 overflow-x-hidden p-0">
              <SheetHeader className="border-b border-border px-5 py-4 text-left">
                <SheetTitle className="font-display text-lg uppercase tracking-normal">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-3">
                <ul className="space-y-1">
                  {nav.map((n) =>
                    "children" in n ? (
                      <li key={n.label}>
                        <p className="px-1 pt-4 pb-1 font-display text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {n.label}
                        </p>
                        <ul>
                          {n.children.map((c) => (
                            <li key={c.to}>
                              <SheetClose asChild>
                                <Link
                                  to={c.to}
                                  className={cn(
                                    "block border-l-2 py-2 pl-3 font-display text-2xl uppercase leading-tight transition-colors",
                                    pathname === c.to ? "border-cta text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
                                  )}
                                >
                                  {c.label}
                                  <span className="mt-0.5 block font-sans text-xs normal-case tracking-normal text-muted-foreground">
                                    {c.description}
                                  </span>
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={n.to}>
                        <SheetClose asChild>
                          <Link
                            to={n.to}
                            className={cn(
                              "block border-l-2 py-2 pl-3 font-display text-2xl uppercase leading-tight transition-colors",
                              pathname === n.to ? "border-cta text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
                            )}
                          >
                            {n.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
              <div className="border-t border-border p-4">
                <SheetClose asChild>
                  <Button asChild variant="cta" size="lg" className="w-full">
                    <Link to="/contact">Book a consultation</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SocialSidebar() {
  return (
    <TooltipProvider delayDuration={200}>
      <nav aria-label="Social media" className="fixed right-0 top-1/2 z-40 flex w-11 -translate-y-1/2 flex-col bg-cta text-cta-foreground">
        {socialLinks.map(({ label, href }) => {
          const Icon = label === "Instagram" ? Instagram : Facebook;
          return (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon" className="size-11 text-cta-foreground hover:bg-cta-hover hover:text-cta-foreground focus-visible:ring-inset [&_svg]:size-5">
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon aria-hidden="true" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">{label}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </TooltipProvider>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <Logo inverse className="h-8" />
          <p className="mt-3 max-w-xs text-sm opacity-70">Progress all ways, always.</p>
          <div className="mt-6 flex gap-4">
            {socialLinks.map(({ label, href }) => {
              const Icon = label === "Instagram" ? Instagram : Facebook;
              return (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="opacity-70 hover:opacity-100">
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {nav.map((n) =>
            "children" in n ? (
              n.children.map((c) => (
                <Link key={c.to} to={c.to} className="opacity-70 hover:opacity-100">
                  {c.label}
                </Link>
              ))
            ) : (
              <Link key={n.to} to={n.to} className="opacity-70 hover:opacity-100">
                {n.label}
              </Link>
            ),
          )}
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
      <h2 className="text-3xl font-black uppercase leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base text-muted-foreground sm:text-lg">{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image, imagePosition }: { eyebrow: string; title: string; text?: string; image: string; imagePosition?: string }) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-ink text-ink-foreground">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32">
        <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-cta">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-base opacity-85 sm:text-lg">{text}</p>}
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
