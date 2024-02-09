import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./queryClientProvider";
import useTextDirection from "@/useTextDirection";

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
  let font = locale === "ar" ? cairo.className : inter.className;
  const direction = useTextDirection(locale);
  return (
    <ReactQueryClientProvider>
      <html lang={locale} dir={direction} >
        <body className={`${font}`}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
