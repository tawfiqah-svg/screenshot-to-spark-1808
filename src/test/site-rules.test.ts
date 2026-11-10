import { describe, expect, it } from "vitest";
import { privateStudioCount } from "@/data/site";

describe("ReFormd training network", () => {
  it("has five private studios", () => {
    expect(privateStudioCount).toBe(5);
  });
});