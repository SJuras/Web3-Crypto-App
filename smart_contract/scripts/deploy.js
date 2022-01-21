

const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transations = await Transactions.deploy();

  await transations.deployed();

  console.log("Transactions deployed to:", transations.address);
}


const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch(error){
    console.error(error);
    process.exit(1);
  }
}

runMain();
