import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChainProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { wallets } from "@cosmos-kit/keplr";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={wallets}
        walletConnectOptions={{
          signClient: {
            projectId: "your_project_id",
          },
        }}
      >
        <App />
      </ChainProvider>
    </React.StrictMode>
  );
}
