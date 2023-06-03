"use client";
import "./globals.css";
import { Inter } from "next/font/google";

import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";

import { WagmiConfig, createConfig } from "wagmi";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gifted",
  description: "Create crypto gift cards.",
};
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID || "",
    chains: [mainnet, polygon, optimism, arbitrum],
    // Required
    appName: "Your App Name",
  })
);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <body className={inter.className}>{children}</body>
        </ConnectKitProvider>
      </WagmiConfig>
    </html>
  );
}
