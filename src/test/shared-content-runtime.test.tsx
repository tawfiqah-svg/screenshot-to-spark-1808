import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const scenario = vi.hoisted(() => ({ nested: false }));

vi.mock("@/data/site", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/data/site")>();
  return {
    ...original,
    homeBenefits: undefined, locations: undefined, resources: undefined,
    faqs: undefined, blogPosts: undefined, nav: undefined,
    socialLinks: undefined, subBrands: undefined, reviewWidget: undefined,
    get programs() { return scenario.nested ? original.programs : undefined; },
    get groupSupport() {
      return scenario.nested ? original.groupSupport.map((item) => ({ ...item, services: undefined })) : undefined;
    },
    get team() {
      return scenario.nested ? original.team.map((trainer) => ({
        ...trainer, specialisations: undefined,
        profile: trainer.profile ? { ...trainer.profile, bio: undefined, focus: undefined, qualifications: undefined, achievements: undefined } : undefined,
      })) : undefined;
    },
  };
});

vi.mock("@tanstack/react-router", async (importOriginal) => {
  const original = await importOriginal<typeof import("@tanstack/react-router")>();
  return {
    ...original,
    Link: ({ children }: { children: ReactNode }) => createElement("a", null, children),
    useRouterState: () => "/about",
  };
});

import { Route as Home } from "@/routes/index";
import { Route as Programs } from "@/routes/programs";
import { Route as Locations } from "@/routes/locations";
import { Route as Team } from "@/routes/team";
import { Route as Trainer } from "@/routes/team_.$slug";
import { Route as Contact } from "@/routes/contact";
import { Route as Careers } from "@/routes/careers";
import { Route as Blog } from "@/routes/blog";
import { SiteHeader, SiteFooter, SocialSidebar } from "@/components/site/Layout";
import { TrustindexReviews } from "@/components/site/TrustindexReviews";

vi.spyOn(Trainer, "useLoaderData").mockReturnValue({ slug: "carmen-ong" });

describe("Shared content runtime", () => {
  it.each([
    ["Home", Home], ["Programs", Programs], ["Locations", Locations],
    ["Team", Team], ["Trainer profile", Trainer], ["Contact", Contact],
    ["Careers", Careers], ["Blog", Blog],
  ] as const)("keeps %s available when shared collections are missing", (_name, route) => {
    scenario.nested = false;
    const Component = route.options.component;
    if (!Component) throw new Error("Page component missing");
    expect(() => renderToString(createElement(Component))).not.toThrow();
  });

  it.each([SiteHeader, SiteFooter, SocialSidebar])("keeps shared navigation available when collections are missing", (Component) => {
    expect(() => renderToString(createElement(Component))).not.toThrow();
  });

  it.each([Programs, Team, Trainer])("handles missing nested service and trainer lists", (route) => {
    scenario.nested = true;
    const Component = route.options.component;
    if (!Component) throw new Error("Page component missing");
    expect(() => renderToString(createElement(Component))).not.toThrow();
  });

  it("does not crash after hydration when the review widget configuration is missing", () => {
    expect(() => render(createElement(TrustindexReviews))).not.toThrow();
  });
});