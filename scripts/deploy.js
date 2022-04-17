// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  // We get the contract to deploy
  const TBond = await hre.ethers.getContractFactory("TBond");
  const tbond = await TBond.deploy();
  await tbond.deployed();
  console.log("TBond deployed to:", tbond.address);

  // We get the contract to deploy
  const TShare = await hre.ethers.getContractFactory("TShare");
  const tshare = await TShare.deploy(Date.now(), "0x841a13d8A67D239AA1addD9402f962E8C7a692Da", "0x841a13d8A67D239AA1addD9402f962E8C7a692Da");
  await tshare.deployed();
  console.log("TShare deployed to:", tshare.address);

  // We get the contract to deploy
  const Tomb = await hre.ethers.getContractFactory("Tomb");
  const tomb = await Tomb.deploy(1, "0x841a13d8A67D239AA1addD9402f962E8C7a692Da");
  await tomb.deployed();
  console.log("Tomb deployed to:", tomb.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
