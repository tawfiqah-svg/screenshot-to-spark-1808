import { useMemo, useState } from "react";
import type { Location } from "@/data/site";
import { areaLabels, islands, MAP_H, MAP_W, mainland, project, reservoirs, stationLabels } from "@/data/sgMap";
import { cn } from "@/lib/utils";

const path = (pts: [number, number][]) =>
  (pts ?? []).map(([lat, lng], i) => { const p = project(lat, lng); return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`; }).join(" ") + "Z";

/** Where each printed station name sits, so the busy city centre stays readable. */
const place: Record<string, { dx: number; dy: number; end?: boolean }> = {
  "Newton": { dx: -6, dy: 0, end: true }, "Orchard": { dx: -6, dy: 4, end: true },
  "City Hall": { dx: -12, dy: 0, end: true }, "Raffles Place": { dx: 14, dy: 6 }, "Marina Bay": { dx: 8, dy: 8 },
  "Outram Park": { dx: -6, dy: 3, end: true }, "Bugis": { dx: 12, dy: -6 }, "Buona Vista": { dx: -6, dy: 3, end: true },
  "Sixth Avenue": { dx: 6, dy: 3 }, "HarbourFront": { dx: -6, dy: 3, end: true }, "Punggol": { dx: -6, dy: 6, end: true },
  "Changi Airport": { dx: -6, dy: -6, end: true }, "Bukit Panjang": { dx: -6, dy: 0, end: true },
  "Choa Chu Kang": { dx: -6, dy: 0, end: true }, "Boon Lay": { dx: -6, dy: 0, end: true },
  "Dhoby Ghaut": { dx: -6, dy: 0, end: true },
};

export const rankLabel = (rank: number) => ["Nearest", "2nd nearest", "3rd nearest", "4th nearest"][rank] ?? `#${rank + 1} nearest`;

/** Nudge pins apart so studios that sit close together stay readable. */
function spread(pts: { name: string; x: number; y: number }[], min = 28) {
  for (let pass = 0; pass < 40; pass++) {
    let moved = false;
    for (let a = 0; a < pts.length; a++) for (let b = a + 1; b < pts.length; b++) {
      const pa = pts[a], pb = pts[b];
      if (!pa || !pb) continue;
      const dx = pb.x - pa.x, dy = pb.y - pa.y;
      const d = Math.hypot(dx, dy);
      if (d < min) {
        const push = (min - d) / 2;
        const ux = d ? dx / d : 1, uy = d ? dy / d : 0;
        pa.x -= ux * push; pa.y -= uy * push;
        pb.x += ux * push; pb.y += uy * push;
        moved = true;
      }
    }
    if (!moved) break;
  }
  return pts.map((p) => ({ ...p, x: Math.min(MAP_W - 12, Math.max(12, p.x)), y: Math.min(MAP_H - 12, Math.max(12, p.y)) }));
}

export function LocationsMap({ locations, origin, closest }: { locations: Location[]; origin: { lat: number; lng: number } | null; closest: string[] }) {
  const [active, setActive] = useState<string | null>(null);
  const pins = useMemo(() => spread((locations ?? []).map((l) => { const p = project(l.lat, l.lng); return { name: l.name, x: p.x, y: p.y }; })), [locations]);
  const activeLoc = (locations ?? []).find((l) => l.name === active);
  const ap = activeLoc && pins.find((p) => p.name === activeLoc.name);

  return (
    <div className="locations-map relative mt-8 overflow-hidden rounded-lg border border-border bg-secondary" aria-label="Map of ReFormd locations across Singapore">
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="block h-auto w-full" role="img" aria-label="Singapore map with place names">
        <rect width={MAP_W} height={MAP_H} className="fill-secondary" />
        <path d={path(mainland)} className="fill-card stroke-border" strokeWidth={1.5} />
        {(islands ?? []).map((i, k) => <path key={k} d={path(i)} className="fill-card stroke-border" strokeWidth={1.5} />)}
        {(reservoirs ?? []).map((r, k) => <path key={k} d={path(r)} className="fill-secondary opacity-70" />)}
        {(areaLabels ?? []).map((a) => { const p = project(a.lat, a.lng); return (
          <text key={a.name} x={p.x} y={p.y} textAnchor="middle" className="fill-muted-foreground font-display" fontSize={13} letterSpacing={2} opacity={0.55}>{a.name}</text>
        ); })}
        {(stationLabels ?? []).map((st) => {
          const p = project(st.lat, st.lng); const q = place[st.name] ?? { dx: 5, dy: -4 };
          return (
            <text key={st.name} x={p.x + q.dx} y={p.y + q.dy} textAnchor={q.end ? "end" : "start"} fontSize={9.5}
              className="fill-foreground" opacity={0.7} stroke="var(--card)" strokeWidth={2.5} style={{ paintOrder: "stroke" }}>{st.name}</text>
          );
        })}
        {origin && (closest ?? []).map((n) => { const o = project(origin.lat, origin.lng); const q = pins.find((x) => x.name === n); return q ? (
          <line key={n} x1={o.x} y1={o.y} x2={q.x} y2={q.y} stroke="var(--cta)" strokeWidth={2} strokeDasharray="5 4" opacity={0.75} />
        ) : null; })}
        {origin && (() => { const p = project(origin.lat, origin.lng); return (
          <g><circle cx={p.x} cy={p.y} r={14} className="fill-foreground opacity-15 animate-pulse" /><circle cx={p.x} cy={p.y} r={6} className="fill-foreground stroke-card" strokeWidth={2} /></g>
        ); })()}
      </svg>

      {(locations ?? []).map((l) => {
        const p = pins.find((q) => q.name === l.name);
        if (!p) return null;
        const rank = (closest ?? []).indexOf(l.name);
        return (
          <button key={l.name} type="button" onClick={() => setActive(active === l.name ? null : l.name)}
            onMouseEnter={() => setActive(l.name)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(l.name)} onBlur={() => setActive(null)}
            aria-label={`${l.name}, near ${l.mrt} MRT${rank >= 0 ? `, ${rankLabel(rank)} to your search` : ""}`}
            className={cn("absolute -translate-x-1/2 -translate-y-full transition-transform hover:scale-110 focus-visible:scale-110", rank >= 0 ? "z-10" : "", active === l.name && "z-20", (closest ?? []).length && rank < 0 && "opacity-40")}
            style={{ left: `${(p.x / MAP_W) * 100}%`, top: `${(p.y / MAP_H) * 100}%`, transformOrigin: "bottom center" }}>
            <Pin className={cn(rank >= 0 ? "h-11 w-8 sm:h-12 sm:w-9 drop-shadow-lg" : "h-7 w-5 sm:h-8 sm:w-6 drop-shadow", rank >= 0 || l.type === "studio" ? "text-cta" : "text-gym")} label={rank >= 0 ? String(rank + 1) : undefined} />
          </button>
        );
      })}

      {activeLoc && ap && (
        <div className="pointer-events-none absolute z-20 w-52 -translate-x-1/2 -translate-y-full overflow-hidden rounded-md bg-card text-card-foreground shadow-xl"
          style={{ left: `${(ap.x / MAP_W) * 100}%`, top: `calc(${(ap.y / MAP_H) * 100}% - 52px)` }}>
          <img src={activeLoc.image} alt="" className="h-20 w-full object-cover" />
          <span className="block p-2 text-xs"><b className="block font-display text-sm uppercase">{activeLoc.name}</b>{activeLoc.address} · {activeLoc.mrt} MRT</span>
        </div>
      )}

      <div className="absolute bottom-2 left-2 flex max-w-[calc(100%-1rem)] flex-wrap gap-x-3 gap-y-1 rounded-md bg-card/90 px-3 py-2 text-[11px] text-card-foreground shadow sm:text-xs">
        <span className="flex items-center gap-1"><Pin className="h-4 w-3 text-cta" />Private studio</span>
        <span className="flex items-center gap-1"><Pin className="h-4 w-3 text-gym" />RF-Operated Gym</span>
        {(closest ?? []).length > 0 && <span className="flex items-center gap-1"><span className="w-4 border-t-2 border-dashed border-cta" />4 nearest to your search</span>}
      </div>
    </div>
  );
}

function Pin({ className, label }: { className?: string | undefined; label?: string | undefined }) {
  return (
    <svg viewBox="0 0 24 32" className={cn("block", className)} aria-hidden="true">
      <path d="M12 31s10-11.2 10-19A10 10 0 0 0 2 12c0 7.8 10 19 10 19Z" fill="currentColor" stroke="var(--card)" strokeWidth={1.75} />
      {label ? <text x={12} y={16} textAnchor="middle" fontSize={12} fill="var(--cta-foreground)" className="font-display">{label}</text> : <circle cx={12} cy={12} r={3.6} fill="var(--card)" />}
    </svg>
  );
}
