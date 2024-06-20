import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/provider";
import StarsCanvas from "@/components/StarsCanvas";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayshen's Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StarsCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
