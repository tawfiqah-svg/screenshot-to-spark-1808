import { createFileRoute } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/Layout";
import { TrustindexReviews } from "@/components/site/TrustindexReviews";
import { images } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  head: () => seo("Testimonials", "Read Google reviews from ReFormd clients in Singapore."),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Real transformations from people like you" image={images.hero} />
      <section className="mx-auto max-w-7xl px-5 py-24">
        <TrustindexReviews />
      </section>
    </>
  );
}
