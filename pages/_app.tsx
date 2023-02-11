import "../styles/globals.css";
import "@fontsource/signika-negative/700.css";
import type { AppProps } from "next/app";
import SEO from "@bradgarropy/next-seo"
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
        keywords={["nonprofit organization", "Ladakh", "PHANDAY", "TSOGSPA", "lpt" , "leh" ,"lptladakh"]}
        title="LADAKH PHANDAY TSOGSPA"
        facebook={{image: "/facebook.png",
        url: "https://www.facebook.com/LadakhPhandayTsogspa276/",
        type: "website",
    }}
        description="An organization that works on issues like education, skill development, health, and self-sufficiency since 1990s under three categories - Sewa, Sanskar and Ekta. We also organize camps raising public awareness." 
      />
 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
