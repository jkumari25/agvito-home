import "./globals.css";
import type { Metadata } from "next";
import { Petrona, Roboto, Vollkorn, DM_Sans, PT_Serif } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";
import BackToTop from "@/components/back-to-top";
import Whatsapp from "@/components/Whatsapp";
import Head from "next/head";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   display: "swap",
// });

// latin, latin-ext
// const petrona = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   display: "swap",
// });

const serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "exogenous technology",
      url: "https://newsite.exogenoustechnology.com",
    },
  ],
  creator: "exogenous technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "exogenous technology",
  },
  icons: {
    icon: "/public/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1CXEQ839N0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1CXEQ839N0');
            `,
          }}
        />
        {/* Google Site Verification */}
        {/* <meta
          name="google-site-verification"
          content="7d7foDIrCik1qsBInziyefxKYTc9ebIm7Hs5i9KpDVE"
        /> */}
      </Head>
      <body
        className={`${serif.className} dark:bg-slate-850 dark:text-slate-400`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster richColors />
        <BackToTop />
        {/* <Whatsapp /> */}
      </body>
    </html>
    //    <Html lang="en">
    //    <Head>
    //      {/* Google Tag Manager */}
    //      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1CXEQ839N0"></script>
    //      <script
    //        dangerouslySetInnerHTML={{
    //          __html: `
    //            window.dataLayer = window.dataLayer || [];
    //            function gtag(){dataLayer.push(arguments);}
    //            gtag('js', new Date());
    //            gtag('config', 'G-1CXEQ839N0');
    //          `,
    //        }}
    //      />
    //      {/* Google Site Verification */}
    //      <meta name="google-site-verification" content="7d7foDIrCik1qsBInziyefxKYTc9ebIm7Hs5i9KpDVE" />
    //    </Head>
    //    <body>
    //      {children}
    //    </body>
    //  </Html>
  );
}
