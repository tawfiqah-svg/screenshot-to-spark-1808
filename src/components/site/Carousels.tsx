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
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mx-auto w-full">
      <CarouselContent>
        {reviews.map((r) => (
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
      <div className="aspect-[4/3] overflow-hidden">
        <img src={loc.image} alt={`ReFormd ${loc.name}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-cta">{loc.type === "studio" ? "ReFormd studio" : "Inside Anytime Fitness"}</p>
        <h3 className="mt-1 text-xl font-black uppercase">{loc.name}</h3>
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
        {items.map((l) => (
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
