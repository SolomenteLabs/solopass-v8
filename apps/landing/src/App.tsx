import { useEffect, useState } from "react";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { useWallet } from "@cosmos-kit/react";

const rpcEndpoint = "https://full-node.mainnet-1.coreum.dev:26657";
const chainId = "coreum-mainnet-1";
const contractAddress = "<YOUR_CONTRACT_ADDRESS_HERE>"; // Replace with your deployed contract

function App() {
  const { connect, disconnect, connected, getOfflineSigner, address } = useWallet();
  const [client, setClient] = useState<SigningCosmWasmClient | null>(null);

  useEffect(() => {
    if (!connected) return;

    const setupClient = async () => {
      try {
        const signer = await getOfflineSigner();
        const client = await SigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer);
        setClient(client);
      } catch (error) {
        console.error("❌ Wallet client setup failed:", error);
      }
    };

    setupClient();
  }, [connected]);

  const executeMint = async () => {
    if (!client || !address) {
      alert("Wallet not connected.");
      return;
    }

    try {
      alert("Minting SoloPass Token...");
      const result = await client.execute(
        address,
        contractAddress,
        {
          mint: {}, // Adjust if your mint requires arguments
        },
        "auto"
      );
      console.log("✅ Mint successful:", result);
      alert("✅ Minted successfully!");
    } catch (error) {
      console.error("❌ Mint failed:", error);
      alert("❌ Mint failed. See console for details.");
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "40px" }}>
      <img
        src="/solopass-logo.png"
        alt="SoloPass Logo"
        style={{ width: "150px", display: "block", margin: "0 auto 20px auto" }}
      />
      <h1>SoloPass Mint Demo (Mainnet)</h1>

      {connected ? (
        <div>
          <p>🔗 Connected as: {address}</p>
          <button onClick={disconnect}>Disconnect</button>
          <br />
          <br />
          <button onClick={executeMint}>Mint SoloPass Token</button>
        </div>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;

