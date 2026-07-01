import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vastrainstitute.website"),
  alternates: {
    canonical: "/",
  },
  title: "Vastra Institute | Textile & Apparel Design Academy",
  description: "Vastra Institute is a premier textile and apparel design academy founded by Sagar Bansu (5+ years industry experience), offering professional saree design, repeat pattern development, and fabric printing training.",
  keywords: "Vastra Institute, Sagar Bansu, Textile Design Academy, Apparel Design, Saree Design, Allover Design, Fabric Printing Training, Screen Printing Course, Textile Design Portfolio, Fashion Design Course, Textile Design India",
  authors: [{ name: "Sagar Bansu" }],
  creator: "Sagar Bansu",
  publisher: "Sagar Bansu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Vastra Institute | Textile & Apparel Design Academy",
    description: "Learn saree design, repeat pattern development, and commercial screen printing under the guidance of industry expert Sagar Bansu.",
    url: "https://vastrainstitute.website",
    siteName: "Vastra Institute",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastra Institute | Textile & Apparel Design Academy",
    description: "Learn saree design, repeat pattern development, and commercial screen printing under the guidance of industry expert Sagar Bansu.",
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none" suppressHydrationWarning>
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'}/>
    </html>
  );
}
