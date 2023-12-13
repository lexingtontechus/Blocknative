"use client";
import { ThemeProvider } from "next-themes";
import web3Onboard from "../context/web3-onboard";
import { Web3OnboardProvider } from "@web3-onboard/react";

export function Providers({ children }) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ThemeProvider defaultTheme="dim">{children}</ThemeProvider>
    </Web3OnboardProvider>
  );
}
