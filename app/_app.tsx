import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";

import { WagmiConfig, createConfig } from "wagmi";

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
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
