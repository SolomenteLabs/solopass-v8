import { useChain } from "@cosmos-kit/react";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("");
  const { connect, openView, status: walletStatus, address } = useChain("coreum");

  const handleMint = async () => {
    setStatus("Connecting wallet...");
    try {
      await connect();
      setStatus("Wallet connected. Ready to mint!");
      // Add real mint logic here (e.g., via coreum-js tx call)
    } catch (err) {
      console.error(err);
      setStatus("Error connecting wallet");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "1rem",
    }}>
      <img src="/logo.png" alt="AccessLayer Logo" style={{ maxWidth: 180, marginBottom: 20 }} />
      <h1>Mint Your SoloPass</h1>
      <p style={{ maxWidth: 400 }}>
        Connect your Coreum wallet and mint a time-based SoloPass token that unlocks gated access to our smart services.
      </p>
      <button
        onClick={handleMint}
        style={{
          marginTop: 20,
          padding: "0.8rem 1.6rem",
          fontSize: "1rem",
          borderRadius: 8,
          border: "none",
          backgroundColor: "#4b7bec",
          color: "white",
          cursor: "pointer"
        }}
      >
        {walletStatus === "Connected" ? "Mint SoloPass" : "Connect Wallet"}
      </button>
      {status && <p style={{ marginTop: 20, color: "#333" }}>{status}</p>}
      {address && <p style={{ marginTop: 10, fontSize: "0.9rem", color: "#555" }}>Connected: {address}</p>}
    </div>
  );
}

export default App;

