import { describe, expect, it } from "vitest";
import { privateStudioCount } from "@/data/site";

describe("ReFormd training network", () => {
  it("has five private studios", () => {
    expect(privateStudioCount).toBe(5);
  });
});
import { nearestLocations as _nearest, locations as _locs, postalToCoords as _p2c } from "@/data/site";
describe("closest locations after postal search", () => {
  it("returns exactly the 4 nearest, closest first", () => {
    const o = _p2c("188065")!; // Bugis area
    const top = _nearest(o, _locs);
    expect(top).toHaveLength(4);
    expect(top.map((l) => l.name)).toContain("RF Bugis");
  });
});
