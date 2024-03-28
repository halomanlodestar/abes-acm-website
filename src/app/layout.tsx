import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/Providers";
import Footer from "@/components/Footer";
import { getRandomGradient } from "@/lib/utils";
import { gradients } from "@/../public/data/bg-colors";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HOME | ABES ACM",
  description: "Official ABES ACM Chapter",
  icons: { icon: "/images/abes-acm.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const index = getRandomGradient(gradients);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/abes-acm.png" />
      </head>
      <body
        style={{
          background: `radial-gradient(${gradients[index].start}, ${gradients[index].end})`,
        }}
        className={inter.className}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
