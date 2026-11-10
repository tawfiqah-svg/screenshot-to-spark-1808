import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LocateFixed, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHero, seo } from "@/components/site/Layout";
import { LocationCard } from "@/components/site/Carousels";
import { distanceKm, images, locations, postalToCoords, type LocationType } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/locations")({
  head: () => seo("Locations", "Train with ReFormd at our own studios or inside Anytime Fitness clubs across Singapore. 19 locations, each close to an MRT."),
  component: Locations,
});

// Map bounds for Singapore
const B = { minLat: 1.23, maxLat: 1.47, minLng: 103.6, maxLng: 104.03 };
const project = (lat: number, lng: number) => ({
  x: ((lng - B.minLng) / (B.maxLng - B.minLng)) * 100,
  y: ((B.maxLat - lat) / (B.maxLat - B.minLat)) * 100,
});

function Locations() {
  const [filter, setFilter] = useState<"all" | LocationType>("all");
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(null);
  const [message, setMessage] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const list = useMemo(() => {
    let l = locations.filter((x) => filter === "all" || x.type === filter);
    if (origin) {
      l = [...l].sort((a, b) => distanceKm(origin, a) - distanceKm(origin, b));
    } else if (query.trim()) {
      const q = query.toLowerCase();
      l = l.filter((x) => `${x.name} ${x.address} ${x.mrt}`.toLowerCase().includes(q));
    }
    return l;
  }, [filter, origin, query]);

  function search(e: React.FormEvent) {
    e.preventDefault();
    const c = postalToCoords(query);
    if (c) {
      setOrigin(c);
      setMessage(`Showing studios closest to ${query}`);
    } else {
      setOrigin(null);
      setMessage(query ? `Results for "${query}"` : "");
    }
  }

  function nearMe() {
    if (!navigator.geolocation) return setMessage("Location isn't available in this browser.");
    setMessage("Finding your location…");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setOrigin({ lat: p.coords.latitude, lng: p.coords.longitude });
        setMessage("Showing the locations closest to you");
      },
      () => setMessage("We couldn't get your location. Try a postal code instead."),
    );
  }

  const tabs: { id: "all" | LocationType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "studio", label: "Private ReFormd studios" },
    { id: "gym", label: "RF-Operated Gyms" },
  ];

  return (
    <>
      <PageHero eyebrow="Locations" title="Always a studio near you." text="15+ locations across Singapore: our dedicated studios and Anytime Fitness clubs, each a short walk from the MRT." image={images.studio} />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <form onSubmit={search} className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => { setQuery(e.target.value); setOrigin(null); }} placeholder="Enter a postal code or workplace" aria-label="Postal code or workplace" className="h-14 rounded-full pl-12 text-base" />
          </div>
          <Button type="submit" variant="cta" size="xl">Search</Button>
          <Button type="button" variant="outline" size="xl" className="rounded-full" onClick={nearMe}><LocateFixed /> Find a location near me</Button>
        </form>
        {message && <p className="mt-3 text-sm text-muted-foreground" role="status">{message}</p>}

        <div role="tablist" className="mt-8 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button key={t.id} role="tab" aria-selected={filter === t.id} onClick={() => setFilter(t.id)}
              className={cn("rounded-full px-5 py-2 text-sm font-bold transition-colors", filter === t.id ? "bg-ink text-ink-foreground" : "bg-secondary hover:bg-accent")}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-ink" aria-label="Map of ReFormd locations">
          <svg viewBox="0 0 100 56" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
            <path d="M8 22 C14 12 30 8 45 10 C60 6 78 10 92 20 C96 28 90 34 80 36 C70 44 55 48 42 44 C30 46 18 40 10 34 C6 30 5 26 8 22Z" className="fill-ink-foreground/20 stroke-ink-foreground" strokeWidth="0.2" />
          </svg>
          {locations.filter((x) => filter === "all" || x.type === filter).map((l) => {
            const p = project(l.lat, l.lng);
            const on = active === l.name;
            return (
              <button key={l.name} onClick={() => setActive(on ? null : l.name)} aria-label={`${l.name}, near ${l.mrt} MRT`}
                className="absolute -translate-x-1/2 -translate-y-full" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <span className={cn("block size-4 rounded-full border-2 border-ink-foreground shadow-cta", l.type === "studio" ? "bg-cta" : "bg-star")} />
                {on && (
                  <span className="absolute bottom-6 left-1/2 w-48 -translate-x-1/2 overflow-hidden rounded-md bg-card text-left text-card-foreground shadow-xl">
                    <img src={l.image} alt="" className="h-20 w-full object-cover" />
                    <span className="block p-2 text-xs"><b className="block font-display uppercase">{l.name}</b>{l.mrt} MRT</span>
                  </span>
                )}
              </button>
            );
          })}
          {origin && (() => { const p = project(origin.lat, origin.lng); return <span className="absolute size-3 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-ink-foreground" style={{ left: `${p.x}%`, top: `${p.y}%` }} />; })()}
          <div className="absolute bottom-3 left-3 flex gap-4 rounded-md bg-ink/80 px-3 py-2 text-xs text-ink-foreground">
            <span className="flex items-center gap-1"><span className="size-2.5 rounded-full bg-cta" />ReFormd studio</span>
            <span className="flex items-center gap-1"><span className="size-2.5 rounded-full bg-star" />Anytime Fitness</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((l) => (
            <div key={l.name} className="relative">
              <LocationCard loc={l} />
              {origin && <span className="absolute right-3 top-3 rounded-full bg-background px-3 py-1 text-xs font-bold">{distanceKm(origin, l).toFixed(1)} km</span>}
            </div>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">No locations match. Try a 6-digit postal code.</p>}
        </div>
      </section>
    </>
  );
}
