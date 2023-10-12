const app = require("./app.js");
const supertest = require("supertest");
const { describe } = require("jest-circus");
const request = supertest(app);
const isEven = require("./isEven.js");

describe("testNode", () => {
  test("should return a response", async () => {
    const response = await request.get("/testNode");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Yes the testNode endpoint worked");
  });
});

describe("isEven", () => {
  test("returns true if number is even", () => {
    expect(isEven(2)).toBe(true);
  });

  test("returns false if number is odd", () => {
    expect(isEven(3)).toBe(false);
  });

  test("throws an error if number is negative", () => {
    expect(() => isEven(-1)).toThrow();
  });

  test("throws an error if number is not a number", () => {
    expect(() => isEven("1")).toThrow();
  });
});
