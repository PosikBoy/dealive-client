import React from "react";
import dynamic from "next/dynamic";
import "./globals.scss";

import { StoreProvider } from "@/components/StoreProvider";
import Footer from "@/components/Layout/Footer/Footer";
import { Metadata, Viewport } from "next";
import CookieAgreement from "@/components/Ui/CookieAgreement/CookieAgreement";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import TrackOrder from "@/components/Ui/TrackOrder/TrackOrder";

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

const Header = dynamic(() => import("@/components/Layout/Header/Header"), {
  ssr: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dealive.ru/"),
  openGraph: {
    images: [
      {
        url: "https://dealive.ru/icon.png", // Must be an absolute URL
        width: 128,
        height: 128,
      },
    ],
    type: "website",
  },
  icons: {
    icon: [
      { url: "https://dealive.ru/favicon.svg", type: "image/svg+xml" }, // SVG favicon
      { url: "https://dealive.ru/favicon.ico", type: "image/x-icon" }, // Fallback for older browsers
    ],
    shortcut: "https://dealive.ru/favicon.ico",
  },
  manifest: "https://dealive.ru/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#3586ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <StoreProvider>
        <body>
          <div className="wrapper">
            <Header />
            <div className="main">{children}</div>
            <Footer />
          </div>
          <CookieAgreement />
          <TrackOrder />
          <div>
            <img
              src="https://mc.yandex.ru/watch/99278339"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
          <Script id="yandex-metrika" strategy="lazyOnload">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(99278339, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`}
          </Script>
        </body>
      </StoreProvider>
    </html>
  );
}
