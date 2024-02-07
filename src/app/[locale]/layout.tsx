import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./queryClientProvider";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Factory",
  description: "In mission to build a community",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  let direction = locale === "ar" ? "rtl" : "ltr";
  let font = locale === "ar" ? cairo.className : inter.className;
 
  return (
    <ReactQueryClientProvider>
    
      <html lang={locale} dir={direction} >
        <body className={`${direction} ${font}`}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
