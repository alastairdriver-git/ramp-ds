import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono, Inter, Fraunces, Space_Grotesk, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { LenisProvider } from "@/components/lenis-provider";
import { AuthProvider } from "@/components/auth-provider";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Ramp Design System",
    template: "%s | Ramp Design System",
  },
  description: "A collection of reusable React components, design tokens, and guidelines for building consistent, accessible interfaces.",
  keywords: ["react", "components", "ui", "design-system", "ramp", "tailwindcss", "radix-ui"],
  authors: [{ name: "Ramp" }],
  creator: "Ramp",
  publisher: "Ramp",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramp-ds.vercel.app",
    siteName: "Ramp Design System",
    title: "Ramp Design System",
    description: "A collection of reusable React components, design tokens, and guidelines for building consistent, accessible interfaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramp Design System",
    description: "Reusable React components and design tokens.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          satoshi.variable,
          jetbrainsMono.variable,
          inter.variable,
          fraunces.variable,
          spaceGrotesk.variable,
          plusJakartaSans.variable,
          outfit.variable
        )}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            <LenisProvider>
              {children}
            </LenisProvider>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
