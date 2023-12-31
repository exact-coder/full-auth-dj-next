import { Footer, Navbar } from "@/components/common";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Provider from '@/redux/provider';
import { Setup } from "@/components/utils";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Auth API",
  description: "Full Auth Application Used Django,Djoser,NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} bg-black text-white`}>
        <Provider>
          <Setup/>
          <Navbar />
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
