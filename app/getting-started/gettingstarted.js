"use client";
import Link from "next/link";
export default function GettingStarted() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/paradisecitymetaverse.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">
              Getting Started
            </h1>
            <h2 className="my-2 text-2xl uppercase">
              With Web3-Onboard by Block Native
            </h2>
            <p>
              Web3-Onboard is the quickest and easiest way to add multi-wallet
              and multi-chain support to your project. With built-in modules for
              more than 35 unique hardware and software wallets, Web3-Onboard
              saves you time and headaches. Supports all EVM networks.
            </p>
            <p className="mb-2"></p>
            <div className="align-center my-4"></div>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/paradisecitymetaverse.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">Step 1</h1>
            <h2 className="my-2 text-2xl uppercase">Connect Wallet</h2>
            <p>Select a wallet from the list below and connect to the dapp.</p>
            <img src="/connectwallet.png" alt="Connect Wallet" />
            <p className="mb-2"></p>
            <div className="align-center my-4"></div>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/paradisecitymetaverse.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">Step 2</h1>
            <h2 className="my-2 text-2xl uppercase">Manage Users </h2>

            <p className="my-2">
              Your authenticated users now have access to your dapp and wallet
              transactions.
            </p>
            <img
              className="mx-auto"
              src="/connectedwallet.png"
              alt="Connected Wallet"
            />
            <div className="align-center my-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
