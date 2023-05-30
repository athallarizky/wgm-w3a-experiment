import { mainnet, goerli } from "wagmi/chains";

export const CHAINS = {
  1: [mainnet],
  5: [goerli],
}[process.env.appNetId || 1] as any;