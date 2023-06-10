import React from "react";
import { Metadata } from "next";
import Script from "next/script";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/lib/context/language";

import "./global.css";

export const metadata: Metadata = {
  title: "Café Planeta",
  description: "Top coffee drinks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
        <Script src="/js/jquery.min.js" />
        <Script src="/js/popper.min.js" />
        <Script src="/js/bootstrap.min.js" />
        <Script src="/js/alime.bundle.js" />
      </body>
    </html>
  );
}
