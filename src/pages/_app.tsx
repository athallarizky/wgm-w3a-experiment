import "@/styles/globals.css";
import App from "next/app";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
// Types
import type { ReactElement } from "react";
import type { AppContext } from "next/app";
import type { NextAppProps } from "@/interfaces/next";

// Config
import { wagmiConfig } from "@/configs/wagmi.config";
import { CHAINS } from "@/constants/chain";

import HydrationWrapper from "@/components/layouts/HydrationWrapper";

const MyApp = ({ Component, pageProps }: NextAppProps): ReactElement => {
  /* Page Layout Wrapper */
  const getLayout = Component?.layout ?? ((children: JSX.Element) => children);
  const page = getLayout(<Component {...pageProps} />);

  return (
    <HydrationWrapper>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={CHAINS}
          modalSize="wide"
          theme={lightTheme({
            accentColor: "#EF3340",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {page}
        </RainbowKitProvider>
      </WagmiConfig>
    </HydrationWrapper>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
