const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
  let simpleStorage;
  const [owner] = accounts;

  beforeEach(async () => {
    simpleStorage = await SimpleStorage.new();
  });

  it("should store a value", async () => {
    await simpleStorage.set(42, { from: owner });
    const storedValue = await simpleStorage.get();
    assert.equal(storedValue.toNumber(), 42, "The value 42 was not stored.");
  });

  it("should emit DataChanged event", async () => {
    const tx = await simpleStorage.set(99, { from: owner });
    assert.equal(
      tx.logs[0].event,
      "DataChanged",
      "DataChanged event should be emitted."
    );
    assert.equal(
      tx.logs[0].args.newValue.toNumber(),
      99,
      "The value in the DataChanged event should be 99."
    );
  });

  it("should only allow owner to set value", async () => {
    try {
      await simpleStorage.set(100, { from: accounts[1] });
      assert.fail("Expected revert not received");
    } catch (error) {
      assert(
        error.message.includes("Ownable: caller is not the owner"),
        "Expected Ownable: caller is not the owner error but got " +
          error.message
      );
    }
  });
});
