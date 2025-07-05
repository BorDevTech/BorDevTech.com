import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BorDev Tech",
  description: "Top-notch development services to get you on your feet and ready to go!",
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
        <style>{`
          body {
            background-color: #212529;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .navbar-brand {
            font-weight: bold !important;
          }
          .border-secondary {
            border-color: #495057 !important;
          }
        `}</style>
      </head>
      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
