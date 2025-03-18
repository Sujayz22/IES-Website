import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfProDisplay = localFont({
  src: "./fonts/SF-Pro-Display-Regular.woff",
  variable: "--font-sf-pro-display",
  weight: "100 900",
});
const sfProText = localFont({
  src: "./fonts/SF-Pro-Text-Regular.woff",
  variable: "--font-sf-pro-text",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IES of SDA",
  description: "A website for Immanuel English School of SDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfProDisplay.variable} ${sfProText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
