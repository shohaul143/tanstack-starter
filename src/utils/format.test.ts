import { describe, it, expect } from "vite-plus/test";
import { capitalize, formatNumber } from "./format";

describe("capitalize", () => {
  it("capitalizes first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles already capitalized string", () => {
    expect(capitalize("World")).toBe("World");
  });
});

describe("formatNumber", () => {
  it("formats number with commas", () => {
    expect(formatNumber(1000)).toBe("1,000");
    expect(formatNumber(1000000)).toBe("1,000,000");
  });

  it("handles small numbers", () => {
    expect(formatNumber(42)).toBe("42");
  });

  it("handles zero", () => {
    expect(formatNumber(0)).toBe("0");
  });
});
