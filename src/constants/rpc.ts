export const RPC_API_KEY = {
    1: process.env.appRpcKey,
    5: process.env.appRpcKey,
  }[process.env.appNetId || 1];
  
  export const HTTP_ALCHEMY_RPC_URL = {
    1: `https://eth-mainnet.g.alchemy.com/v2/${process.env.appRpcKey}`,
    5: `https://eth-goerli.g.alchemy.com/v2/${process.env.appRpcKey}`,
  }[process.env.appNetId || 1];
  
  export const WSS_ALCHEMY_RPC_URL = {
    1: `wss://eth-mainnet.g.alchemy.com/v2/${process.env.appRpcKey}`,
    5: `wss://eth-goerli.g.alchemy.com/v2/${process.env.appRpcKey}`,
  }[process.env.appNetId || 1];