import { useState } from "react";
import type { Location } from "@/data/site";
import { areaLabels, islands, labelledStations, MAP_H, MAP_W, mainland, mrtLines, project, reservoirs } from "@/data/sgMap";
import { cn } from "@/lib/utils";

const path = (pts: [number, number][]) =>
  pts.map(([lat, lng], i) => { const p = project(lat, lng); return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`; }).join(" ") + "Z";
const line = (st: { lat: number; lng: number }[]) =>
  st.map((s, i) => { const p = project(s.lat, s.lng); return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`; }).join(" ");

const stations = new Map<string, { lat: number; lng: number; colors: string[] }>();
for (const l of mrtLines) for (const s of l.stations) {
  const e = stations.get(s.name);
  if (e) { if (!e.colors.includes(l.color)) e.colors.push(l.color); } else stations.set(s.name, { lat: s.lat, lng: s.lng, colors: [l.color] });
}

export function LocationsMap({ locations, origin, closest }: { locations: Location[]; origin: { lat: number; lng: number } | null; closest: string[] }) {
  const [active, setActive] = useState<string | null>(null);
  const activeLoc = locations.find((l) => l.name === active);
  const ap = activeLoc && project(activeLoc.lat, activeLoc.lng);

  return (
    <div className="relative mt-8 overflow-hidden rounded-lg border border-border bg-secondary" aria-label="Map of ReFormd locations and MRT lines">
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="block h-auto w-full" role="img" aria-label="Singapore map">
        <rect width={MAP_W} height={MAP_H} className="fill-secondary" />
        <path d={path(mainland)} className="fill-card stroke-border" strokeWidth={1.5} />
        {islands.map((i, k) => <path key={k} d={path(i)} className="fill-card stroke-border" strokeWidth={1.5} />)}
        {reservoirs.map((r, k) => <path key={k} d={path(r)} className="fill-secondary opacity-70" />)}
        {areaLabels.map((a) => { const p = project(a.lat, a.lng); return (
          <text key={a.name} x={p.x} y={p.y} textAnchor="middle" className="fill-muted-foreground font-display" fontSize={13} letterSpacing={2} opacity={0.55}>{a.name}</text>
        ); })}
        {mrtLines.map((l) => <path key={l.code} d={line(l.stations)} fill="none" stroke={l.color} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" opacity={0.85} />)}
        {[...stations].map(([name, st]) => { const p = project(st.lat, st.lng); const ix = st.colors.length > 1; return (
          <g key={name}>
            <circle cx={p.x} cy={p.y} r={ix ? 3.6 : 2.2} className="fill-card" stroke={ix ? "currentColor" : st.colors[0]} strokeWidth={ix ? 1.4 : 1.2}><title>{name} MRT</title></circle>
            {labelledStations.has(name) && <text x={p.x + 5} y={p.y - 4} fontSize={9.5} className="fill-foreground" opacity={0.75}>{name}</text>}
          </g>
        ); })}
        {origin && (() => { const p = project(origin.lat, origin.lng); return (
          <g><circle cx={p.x} cy={p.y} r={14} className="fill-foreground opacity-15 animate-pulse" /><circle cx={p.x} cy={p.y} r={6} className="fill-foreground stroke-card" strokeWidth={2} /></g>
        ); })()}
      </svg>

      {locations.map((l) => {
        const p = project(l.lat, l.lng);
        const rank = closest.indexOf(l.name);
        return (
          <button key={l.name} type="button" onClick={() => setActive(active === l.name ? null : l.name)} aria-label={`${l.name}, near ${l.mrt} MRT${rank >= 0 ? `, closest #${rank + 1}` : ""}`}
            className={cn("absolute -translate-x-1/2 -translate-y-1/2", rank >= 0 && "z-10")} style={{ left: `${(p.x / MAP_W) * 100}%`, top: `${(p.y / MAP_H) * 100}%` }}>
            {rank >= 0 ? (
              <span className="flex size-7 items-center justify-center rounded-full border-2 border-card bg-cta font-display text-sm text-cta-foreground shadow-cta ring-4 ring-cta/30">{rank + 1}</span>
            ) : (
              <span className={cn("block size-4 rounded-full border-2 border-card shadow", l.type === "studio" ? "bg-cta" : "bg-charcoal", closest.length && "opacity-50")} />
            )}
          </button>
        );
      })}

      {activeLoc && ap && (
        <div className="pointer-events-none absolute z-20 w-52 -translate-x-1/2 -translate-y-full overflow-hidden rounded-md bg-card text-card-foreground shadow-xl"
          style={{ left: `${(ap.x / MAP_W) * 100}%`, top: `calc(${(ap.y / MAP_H) * 100}% - 18px)` }}>
          <img src={activeLoc.image} alt="" className="h-20 w-full object-cover" />
          <span className="block p-2 text-xs"><b className="block font-display text-sm uppercase">{activeLoc.name}</b>{activeLoc.address} · {activeLoc.mrt} MRT</span>
        </div>
      )}

      <div className="absolute bottom-2 left-2 flex max-w-[calc(100%-1rem)] flex-wrap gap-x-3 gap-y-1 rounded-md bg-card/90 px-3 py-2 text-[11px] text-card-foreground shadow sm:text-xs">
        <span className="flex items-center gap-1"><span className="size-2.5 rounded-full bg-cta" />Private studio</span>
        <span className="flex items-center gap-1"><span className="size-2.5 rounded-full bg-charcoal" />RF-Operated Gym</span>
        {closest.length > 0 && <span className="flex items-center gap-1"><span className="flex size-3.5 items-center justify-center rounded-full bg-cta text-[8px] text-cta-foreground">1</span>Closest to you</span>}
        <span className="hidden items-center gap-2 sm:flex">
          {mrtLines.filter((l) => l.code !== "CG").map((l) => <span key={l.code} className="flex items-center gap-1"><span className="h-1 w-3 rounded" style={{ background: l.color }} />{l.code}</span>)}
        </span>
      </div>
    </div>
  );
}
