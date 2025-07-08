import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "BorDev Tech",
  description:
    "Top-notch development services to get you on your feet and ready to go!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr"
          crossOrigin="anonymous"
        />

        <Script id="clarity-analytics" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "saih5kxifd");`}
        </Script>

        <Script id="clarity-config" strategy="afterInteractive">
          {`
            if (typeof clarity !== 'undefined') {
              clarity('set', 'showRecordingStatus', false);
            }
          `}
        </Script>

        <style>{`
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            overflow-y: auto;
            background-color: #212529;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            font-optical-sizing: auto;
          }
          .main-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .hero-section {
            flex: 1;
            display: flex;
            align-items: center;
            min-height: 0;
            padding: 1rem 0;
          }
          footer {
            flex-shrink: 0;
            margin-top: auto;
          }
          .navbar-brand {
            font-weight: 700 !important;
            letter-spacing: -0.025em;
          }
          .btn {
            border-radius: 8px;
            font-weight: 600;
            letter-spacing: 0.025em;
            transition: all 0.2s ease;
          }
          .btn-danger {
            background: linear-gradient(135deg, #dc3545, #c82333);
            border: none;
            box-shadow: 0 4px 14px 0 rgba(220, 53, 69, 0.3);
          }
          .btn-danger:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px 0 rgba(220, 53, 69, 0.4);
          }
          .btn-outline-light:hover, .btn-outline-info:hover {
            transform: translateY(-2px);
          }
          .text-info {
            color: #17a2b8 !important;
          }
          .border-secondary {
            border-color: #495057 !important;
          }
          .container-fluid, .container {
            max-width: 100%;
            overflow-x: hidden;
          }
          h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            letter-spacing: -0.025em;
          }
          @media (max-width: 768px) {
            .display-3 {
              font-size: 2.5rem !important;
            }
            .hero-section {
              padding: 0.5rem 0;
            }
          }
          .display-md-2 {
            font-size: calc(1.375rem + 1.5vw);
          }
          @media (min-width: 768px) {
            .display-md-2 {
              font-size: 2rem;
            }
          }
          @media (min-width: 1200px) {
            .display-md-2 {
              font-size: 3.5rem;
            }
          }
        `}</style>
        <meta name="msvalidate.01" content="E4D7229DE479B098F96B5441BDA3686F" />
      </head>
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
