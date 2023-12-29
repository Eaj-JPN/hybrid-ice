import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import PageFooter from "@/components/PageFooter";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

// Local Fonts
const BlairM = localFont({ src: "../fonts/BlairMedium.otf" });

export const metadata: Metadata = {
  title: "HYBRID ICE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          inter.className,
          "overflow-x-hidden relative h-full antialiased"
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          <div
            className={cn(inter.className, "flex flex-grow flex-col flex-1")}
          >
            {children}
          </div>
          <div id="footer">
            <PageFooter />
          </div>
          <ScrollToTopButton />
        </main>
      </body>
    </html>
  );
}
