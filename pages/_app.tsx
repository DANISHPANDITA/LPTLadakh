import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
function MyApp({ Component, pageProps }: AppProps) {

  const progress = new ProgressBar({
    size: 5,
    color: "#082032",
    className: "z-50",
    delay: 100,
  });
  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);
  return (
    <>
      <Head>
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;