import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { LocateFixed, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHero, seo } from "@/components/site/Layout";
import { LocationCard } from "@/components/site/Carousels";
import { LocationsMap } from "@/components/site/LocationsMap";
import { distanceKm, images, locations, nearestLocations, postalToCoords, type LocationType } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/locations")({
  head: () => seo("Locations", "Train with ReFormd at our own studios or inside RF-Operated Gyms across Singapore. 15+ locations, each close to an MRT."),
  component: Locations,
});

function Locations() {
  const [filter, setFilter] = useState<"all" | LocationType>("all");
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(null);
  const [message, setMessage] = useState("");

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
  const closest = useMemo(
    () => (origin ? nearestLocations(origin, locations.filter((x) => filter === "all" || x.type === filter)).map((l) => l.name) : []),
    [filter, origin],
  );

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
            <Input value={query} onChange={(e) => { setQuery(e.target.value); setOrigin(null); }} placeholder="Enter a postal code or workplace" aria-label="Postal code or workplace" className="h-14 pl-12 text-base" />
          </div>
          <Button type="submit" variant="cta" size="xl">Search</Button>
          <Button type="button" variant="outline" size="xl" onClick={nearMe}><LocateFixed /> Find a location near me</Button>
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

        <LocationsMap locations={locations.filter((x) => filter === "all" || x.type === filter)} origin={origin} closest={closest} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((l) => (
            <div key={l.name} className={cn("relative", closest.includes(l.name) && "ring-2 ring-cta ring-offset-2 ring-offset-background")}>
              <LocationCard loc={l} />
              {closest.includes(l.name) && <span className="absolute left-3 top-3 bg-cta px-3 py-1 font-display text-sm uppercase tracking-wider text-cta-foreground">Closest #{closest.indexOf(l.name) + 1}</span>}
              {origin && <span className="absolute right-3 top-3 rounded-full bg-background px-3 py-1 text-xs font-bold">{distanceKm(origin, l).toFixed(1)} km</span>}
            </div>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">No locations match. Try a 6-digit postal code.</p>}
        </div>
      </section>
    </>
  );
}
