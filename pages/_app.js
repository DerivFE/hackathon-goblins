import "../styles/globals.css";
import "../styles/codeblock.css";
import { IdProvider } from "@radix-ui/react-id";

function MyApp({ Component, pageProps }) {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default MyApp;
