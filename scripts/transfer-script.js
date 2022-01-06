const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");  
  const WALLET_ADDRESS = "0xfa37d88e3722d84cAE80E0f794cb4908b557ed87";
  const RECIEVER_ADDRESS = "0xcA3677AE33d235b21d7388490Aa07D4f27SDHET7";
  const CONTRACT_ADDRESS = "0x66d8F6606a37a045FFa5EAeC152C51e5a7EE8Ebd";
  const TOKENID = "1";
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const result = await contract.transfer(WALLET_ADDRESS,RECIEVER_ADDRESS, TOKENID);
  console.log("NFT transferred:", result);  
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});