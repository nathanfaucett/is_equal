var assert = require("assert"),
    isEqual = require("../src/index");


describe("isEqual", function() {
    it("should return true when the values are equal types and values, so NaN === NaN", function() {
        assert.equal(isEqual(null, null), true);
        assert.equal(isEqual(undefined, undefined), true);
        assert.equal(isEqual(NaN, NaN), true);
        assert.equal(isEqual("", ""), true);

        assert.equal(isEqual({}, {}), false);
        assert.equal(isEqual([], []), false);
        assert.equal(isEqual(/./, /./), false);
        assert.equal(isEqual(function noop() {}, function noop() {}), false);
    });
});
