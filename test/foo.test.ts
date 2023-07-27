import { describe, expect, it } from "vitest";

import { foo } from "../packages/pkg-name/src";

describe("foo", () => {
	it("should exported", () => {
		expect(foo).toBe(1);
	});
});
