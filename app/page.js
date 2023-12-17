"use client";
import Link from "next/link";
//import PopupWidget from "./components/popupWidget";
import OnBoard from "./components/onboard";
export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/paradisecitymetaverse.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">
              Lexington Tech <br />
              WEB3 Demo
            </h1>
            <figure>
              <img className="p-2" src="/blocknative.svg" />
            </figure>
            <p>
              BlockNative WEB3 OnBoard Multi-Wallet and Multi-Chain
              functionality features built-in modules for more than 35 unique
              hardware, software and injected (browser extension) wallets.
            </p>
            <div className="py-4">
              <OnBoard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
