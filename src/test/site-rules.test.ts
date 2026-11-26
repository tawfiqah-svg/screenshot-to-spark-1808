import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { aboutContent, images, privateStudioCount, transformations } from "@/data/site";

describe("ReFormd training network", () => {
  it("has five private studios", () => {
    expect(privateStudioCount).toBe(5);
  });
});

describe("About ReFormd Personal Training", () => {
  it("sets trainer workshops to every two months", () => {
    expect(aboutContent.workshops.cadence).toBe("Every 2 months");
    expect(aboutContent.workshops.text).toContain("every two months");
  });

  it("sets one training standard across trainers and locations", () => {
    expect(aboutContent.teamStory).toContain("senior trainers");
    expect(aboutContent.teamStory).toContain("same standard of training");
    expect(aboutContent.teamStory).toContain("every private studio and RF-Operated Gym");
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

describe("site photos", () => {
  it("points at real PNG files inside the project", () => {
    for (const [name, url] of Object.entries(images)) {
      expect(url, name).toMatch(/^\/images\/[\w.-]+\.png$/);
      expect(existsSync(resolve(process.cwd(), "public", url.replace(/^\//, ""))), name).toBe(true);
    }
  });

  it("stores the testimonials banner as a full-size PNG", () => {
    const file = resolve(process.cwd(), "public", images.testimonialsBanner.replace(/^\//, ""));
    const bytes = readFileSync(file);
    expect(bytes.subarray(1, 4).toString()).toBe("PNG");
    expect(bytes.readUInt32BE(16)).toBe(1920);
    expect(bytes.readUInt32BE(20)).toBe(1080);
  });
});

describe("physique transformations", () => {
  it("shows the two client pairs with their phase captions", () => {
    expect(transformations.map((t) => t.caption)).toEqual([
      "6-Month Muscle Growth Phase",
      "5-Month Muscle Growth Phase",
    ]);
    for (const pair of transformations) {
      for (const url of [pair.before, pair.after]) {
        expect(url, url).toMatch(/^\/images\/[\w.-]+\.png$/);
        expect(existsSync(resolve(process.cwd(), "public", url.replace(/^\//, ""))), url).toBe(true);
      }
    }
  });
});
