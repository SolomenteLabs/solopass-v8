import ReactDOM from "react-dom/client";
import App from "./App";
import { ChainProvider } from "@cosmos-kit/react";
import { chains, assetLists } from "chain-registry";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ChainProvider chains={chains} assetLists={assetLists}>
    <App />
  </ChainProvider>
);

