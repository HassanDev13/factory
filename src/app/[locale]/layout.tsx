import type { Metadata } from "next";

import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "../../components/queryClientProvider";
import useTextDirection from "@/components/useTextDirection";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const cairo = Tajawal({weight : "400", subsets: ["arabic"] });
export const metadata: Metadata = {
  title: "Factory",
  description: "In mission to build a community",
};

export default async function RootLayout({
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
      <html lang={locale} dir={direction}>
        <body className={`${font}`}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
