const { expect } = require("chai");
describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmdNSR7VaHjgmzXKWw2kkgpqL5DC2y88CFNYd1V1Q1KNbq";
    await nft.deployed();
    await nft.mint("0x7028f6756a9b815711bc2d37e8d5be23fdac846d", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});