const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (callback) {
  try {
    const simpleStorageInstance = await SimpleStorage.deployed();
    console.log("Alamat kontrak:", simpleStorageInstance.address);

    // Contoh memanggil fungsi kontrak
    const value = await simpleStorageInstance.get();
    console.log("Nilai yang didapat:", value.toString());

    // Contoh mengirim transaksi ke kontrak
    await simpleStorageInstance.set(42, {
      from: web3.eth.defaultAccount,
    });
    console.log("Nilai 42 telah disimpan.");

    // Ambil nilai yang baru disimpan
    const newValue = await simpleStorageInstance.getSomeValue();
    console.log("Nilai yang baru disimpan:", newValue.toString());
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
  callback();
};
