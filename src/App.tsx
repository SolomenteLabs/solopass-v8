import React from "react";

function App() {
  const handleMint = () => {
    // existing mint logic here
    console.log("Minting...");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <img
        src="/SoloPass.png"
        alt="SoloPass Logo"
        className="w-40 h-auto mb-6"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-black">
        SoloPass Mint Demo <span className="text-gray-500">(Coreum Mainnet)</span>
      </h1>

      <button
        className="mt-8 bg-black text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition"
        onClick={handleMint}
      >
        Mint SoloPass Token
      </button>

      <p className="mt-10 text-sm text-gray-400">
        Powered by Coreum Smart Tokens · Built by Solomente Labs
      </p>
    </div>
  );
}

export default App;

