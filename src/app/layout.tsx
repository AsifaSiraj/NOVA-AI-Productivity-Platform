import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOVA — Build Better. Work Smarter.",
  description:
    "NOVA is the AI-powered productivity platform that helps teams manage projects, automate repetitive tasks and collaborate efficiently — all in one place.",
  keywords: [
    "NOVA",
    "AI productivity platform",
    "project management",
    "task automation",
    "team collaboration",
    "workflow automation",
  ],
  authors: [{ name: "NOVA Labs" }],
  openGraph: {
    title: "NOVA — Build Better. Work Smarter.",
    description:
      "The AI-powered productivity platform for modern teams. Manage projects, automate busywork and ship faster.",
    siteName: "NOVA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA — Build Better. Work Smarter.",
    description:
      "The AI-powered productivity platform for modern teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
