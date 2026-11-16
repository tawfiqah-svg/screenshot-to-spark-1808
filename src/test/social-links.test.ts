import { describe, expect, it } from "vitest";
import { socialLinks } from "@/data/site";

describe("Official ReFormd social destinations", () => {
  it("uses the supplied Instagram account", () => {
    expect(socialLinks.find((link) => link.label === "Instagram")?.href).toBe("https://www.instagram.com/reformd_training/?hl=en");
  });
  it("uses the supplied Facebook account", () => {
    expect(socialLinks.find((link) => link.label === "Facebook")?.href).toBe("https://www.facebook.com/reformdtraining/");
  });
});