import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/lib/context/language";

import "./global.css";

export const metadata = {
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
      </body>
    </html>
  );
}
