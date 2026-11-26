import { describe, expect, it } from "vitest";
import { isModuleLoadError } from "@/lib/module-load-error";

describe("failed page module recovery", () => {
  it.each([
    "Importing a module script failed.",
    "Failed to fetch dynamically imported module: /assets/testimonials-old.js",
    "error loading dynamically imported module: /assets/testimonials.js",
    "Loading chunk 42 failed.",
  ])("identifies a failed download: %s", (message) => {
    expect(isModuleLoadError(new TypeError(message))).toBe(true);
  });

  it("does not reload for unrelated rendering errors", () => {
    expect(isModuleLoadError(new TypeError("undefined is not an object"))).toBe(false);
    expect(isModuleLoadError(null)).toBe(false);
  });
});