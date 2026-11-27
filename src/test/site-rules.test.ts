import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { aboutContent, consultationBooking, images, privateStudioCount, team, transformations } from "@/data/site";

describe("ReFormd training network", () => {
  it("offers in-person consultations at four Studios", () => {
    expect(consultationBooking.studioCount).toBe(4);
  });

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
    expect(aboutContent.teamStory).toContain("every private Studio and RF-Operated Gym");
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

describe("Chen Yue trainer profile", () => {
  const t = team.find((x) => x.slug === "chen-yue");

  it("lists his NCSF title and full focus areas", () => {
    expect(t?.title).toBe("NCSF Certified Personal Trainer");
    expect(t?.profile?.focus).toEqual([
      "Strength & Conditioning",
      "Hypertrophy",
      "Mobility",
      "Weight Management",
      "Sustainable Training",
      "Sports Performance",
    ]);
  });

  it("underlines his whole name, unlike first-name-only trainers", () => {
    expect(t?.underlineFullName).toBe(true);
    const carmen = team.find((x) => x.slug === "carmen-ong");
    expect(carmen?.underlineFullName).toBeUndefined();
  });

  it("keeps his three bio paragraphs, qualifications and achievements", () => {
    expect(t?.profile?.bio).toHaveLength(3);
    expect(t?.profile?.beliefLabel).toBe("His training belief");
    expect(t?.profile?.qualifications).toEqual([
      "NCSF Certified Personal Trainer",
      "Diploma in Hospitality & Tourism",
      "CPR & AED Certified",
    ]);
    expect(t?.profile?.achievements).toEqual([
      "Competitive Kickboxing & MMA Experience",
      "Member of the SASS Rugby Team (2012\u20132014)",
    ]);
  });

  it("stores his headshot and profile photo as real PNGs inside the project", () => {
    for (const url of [t?.image, t?.profile?.banner]) {
      expect(url).toMatch(/^\/images\/[\w.-]+\.png$/);
      const file = resolve(process.cwd(), "public", (url ?? "").replace(/^\//, ""));
      expect(existsSync(file), url).toBe(true);
      const bytes = readFileSync(file);
      expect(bytes.subarray(1, 4).toString()).toBe("PNG");
    }
  });
});

describe("Camey Lim trainer profile", () => {
  const t = team.find((x) => x.slug === "camey-lim");

  it("underlines only her first name, unlike Chen Yue's whole name", () => {
    expect(t?.firstName).toBe("Camey");
    expect(t?.lastName).toBe("Lim");
    expect(t?.underlineFullName).toBeUndefined();
  });

  it("lists her NCSF title and five focus areas", () => {
    expect(t?.title).toBe("NCSF Certified Personal Trainer");
    expect(t?.profile?.focus).toEqual([
      "Strength & Conditioning",
      "Hypertrophy",
      "Mobility",
      "Weight Management",
      "Sustainable Training",
    ]);
  });

  it("keeps her three bio paragraphs, qualifications and achievement", () => {
    expect(t?.profile?.bio).toHaveLength(3);
    expect(t?.profile?.qualifications).toEqual([
      "NCSF Certified Personal Trainer",
      "CPF & AED Certified",
      "BFT Kettlebell Basics Course",
      "BFT Barbell Basics Course",
    ]);
    expect(t?.profile?.achievements).toEqual(["Competed in HYROX Singapore 2025 Open Doubles"]);
  });

  it("stores her headshot and profile photo as real PNGs inside the project", () => {
    for (const url of [t?.image, t?.profile?.banner]) {
      expect(url).toMatch(/^\/images\/[\w.-]+\.png$/);
      const file = resolve(process.cwd(), "public", (url ?? "").replace(/^\//, ""));
      expect(existsSync(file), url).toBe(true);
      expect(readFileSync(file).subarray(1, 4).toString()).toBe("PNG");
    }
  });
});

describe("Dominick Goh trainer profile", () => {
  const t = team.find((x) => x.slug === "dominick-goh");

  it("underlines only his first name", () => {
    expect(t?.firstName).toBe("Dominick");
    expect(t?.lastName).toBe("Goh");
    expect(t?.underlineFullName).toBeUndefined();
  });

  it("lists his NASM title and seven focus areas", () => {
    expect(t?.title).toBe("NASM Certified Personal Trainer");
    expect(t?.profile?.focus).toEqual([
      "Strength & Conditioning",
      "Hypertrophy",
      "Mobility",
      "Weight Management",
      "Sustainable Training",
      "Sports Performance",
      "Functional Movement",
    ]);
  });

  it("keeps his two bio paragraphs, belief, qualifications and achievements", () => {
    expect(t?.profile?.bio).toHaveLength(2);
    expect(t?.profile?.belief).toBe("What comes easy is achieved by many. What is hard to attain is achieved by few.");
    expect(t?.profile?.beliefLabel).toBe("His training belief");
    expect(t?.profile?.qualifications).toEqual([
      "NCSF Certified Personal Trainer",
      "Diploma in Electrical Engineering",
      "CPR & AED Certified",
    ]);
    expect(t?.profile?.achievements).toEqual([
      "Performed in various productions presenting Circus Arts",
      "National Selections for Commonwealth Youth Games 2015 \u2013 Rugby",
    ]);
  });

  it("stores his headshot and profile photo as real PNGs inside the project", () => {
    for (const url of [t?.image, t?.profile?.banner]) {
      expect(url).toMatch(/^\/images\/[\w.-]+\.png$/);
      const file = resolve(process.cwd(), "public", (url ?? "").replace(/^\//, ""));
      expect(existsSync(file), url).toBe(true);
      expect(readFileSync(file).subarray(1, 4).toString()).toBe("PNG");
    }
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
