import { classist, ClassistType } from "utils/theme";

describe("classist()", () => {
  it("should combine an array of strings", () => {
    const list: ClassistType = ["class-1", "class-2", "class-3"];
    const classes = classist(list);
    expect(classes).toEqual("class-1 class-2 class-3");
  });

  it("should combine array of conditional objects", () => {
    const list: ClassistType = [{ "class-1": true }, { "class-2": false }, { "class-3": true }];
    const classes = classist(list);
    expect(classes).toEqual("class-1 class-3");
  });

  it("should combine array with mix of strings and conditional objects", () => {
    const list: ClassistType = [
      "class-1",
      { "class-2": true },
      "class-3",
      { "class-4": false },
      { "class-5": true },
    ];
    const classes = classist(list);
    expect(classes).toEqual("class-1 class-2 class-3 class-5");
  });
});
