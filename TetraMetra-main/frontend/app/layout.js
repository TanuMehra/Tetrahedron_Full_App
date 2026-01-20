import "@/node_modules/react-modal-video/css/modal-video.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./global.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import ReduxProvider from "./providers/ReduxProvider";
import FloatingButton from "@/components/layout/floating-button";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Tetrahedron",
  description: "Manufacturing Consulting Firm In India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="stylesheet" href="/assets/css/elitecons.css" />
        <link rel="stylesheet" href="/assets/css/elitecons-responsive.css" />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W3SNH6S');
          `}
        </Script>
      </head>
      <body
        className={poppins.className}
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          lineHeight: "1.6",
        }}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3SNH6S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ReduxProvider>{children}</ReduxProvider>
        <FloatingButton />
      </body>
    </html>
  );
}
