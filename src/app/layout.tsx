import React from "react";
import dynamic from "next/dynamic";
import "./globals.css";
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
    <html lang="ru">
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
