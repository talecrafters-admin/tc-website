import type { Metadata } from "next";
import { Inter, Black_Ops_One, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../styles/neobrutalism.css";
import StructuredDataScript from "@/components/StructuredDataScript";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-black-ops",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://talecrafters.in"),
  title: {
    default:
      "TaleCrafters - Full-Service Digital Agency in Hyderabad | Marketing & Development",
    template: "%s | TaleCrafters",
  },
  description:
    "Full-service digital agency in Hyderabad. We craft stories that convert—from social media to web apps, creative to performance marketing. 25+ happy clients.",
  keywords: [
    "digital agency hyderabad",
    "social media marketing",
    "web development agency",
    "creative agency india",
    "performance marketing",
    "seo agency hyderabad",
    "mobile app development",
    "meta ads",
    "linkedin marketing",
  ],
  authors: [{ name: "TaleCrafters" }],
  creator: "TaleCrafters",
  publisher: "TaleCrafters",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://talecrafters.in",
    title: "TaleCrafters - Full-Service Digital Agency in Hyderabad",
    description:
      "From strategy to execution, social media to web apps—we craft stories that convert. Your growth partner in Hyderabad.",
    siteName: "TaleCrafters",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TaleCrafters - Digital Marketing & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaleCrafters - Full-Service Digital Agency in Hyderabad",
    description:
      "From strategy to execution, social media to web apps—we craft stories that convert. Your growth partner in Hyderabad.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://talecrafters.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${blackOpsOne.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <StructuredDataScript />
      </head>
      <body>
        {children}
        <WhatsAppButton phoneNumber="919876543210" />
      </body>
    </html>
  );
}
