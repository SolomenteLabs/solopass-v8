import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  ChainProvider,
  WalletConnectButton
} from '@cosmos-kit/react'
import { chains, assets as registryAssets } from 'chain-registry'
import { wallets as keplrWallets } from '@cosmos-kit/keplr'

const coreumAsset = {
  chain_name: "coreum",
  assets: [
    {
      description: "Coreum native token",
      denom_units: [
        { denom: "ucore", exponent: 0 },
        { denom: "CORE", exponent: 6 }
      ],
      base: "ucore",
      name: "Coreum",
      display: "CORE",
      symbol: "CORE"
    }
  ]
};

const App = () => {
  return (
    <ChainProvider
      chains={chains.filter((c) => c.chain_name === 'coreum')}
      assetLists={[coreumAsset]}
      wallets={keplrWallets}
    >
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>🔥 Coreum Mint Demo</h1>
        <WalletConnectButton />
      </div>
    </ChainProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

