"use client";
import "./globals.css";
import { Inter } from "next/font/google";

import { goerli } from "wagmi/chains";

import { WagmiConfig, createConfig } from "wagmi";
const inter = Inter({ subsets: ["latin"] });

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
    chains: [goerli],
    // Required
    appName: "Gift Card App",
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
          <link
            href="https://fonts.googleapis.com/css2?family=Palatino&display=swap"
            rel="stylesheet"
          />
          <body className={inter.className}>{children}</body>
        </ConnectKitProvider>
      </WagmiConfig>
    </html>
  );
}
