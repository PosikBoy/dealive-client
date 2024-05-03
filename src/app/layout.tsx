import React from "react";
import dynamic from "next/dynamic";
import "./globals.css";
const Header = dynamic(() => import("@/components/Layout/Header/Header"), {
  ssr: false,
});

import { StoreProvider } from "@/components/StoreProvider";

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
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}
