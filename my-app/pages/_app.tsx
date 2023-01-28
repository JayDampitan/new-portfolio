import "../styles/globals.css";
import type { AppProps } from "next/app";
import SocialIcons from "../components/SocialIcons";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SocialIcons />
    </>
  );
}
