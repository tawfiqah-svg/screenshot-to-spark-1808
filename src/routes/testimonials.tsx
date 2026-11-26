import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader, seo } from "@/components/site/Layout";
import { BeforeAfterCarousel } from "@/components/site/BeforeAfterCarousel";
import { TrustindexReviews } from "@/components/site/TrustindexReviews";
import { Button } from "@/components/ui/button";
import { images, videoTestimonial } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => seo("Testimonials", "Read Google reviews and watch personal training client stories from ReFormd in Singapore."),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Real transformations from people like you" image={images.hero} />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <TrustindexReviews />
      </section>
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader title="Before / after" />
          <div className="mt-10">
            <BeforeAfterCarousel />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
        <SectionHeader title="Video Testimonial" />
        <figure className="mx-auto mt-10 max-w-lg">
          <iframe
            src={videoTestimonial.embedUrl}
            title="Zubin's video testimonial on Instagram"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="h-[720px] w-full border-0 bg-card sm:h-[780px]"
          />
          <figcaption className="mt-6">
            <h3 className="font-display text-3xl">{videoTestimonial.name}</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{videoTestimonial.caption}</p>
            <Button asChild variant="link" className="mt-3 h-auto whitespace-normal px-0">
              <a href={videoTestimonial.url} target="_blank" rel="noopener noreferrer">Watch on Instagram</a>
            </Button>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
