import { describe, expect, it } from "vitest";
import { groupSupport } from "@/data/site";

describe("Programs support website links", () => {
  it("links FORGED testing to its official website", () => {
    expect(groupSupport.find((brand) => brand.title === "FORGED by ReFormd")?.website).toBe("https://forgedbyrf.co/");
  });

  it("links Shelter recovery to its official website", () => {
    expect(groupSupport.find((brand) => brand.title === "Shelter by ReFormd")?.website).toBe("https://www.seekshelter.co/");
  });
});