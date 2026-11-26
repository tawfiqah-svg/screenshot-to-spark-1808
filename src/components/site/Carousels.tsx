import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, TrainFront } from "lucide-react";
import type { Location } from "@/data/site";
import { reviews } from "@/data/site";
import { Stars } from "./Layout";

export function ReviewCard({ name, rating, text }: { name: string; rating: number; text: string }) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
      <div className="flex items-center justify-between">
        <Stars n={rating} />
        <span className="text-xs font-semibold text-muted-foreground">Google review</span>
      </div>
      <blockquote className="mt-5 flex-1 text-lg leading-relaxed">“{text}”</blockquote>
      <figcaption className="mt-6 font-display font-bold uppercase">{name}</figcaption>
    </figure>
  );
}

export function ReviewsCarousel() {
  const entries = reviews ?? [];
  if (entries.length === 0) return null;

  return (
    <Carousel opts={{ align: "start", loop: true }} className="mx-auto w-full">
      <CarouselContent>
        {entries.map((r) => (
          <CarouselItem key={r.name} className="basis-[88%] sm:basis-1/2 lg:basis-1/3">
            <ReviewCard {...r} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-end gap-2 [&>button]:static [&>button]:translate-y-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}

export function LocationCard({ loc }: { loc: Location }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-card">
      {loc.gallery && loc.gallery.length > 1 ? (
        <Carousel className="relative">
          <CarouselContent className="ml-0">
            {loc.gallery.map((src, i) => (
              <CarouselItem key={src} className="pl-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={src} alt={`ReFormd ${loc.name}, photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 size-8" />
          <CarouselNext className="right-2 size-8" />
        </Carousel>
      ) : (
        <div className="aspect-[4/3] overflow-hidden">
          <img src={loc.image} alt={`ReFormd ${loc.name}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      )}
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-xl font-black uppercase">{loc.name}</h3>
          {loc.type === "studio" && (
            <span className="inline-flex items-center bg-cta px-2.5 py-1 font-display text-sm leading-none tracking-[0.12em] text-cta-foreground shadow-sm">Private studio</span>
          )}
        </div>
        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" />{loc.address}</p>
        <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><TrainFront className="size-4" />{loc.mrt} MRT</p>
      </div>
    </article>
  );
}

export function LocationsCarousel({ items }: { items: Location[] }) {
  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent>
        {(items ?? []).map((l) => (
          <CarouselItem key={l.name} className="basis-[80%] sm:basis-1/2 lg:basis-1/4">
            <LocationCard loc={l} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-end gap-2 [&>button]:static [&>button]:translate-y-0">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
