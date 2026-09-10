import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const vazirmatn = localFont({
  src: "../../public/fonts/Vazirmatn/Vazirmatn.ttf",
  variable: "--font-fa",
  display: "swap",
  weight: "100 900",
});

const picopic = localFont({
  src: "../../public/fonts/Picopic/Picopic-Variable.ttf",
  variable: "--font-fa-display",
  display: "swap",
  weight: "100 900",
});

const localeScript = `(function(){try{var s;try{s=localStorage.getItem('velorah-locale')}catch(e){}var c=document.cookie.match(/(?:^|; )velorah-locale=(en|fa)/);var l=c?c[1]:s;if(l!=='fa'&&l!=='en'){try{var tz=Intl.DateTimeFormat().resolvedOptions().timeZone;l=tz==='Asia/Tehran'?'fa':'en'}catch(e){l='en'}}document.documentElement.lang=l;document.documentElement.dir=l==='fa'?'rtl':'ltr'}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Kiyarash Farahani",
  description:
    "Developer from Iran, Making Mobile Applications and Websites",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${inter.variable} ${vazirmatn.variable} ${picopic.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
