import injectedModule from "@web3-onboard/injected-wallets";
import coinbaseModule from "@web3-onboard/coinbase";
import uauthModule from "@web3-onboard/uauth";
import { init } from "@web3-onboard/react";

// Example key • Replace with your infura key
const INFURA_KEY = process.env.infuraID;
const uauthOptions = {
  clientID: "process.env.uauthID",
  redirectUri: "process.env.redirectURI" || "https://8sw95w-3000.csb.app/",
  scope: "openid wallet messaging:notifications:optional",
  walletConnectProjectId: "process.env.projectID",
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.5 312.5" preserveAspectRatio="xMidYMid meet" width="312.5" height="312.5"><g transform="matrix(6.25,0,0,6.25,0,0)" fill="#cbd5e1"><circle cx="25" cy="25" r="25" fill="#cbd5e1"/></g><g transform="matrix(4.288688776400825,0,0,4.288688776400825,47.42262244719835,44.41993825390175)" fill="#111111"><path d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M26.187 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M26.187 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M33.856 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M42.002 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z" fill="#111111"/></g></svg>`,
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.5 312.5" preserveAspectRatio="xMidYMid meet" width="312.5" height="312.5"><g transform="matrix(6.25,0,0,6.25,0,0)" fill="#cbd5e1"><circle cx="25" cy="25" r="25" fill="#cbd5e1"/></g><g transform="matrix(4.288688776400825,0,0,4.288688776400825,47.42262244719835,44.41993825390175)" fill="#111111"><path d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M26.187 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M26.187 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M33.856 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M42.002 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z" fill="#111111"/></g></svg>`,
    // The description of your app
    description: "Demo app for Onboard",
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
