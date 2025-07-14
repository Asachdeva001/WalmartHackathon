import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/context";
import { Header } from "@/components/Header";
import { AIAssistant } from "@/components/AIAssistant";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "SmartMart - AI-Powered E-Commerce",
  description: "AI-powered e-commerce platform with in-store experience and voice assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <AppProvider>
          <div className="relative min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <AIAssistant />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
