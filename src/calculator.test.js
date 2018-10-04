const add = require("./src/calculator");

it("should return zero on an empty string", () => {
    expected(add("")).toBe(0);
})