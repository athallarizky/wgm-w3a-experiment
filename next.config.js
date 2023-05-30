/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: "server",
  env:{
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    appNetId: process.env.NEXT_PUBLIC_NETWORK_ID,
    appRpcKey: process.env.NEXT_PUBLIC_RPC_KEY,
    appWalletconnectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID,
  }
}

module.exports = nextConfig
