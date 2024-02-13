import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "../globals.css";
import { ReactQueryClientProvider } from "@/components/queryClientProvider";
import useTextDirection from "@/components/useTextDirection";

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
 
  return (
    <ReactQueryClientProvider>
      <main>{children}</main>
    </ReactQueryClientProvider>
  );
}
