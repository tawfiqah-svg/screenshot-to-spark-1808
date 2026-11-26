import { describe, expect, it } from "vitest";
import { locations } from "@/data/site";

describe("location photos", () => {
  it("every location uses its own real photos, never a placeholder", () => {
    for (const l of locations) {
      expect(l.gallery?.length ?? 0, l.name).toBeGreaterThan(0);
      expect(["/images/studio.png", "/images/hero.png", "/images/performance.png"]).not.toContain(l.image);
    }
  });
});
