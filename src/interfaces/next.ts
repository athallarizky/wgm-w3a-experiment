import type {
    NextApiRequest as BaseNextApiRequest,
    NextApiResponse,
    NextComponentType as BaseNextComponentType,
    NextPage as BaseNextPage,
    NextPageContext as BaseNextPageContext,
  } from "next";
  import type { AppProps as BaseAppProps } from "next/app";
  // import type { LayoutType } from "@/containers/layout/layout.types";
  
  export interface NextPageProps {
    // layout?: LayoutType;
    layout?: (page: React.ReactElement) => JSX.Element;
  }
  
  export type NextComponentType = NextPageProps &
    BaseNextComponentType<BaseNextPageContext, unknown, Record<string, unknown>>;
  
  export type NextPage<P = unknown, IP = P> = NextPageProps & BaseNextPage<P, IP>;
  
  export type NextAppProps = BaseAppProps & {
    Component: NextComponentType;
    pageProps: Record<string, unknown>;
  };
  
  export type NextApiRequest<T extends Record<string, unknown> = { [k: string]: unknown }> = BaseNextApiRequest & T;
  
  export type NextApiHandler<
    T extends Record<string, unknown> = { [k: string]: unknown },
    S extends Record<string, unknown> = { [k: string]: unknown },
  > = (req: NextApiRequest<T>, res: NextApiResponse<S>) => Promise<void> | void;
  
  export type Middleware<
    T extends Record<string, unknown> = { [k: string]: unknown },
    S extends Record<string, unknown> = { [k: string]: unknown },
  > = (
    req: NextApiRequest<T>,
    res: NextApiResponse<S>,
    next: (data?: unknown) => Promise<void> | void,
  ) => Promise<void> | void;
  