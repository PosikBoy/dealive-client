import React from "react";
import dynamic from "next/dynamic";
import "./globals.scss";

import { Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
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
    icon: "https://dealive.ru/favicon.ico",
    shortcut: "https://dealive.ru/favicon.ico",
  },
  manifest: "https://dealive.ru/manifest.json",
};
export const viewport: Viewport = {
  themeColor: "#3586ff",
};

import { StoreProvider } from "@/components/StoreProvider";
import Footer from "@/components/Layout/Footer/Footer";
import { Metadata, Viewport } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.className}>
      <StoreProvider>
        <body>
          <div className="wrapper">
            <Header />
            <div className="main">{children}</div>
            <Footer />
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
