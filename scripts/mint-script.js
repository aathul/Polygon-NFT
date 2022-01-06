const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmdNSR7VaHjgmzXKWw2kkgpqL5DC2y88CFNYd1V1Q1KNbq"
  const WALLET_ADDRESS = "0xfa37d88e3722d84cAE80E0f794cb4908b557ed87"
  const CONTRACT_ADDRESS = "0x66d8F6606a37a045FFa5EAeC152C51e5a7EE8Ebd"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});