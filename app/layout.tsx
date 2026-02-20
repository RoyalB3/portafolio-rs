import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/ui/hoc/provider";
import ResponsiveNav from "@/components/ui/home/navbar/responsiveNav";

const font = Inter({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:["latin"]
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FullStack Dev Richard Sequera",
  description: "Portafolio Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Provider>
          <ResponsiveNav/>
          {children}
        </Provider>   
      </body>
    </html>
  );
}
