import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/data/site", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/data/site")>();
  return { ...original, videoTestimonials: undefined, transformations: undefined, reviews: undefined };
});

vi.mock("@/components/site/Layout", () => ({
  PageHero: () => null,
  SectionHeader: () => null,
  seo: () => ({}),
}));
vi.mock("@/components/site/TrustindexReviews", () => ({ TrustindexReviews: () => null }));

import { BeforeAfterCarousel } from "@/components/site/BeforeAfterCarousel";
import { ReviewsCarousel } from "@/components/site/Carousels";
import { Route } from "@/routes/testimonials";

describe("Testimonials runtime", () => {
  it("keeps the page available when gallery and video exports are temporarily missing", () => {
    const Component = Route.options.component;
    if (!Component) throw new Error("Testimonials component is missing");
    expect(() => renderToString(createElement(Component))).not.toThrow();
  });
  it("does not crash when the comparison gallery export is temporarily missing", () => {
    expect(() => renderToString(createElement(BeforeAfterCarousel))).not.toThrow();
  });
  it("does not crash when the static reviews export is temporarily missing", () => {
    expect(() => renderToString(createElement(ReviewsCarousel))).not.toThrow();
  });
});