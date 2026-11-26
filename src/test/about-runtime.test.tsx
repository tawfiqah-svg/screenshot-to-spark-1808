import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

const missing = vi.hoisted(() => ({ field: "goals" }));

vi.mock("@/data/site", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/data/site")>();
  return {
    ...original,
    get aboutContent() {
      if (missing.field === "export") return undefined;
      if (missing.field === "points") {
        return { ...original.aboutContent, workshops: { ...original.aboutContent.workshops, points: undefined } };
      }
      return { ...original.aboutContent, [missing.field]: undefined };
    },
  };
});

vi.mock("@tanstack/react-router", async (importOriginal) => {
  const original = await importOriginal<typeof import("@tanstack/react-router")>();
  return { ...original, Link: ({ children }: { children: React.ReactNode }) => createElement("a", null, children) };
});

vi.mock("@/components/site/Layout", () => ({
  PageHero: () => null,
  SectionHeader: () => null,
  CtaLink: () => null,
  seo: () => ({}),
}));

import { Route } from "@/routes/about";

describe("About runtime", () => {
  it.each(["goals", "values", "standards", "points", "workshops", "export"])(
    "keeps the page available when %s is temporarily unavailable",
    (field) => {
      missing.field = field;
      const Component = Route.options.component;
      if (!Component) throw new Error("About component is missing");
      expect(() => renderToString(createElement(Component))).not.toThrow();
    },
  );
});