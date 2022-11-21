import "../styles/globals.css";
import type { AppProps } from "next/app";
import { getPostsData } from "../lib/posts";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
