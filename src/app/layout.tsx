import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { Toaster } from "sonner";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prism-dash.netlify.app"),
  title: {
    default: "Prism Dash — Enterprise Analytics Dashboard",
    template: "%s | Prism Dash",
  },
  description:
    "Enterprise-grade analytics and operations dashboard. Track revenue, manage customers, monitor orders, and gain insights from real-time data.",
  keywords: [
    "analytics dashboard",
    "enterprise analytics",
    "business intelligence",
    "revenue tracking",
    "customer management",
    "order management",
    "data visualization",
    "operations dashboard",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prism-dash.netlify.app",
    title: "Prism Dash — Enterprise Analytics Dashboard",
    description:
      "Enterprise-grade analytics and operations dashboard with real-time data insights.",
    siteName: "Prism Dash",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Prism Dash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prism Dash — Enterprise Analytics Dashboard",
    description:
      "Enterprise-grade analytics and operations dashboard with real-time data insights.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <Toaster position="top-right" richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
