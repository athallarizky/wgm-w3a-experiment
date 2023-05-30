// Wagmi
import { configureChains, createConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// Rainbowkit
import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";

// Constant
import { RPC_API_KEY } from "@/constants/rpc";
import { RAINBOWKIT_CONNECTOR } from "@/constants/connector";
import { CHAINS } from "@/constants/chain";

const { webSocketPublicClient, publicClient } = configureChains(CHAINS, [
  alchemyProvider({
    apiKey: RPC_API_KEY,
  }),
  publicProvider(),
]);

const custom_connectors = connectorsForWallets([
  {
    groupName: "Wallet Connector",
    wallets: RAINBOWKIT_CONNECTOR,
  },
]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: custom_connectors,
  publicClient,
  webSocketPublicClient,
});