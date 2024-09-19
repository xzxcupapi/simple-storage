const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
  it("should store and retrieve a value", async () => {
    const instance = await SimpleStorage.deployed();

    // Set a value
    await instance.set(42);

    // Get the value
    const value = await instance.get();

    assert.equal(value.toNumber(), 42, "The stored value should be 42");
  });
});
