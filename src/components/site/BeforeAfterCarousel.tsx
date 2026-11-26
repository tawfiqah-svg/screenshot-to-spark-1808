import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { images } from "@/data/site";

function BeforeAfter({ index }: { index: number }) {
  const [position, setPosition] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img src={images.hero} alt="Sample comparison in colour" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <img src={images.hero} alt="Sample comparison in black and white" loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
        <div className="absolute inset-y-0 w-0.5 bg-background" style={{ left: `${position}%` }} />
        <span className="absolute left-3 top-3 bg-ink px-3 py-1 text-xs font-bold uppercase text-ink-foreground">Before</span>
        <span className="absolute right-3 top-3 bg-cta px-3 py-1 text-xs font-bold uppercase text-cta-foreground">After</span>
        <input type="range" min={0} max={100} value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label={`Compare before and after sample ${index}`} className="absolute inset-x-4 bottom-4 h-8 w-[calc(100%-2rem)] accent-cta" />
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">Sample images, not client results.</figcaption>
    </figure>
  );
}

export function BeforeAfterCarousel() {
  return (
    <Carousel opts={{ align: "start" }} aria-label="Before and after comparisons">
      <CarouselContent>
        {[1, 2].map((index) => (
          <CarouselItem key={index} className="basis-[90%] sm:basis-1/2">
            <BeforeAfter index={index} />
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