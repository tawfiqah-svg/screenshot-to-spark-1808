import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { transformations } from "@/data/site";

function BeforeAfter({ before, after, caption }: { before: string; after: string; caption: string }) {
  return (
    <figure className="flex h-full flex-col">
      <div className="grid grow grid-cols-2 gap-1 overflow-hidden rounded-lg bg-ink">
        <div className="relative">
          <img src={before} alt={`Before, ${caption}`} loading="lazy" className="h-full w-full object-cover object-top" />
          <span className="absolute left-2 top-2 bg-ink px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-foreground">
            Before
          </span>
        </div>
        <div className="relative">
          <img src={after} alt={`After, ${caption}`} loading="lazy" className="h-full w-full object-cover object-top" />
          <span className="absolute right-2 top-2 bg-cta px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-cta-foreground">
            After
          </span>
        </div>
      </div>
      <figcaption className="mt-3 font-display text-2xl uppercase leading-tight">{caption}</figcaption>
    </figure>
  );
}

export function BeforeAfterCarousel() {
  const pairs = transformations ?? [];
  if (pairs.length === 0) return null;

  return (
    <Carousel opts={{ align: "start" }} aria-label="Client physique transformations">
      <CarouselContent>
        {pairs.map((t) => (
          <CarouselItem key={t.caption} className="basis-[90%] sm:basis-1/2">
            <BeforeAfter {...t} />
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
