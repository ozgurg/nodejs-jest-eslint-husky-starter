import { helloWorld } from "./hello-world.js";

describe("hello-world", () => {
    it("should say hello to the world", () => {
        expect(helloWorld()).toBe("Hello World");
    });
});
