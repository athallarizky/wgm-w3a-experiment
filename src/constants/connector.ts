// Rainbowkit Wallet Connector
import {
    metaMaskWallet,
    coinbaseWallet,
    walletConnectWallet,
    ledgerWallet,
    rainbowWallet,
    trustWallet,
    safeWallet,
    phantomWallet,
  } from "@rainbow-me/rainbowkit/wallets";
  
  // Wagmi Wallet Connector
  import { MetaMaskConnector } from "wagmi/connectors/metaMask";
  import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
  import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
  import { LedgerConnector } from "wagmi/connectors/ledger";
  import { SafeConnector } from "wagmi/connectors/safe";
  import { InjectedConnector } from "wagmi/connectors/injected";
  import { WSS_ALCHEMY_RPC_URL } from "@/constants/rpc";
  import { CHAINS } from "@/constants/chain";
  
  /**
   * Rainbowkit
   */
  export const RAINBOWKIT_CONNECTOR = [
    walletConnectWallet({ chains: CHAINS, projectId: process.env.appWalletconnectId }),
    coinbaseWallet({ chains: CHAINS, appName: process.env.appName }),
    ledgerWallet({ chains: CHAINS }),
    metaMaskWallet({ chains: CHAINS, shimDisconnect: true }),
    rainbowWallet({ chains: CHAINS, shimDisconnect: true }),
    trustWallet({ chains: CHAINS, shimDisconnect: true }),
    safeWallet({ chains: CHAINS, shimDisconnect: true }),
    phantomWallet({ chains: CHAINS, shimDisconnect: true }),
  ];
  
  /**
   * Wagmi
   */
  export const WAGMI_CONNECTOR = [
    // Injected Connector
    new InjectedConnector({
      chains: CHAINS,
      options: {
        shimDisconnect: true,
      },
    }),
  
    // Metamask Connector
    new MetaMaskConnector({
      chains: CHAINS,
      options: {
        shimDisconnect: true,
      },
    }),
  
    // Coinbase Connector
    new CoinbaseWalletConnector({
      chains: CHAINS,
      options: {
        appName: process.env.appName,
        chainId: parseInt(process.env.appNetId),
        jsonRpcUrl: WSS_ALCHEMY_RPC_URL,
      },
    }),
  
    // Walletconnect Connector
    new WalletConnectConnector({
      chains: CHAINS,
      options: {
        showQrModal: true,
        projectId: process.env.appWalletconnectId,
      },
    }),
  
    // Ledger Connector
    new LedgerConnector({
      chains: CHAINS,
      options: {
        chainId: parseInt(process.env.appNetId),
        rpc: WSS_ALCHEMY_RPC_URL,
      },
    }),
  
    // Safewallet Connector
    new SafeConnector({
      chains: CHAINS,
      options: {
        shimDisconnect: true,
      },
    }),
  ];