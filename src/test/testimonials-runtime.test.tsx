import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/data/site", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/data/site")>();
  return { ...original, videoTestimonials: undefined };
});

vi.mock("@/components/site/Layout", () => ({
  PageHero: () => null,
  SectionHeader: () => null,
  seo: () => ({}),
}));
vi.mock("@/components/site/BeforeAfterCarousel", () => ({ BeforeAfterCarousel: () => null }));
vi.mock("@/components/site/TrustindexReviews", () => ({ TrustindexReviews: () => null }));

import { Route } from "@/routes/testimonials";

describe("Testimonials runtime", () => {
  it("keeps the page available when the video export is temporarily missing", () => {
    const Component = Route.options.component;
    if (!Component) throw new Error("Testimonials component is missing");
    expect(() => renderToString(createElement(Component))).not.toThrow();
  });
});