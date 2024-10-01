import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rightFont = localFont({
  src: "./fonts/Righteous-Regular.ttf",
  variable: "--font-right",
  weight: "100 200 300 400 900",
});


export const metadata: Metadata = {
  title: "Quimba",
  description: "Welcome to Quimba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rightFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
