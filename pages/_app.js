import "../styles/globals.css";
import Onboard from "@web3-onboard/core";
import {
  Web3OnboardProvider,
  init,
  useConnectWallet,
} from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseWalletModule from "@web3-onboard/coinbase";
import phantomModule from '@web3-onboard/phantom'
import uauthModule from "@web3-onboard/uauth";
import mewWallet from "@web3-onboard/mew-wallet";
import ledgerModule from "@web3-onboard/ledger";

// Uauth initialize
const uauthOptions = {
  clientID: "814a3502-e259-4972-9e2f-e0d5fe9482d8",
  redirectUri: "https://typ18u-3000.preview.csb.app",
  scope: "openid wallet email profile:optional social:optional",
};

const uauth = uauthModule(uauthOptions);

// Coinbase initialize
const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true });

//MEW initialize
const mewWalletModule = mewWallet();

//WalletConnect initialize
const walletConnect = walletConnectModule();

//Ledger initialize
const ledger = ledgerModule();

//Phantom initialize
const phantom = phantomModule()

const INFURA_KEY = "ba619eee154247f18fe6248d6bbd12aa";
//const dappId = '768056ca-c7a4-4867-a3c8-3fd13efd8cb2'

const ethereumRopsten = {
  id: "0x3",
  token: "rETH",
  label: "Ethereum Ropsten",
  rpcUrl: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
};

const polygonMainnet = {
  id: "0x89",
  token: "MATIC",
  label: "Polygon",
  rpcUrl: "https://matic-mainnet.chainstacklabs.com",
};

const chains = [polygonMainnet];
const wallets = [
  injectedModule(),
  uauth,
  walletConnect,
  phantom,
  //coinbaseWalletSdk,
  //mewWalletModule,
  //ledger,
];

const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: "Web3-Onboard Demo",
    icon: "https://storage.fleek.zone/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/img/logo-4mobeers.png",
    logo: "https://storage.fleek.zone/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/img/logo-4mobeers.svg",
    description: "4MoBeers DAO",
    gettingStartedGuide: "http://mydapp.io/getting-started",
    // url that points to more information about app
    explore: "http://mydapp.io/about",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: "1.0.0",
      termsUrl: "https://4mobeers.nft/terms",
      privacyUrl: "https://4mobeers.nft/privacy",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Component {...pageProps} />
    </Web3OnboardProvider>
  );
}

export default MyApp;
