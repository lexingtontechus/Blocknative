import injectedModule from "@web3-onboard/injected-wallets";
import coinbaseModule from "@web3-onboard/coinbase";
import uauthModule from "@web3-onboard/uauth";
import { init } from "@web3-onboard/react";

// Example key • Replace with your infura key
const INFURA_KEY = "5be5a02c815f416792313be90e8f18f8";
const uauthOptions = {
  clientID: "9cf9141a-2e8a-4ca8-b48b-4768baa7eb8d",
  redirectUri: "https://8sw95w-3000.csb.app/",
  scope: "openid wallet messaging:notifications:optional",
  walletConnectProjectId: "5b9cdf5b-4b69-4d5f-88cd-a3c68e0ad1fd",
};

const uauth = uauthModule(uauthOptions);

const injected = injectedModule({
  custom: [
    // include custom injected wallet modules here
  ],
  filter: {
    // mapping of wallet labels to filter here
  },
});

const walletLink = coinbaseModule();

export default init({
  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [uauth, injected, walletLink],
  // An array of Chains that your app supports
  chains: [
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: "0x1",
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: "evm",
      // the native token symbol, eg ETH, BNB, MATIC
      token: "ETH",
      // used for display, eg Ethereum Mainnet
      label: "Ethereum Mainnet",
      // used for network requests
      rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    },
    {
      id: "0x89",
      token: "MATIC",
      label: "Matic Mainnet",
      rpcUrl: "https://matic-mainnet.chainstacklabs.com",
    },
  ],
  appMetadata: {
    // The name of your dApp
    name: "Lexington WEB3",

    // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
    icon: `<svg width="100%" height="100%" viewBox="0 0 312.5 312.5" fill="none" xmlns="http://www.w3.org/2000/svg">  <g
    featurekey="rootContainer"
    transform="matrix(6.25,0,0,6.25,0.31249597668647766,0)"
    fill="#0F172A"
  >
    <path
      d="M24.95 0a25 25 0 1 0 25 25 25 25 0 0 0-25-25zm0 46.91a22 22 0 1 1 22-22 22 22 0 0 1-22 21.99z"
      fill="#0F172A"
    />
    <path
      d="M24.95 3.65a21.3 21.3 0 1 0 21.3 21.3 21.33 21.33 0 0 0-21.3-21.3z"
      fill="#0F172A"
    />
  </g>
  <g
    id="SvgjsG6646"
    featurekey="nameFeature-0"
    transform="matrix(3.8212932024467334,0,0,3.8212932024467334,48.357413595106536,57.041305021540545)"
    fill="#F8FAFC"
  >
    <path
      d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M29.039 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M29.039 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M39.56 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M47.706 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z"
      fill="#F8FAFC"
    />
  </g>
    </svg>`,
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    logo: "/logo_lxt_futuristic_dark.svg",
    // The description of your app
    description: "Demo app for Onboard V2",
    // The url to a getting started guide for app
    gettingStartedGuide: "/getting-started",
    // url that points to more information about app
    explore: "/about",
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: "MetaMask",
        // link to download wallet
        url: "https://metamask.io",
      },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: "1.0.0",
      termsUrl: "https://lexingtontech.us/terms",
      privacyUrl: "https://lexingtontech.us/privacy",
    },
  },
  // example customising copy
  // i18n: {
  //   en: {
  //     connect: {
  //       selectingWallet: {
  //         header: 'custom text header'
  //       }
  //     }
  //   }
  // }
});
