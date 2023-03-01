import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as fbq from "../lib/fpixel";
import Script from "next/script";
import Head from "next/head";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InitialLoadContext from "../store/initialLoad-context";
import Navbar from "../components/ui/Navbar";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="xma52wwowgo8ighqhbmu6of5z2kqro"
        />
      </Head>{" "}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', ${fbq.FB_PIXEL_ID});
    `,
        }}
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <InitialLoadContext.Provider
        value={{
          firstLoad,
          setFirstLoad,
        }}
      >
        <Component firstLoad={firstLoad} {...pageProps} />
      </InitialLoadContext.Provider>
    </>
  );
}

export default MyApp;
