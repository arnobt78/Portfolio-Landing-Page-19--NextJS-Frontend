import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

// Next.js font optimization: Inter is loaded and exposed as CSS variable for use in Tailwind
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Base URL for metadata (Open Graph, sitemap); update when deploying to your own domain
const siteUrl = "https://portfolio-ui-19.vercel.app";

// SEO metadata: used by search engines and social shares (title template applies to nested pages)
export const metadata = {
  title: {
    template: "%s | John Doe's Portfolio",
    default: "John Doe's Portfolio",
  },
  description:
    "A unique creative portfolio designed by John Doe with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Check out JohnDoe on YouTube.",
  authors: [
    { name: "Arnob Mahmud", url: "https://www.arnobmahmud.com" },
  ],
  // Contact: contact@arnobmahmud.com
  keywords: [
    "John Doe",
    "portfolio",
    "Next.js",
    "Tailwind CSS",
    "Three.js",
    "Framer Motion",
    "web development",
    "React",
    "creative portfolio",
    "developer portfolio",
  ],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "John Doe's Portfolio",
    title: "John Doe's Portfolio",
    description:
      "A unique creative portfolio with Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience modern web development.",
    images: [
      {
        url: "/background/home-background.png",
        width: 1200,
        height: 630,
        alt: "John Doe's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe's Portfolio",
    description:
      "A unique creative portfolio with Next.js, Tailwind CSS, Three.js, and Framer Motion.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Root layout wraps every page; global UI (fireflies, sound, modal portal) lives here
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter",
        )}
      >
        {children}
        {/* Ambient effects and sound control; rendered on all pages */}
        <FireFliesBackground />
        <Sound />
        {/* Portal target for the music-consent modal (see Sound.jsx) */}
        <div id="my-modal" />
      </body>
    </html>
  );
}
