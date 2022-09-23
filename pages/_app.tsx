import "../styles/global.css";
import {
  createDOMRenderer,
  GriffelRenderer,
  SSRProvider,
  RendererProvider,
  FluentProvider,
  teamsLightTheme,
} from "@fluentui/react-components";
import type { AppProps } from "next/app";

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

function MyApp({ Component, pageProps, renderer }: EnhancedAppProps) {
  return (
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={teamsLightTheme}>
          <Component {...pageProps} />
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}

export default MyApp;
