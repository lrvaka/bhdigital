import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as fbq from "../lib/fpixel";
import Script from "next/script";
import Head from "next/head";
import Loading from "../components/Loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    //only play Loading animation on first load
    setTimeout(() => {
      setFirstLoad(true);
    }, 4000);
  }, []);

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
      {route.asPath === "/" && !firstLoad ? <Loading /> : null}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
