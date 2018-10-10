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

it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
})

it("should throw an error and print out negative number", () => {
    expect(add('4\n-2')).toBe("Negatives not allowed: -2");
});

it("should ignore numbers bigger than 1000", () => {
    expect(add("3,1000")).toBe(3);
});

it("should handle a different delimeter", () => {
    expect(add("//;\n1;2")).toBe(3);
})