import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import ConiqAgent from "@/components/ConiqAgent";

const headingFont = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bal Harbour Shops",
  description:
    "Luxury lifestyle and fashion shopping at Bal Harbour Shops, Miami, Florida.",
  icons: {
    icon: "https://www.balharbourshops.com/wp-content/uploads/2019/07/cropped-favicon-2019-1-e1562352272325-1-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-neutral-100`}
      >
        <div className="mx-auto w-full max-w-[430px] h-[100dvh] flex flex-col overflow-hidden bg-white shadow-2xl">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
          <BottomNav />
        </div>
        <ConiqAgent />
      </body>
    </html>
  );
}
