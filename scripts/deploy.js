 const hre = require("hardhat")
 async function   main() {

    const [owner,from1,from2,from3]= await hre.ethers.getSigner();
    const chai = await hre.ethers.getContractFactory("contract")
    const  contract = chai.deploy() // instance of contract

    await contract.deploy();
    consoleBalances.log("Address of contract",contract.address);
    const addresses = [owner.address,from1.address]
    console.log("Before buying chai")
    await consoleBalances(addresses)
    const amount ={value:hre.ethers.ethers.utils.parseEther("1")}
    await contract.connect(from1).buyChai("from","veryNIce",amount)
    await contract.connect(from2).buyChai("from2","I want to buld something greate",amount)
    await contract.connect(from3).buyChai("from3","This is from 2",amount)

 }
    async function getBalance (address){
         const balance = await hre.ethers.provider.getBalance(address);
         return hre.ethers.utils.formatEther(balance)
    }

    async function consoleBalances(addresses) {
        let counter =0;
        for (const address of addresses){
            console.log(`Address ${counter} balaces` ,await getBalance(address))
        }
    }
     async function consoleMemo(memos) {
        for(const memo of memos){
            const timestamp = memo.timestamp;
            const name = memo.name;
            const  from = memo.from;
            const message = memo.message;
            console.log(`At ${timestamp}, name ${name} . address ${from} messages ${message}`)
        }
        
     }
    
 

 main().catch((error) => {
console.log(error);
process.exitCode =1 ;
 }
 )
