import './App.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'; // ✅ Correct import
import abi from './contract/chai.json';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xC95a4bB33b180d3f639697d16485Dfc6c9362dE5";
      const contractAbi = abi.abi;

      try {
        const { ethereum } = window;

        if (!ethereum) {
          alert("Please install MetaMask!");
          return;
        }

        // Request account access
        await ethereum.request({ method: "eth_requestAccounts" });

        // ✅ Correct instantiation
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);

        setState({ provider, signer, contract });

      } catch (error) {
        console.error("Wallet connection error:", error);
      }
    };

    connectWallet();
    const wallet = ethers.Wallet.createRandom();



  
  }, []);
  console.log(state)
  const wallet = ethers.Wallet.createRandom();
  console.log("Address:", wallet.address);
  console.log("Private Key:", wallet.privateKey);
  
//   async function sendTrasaction(privateKey,provider) {
//     const senderWallet = new ethers.Wallet(privateKey, provider,recipientAddress);
//     const tx = await senderWallet.sendTransaction({
//       to: recipientAddress,
//       value: ethers.parseEther("0.01")
//     });
//     console.log("Transaction Hash:", tx.hash);
//   }

// sendTrasaction(wallet.privateKey,state.provider,43434334);


  return (
    <>
      <h1>Chai Dapp</h1>
      {state.signer ? ( 
        <div>

          <p>Wallet Connected ✅</p>
         
        </div>
      ) : (
        <p>Connecting wallet...</p>
       
      )}
    </>
  );
}

export default App;
