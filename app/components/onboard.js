import React, { useEffect, useState } from "react";

import {
  useConnectWallet,
  useAccountCenter,
  useWallets,
} from "@web3-onboard/react";
import { ethers } from "ethers";

export default function OnBoard() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [address, setAddress] = useState();
  const updateAccountCenter = useAccountCenter();
  const [accountCenterPosition, setAccountCenterPosition] =
    useState("topRight");
  const connectedWallets = useWallets();
  // create an ethers provider
  // let ethersProvider;
  // if (wallet) {
  //ethersProvider = new ethers.providers.Web3OnboardProvider(      wallet.provider,      "any"    );
  // ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
  //}
  //let provider;
  //useEffect(() => {
  //  if (!wallet) {
  //    provider = null;
  //  } else {
  //   provider = new ethers.getDefaultProvider(wallet.provider, "any");
  //   // providers.Web3Provider(wallet.provider, "any");
  // }  });

  return (
    <div className="container">
      <p>{(wallet, connecting)}</p>
      <p>{address}</p>

      <button
        className="btn btn-primary font-bold"
        onClick={() => (wallet ? disconnect(wallet) : connect())}
      >
        {connecting ? "CONNECTING" : wallet ? "DISCONNECT" : "CONNECT"}
      </button>
    </div>
  );
}
