const add = require("./calculator");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("3")).toBe(3);
});

it("should return sum of two given numbers", () => {
    expect(add("2,3")).toBe(5);
});

it("should handle an unknown number of arguments", () => {
    expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
})
