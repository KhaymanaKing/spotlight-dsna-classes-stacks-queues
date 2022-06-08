const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  describe("#reverse", () => {
    it("should reverse an array", () => {
      const stack = new Stack([1, 2, 3]);
      expect(stack.reverse()).toEqual([3, 2, 1]);
    });
  });
  });
