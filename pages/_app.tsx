import "../styles/globals.css";
import type { AppProps } from "next/app";
import SEO from "@bradgarropy/next-seo"
import Head from "next/head";
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
      <SEO   
        keywords={["nonprofit organizations", "ladakh"]}
        title="LADAKH PHANDAY TSOGSPA"
        facebook={{image: "/facebook.png",
        url: "https://www.facebook.com/LadakhPhandayTsogspa276/",
        type: "website",
    }}
        description="An organization that works on issues like education, skill development, health, and self-sufficiency since 1990s under three categories - Sewa, Sanskar and Ekta. We also organize camps raising public awareness." 
      />
      <Head>
        <meta name="google-site-verification" content="hCIam5lSdw6v-ZWOBW4Cg6-07BFgIdssvQSMZ5bN7fk" />
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
