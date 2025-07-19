import ReactDOM from 'react-dom/client'
import { ChainProvider, WalletConnectButton } from '@cosmos-kit/react'
import { GasPrice } from '@cosmjs/stargate'
import { wallets as keplrWallets } from '@cosmos-kit/keplr'
import coreumChain from 'chain-registry/chain/coreum.json'
import coreumAssets from 'chain-registry/assetlists/coreum.json'

const App = () => (
  <ChainProvider
    chains={[coreumChain.chain]}
    assetLists={[coreumAssets.assetList]}
    wallets={keplrWallets}
    walletConnectOptions={{
      signClient: {
        projectId: 'demo',
        relayUrl: 'wss://relay.walletconnect.org',
        metadata: {
          name: 'SoloPass Demo',
          description: 'Coreum Smart Token Gating',
          url: 'https://accesslayer.org',
          icons: ['https://walletconnect.com/walletconnect-logo.png'],
        },
      },
    }}
    signerOptions={{
      signingStargate: () => ({
        gasPrice: GasPrice.fromString('0.0625ucore'),
      }),
    }}
  >
    <WalletConnectButton />
  </ChainProvider>
)

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)


