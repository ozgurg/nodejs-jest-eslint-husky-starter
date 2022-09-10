import { sayHello } from "./say-hello.js";

describe("say-hello", () => {
    it("should say hello to World", () => {
        expect(sayHello("World")).toBe("Hello World!");
    });
});
