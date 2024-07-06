import type { Metadata } from "next";
import { Cabin, Roboto, Oxygen } from "next/font/google";
import "./globals.scss";
import { ContextMenuProvider } from "./context/contextMenu";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Guia Online de Empregos - Home",
  description:
    "Procurar emprego agora ficou mais fácil, separamos os melhores sites de empregos para você que está buscando empregos. Para você que está buscando estágio, concursos públicos e dicas incríveis de emprego",
  keywords: "estágio, emprego, vagas de empregos, concurso públicos, júnior",
  icons: {
    icon: ["./logoGuia.png"],
    apple: ["./logoGuia.png"],
    shortcut: ["./logoGuia.png"],
  },
};
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-cabin",
});
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300", "500", "900"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
});
const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-oxygen",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G9TQC20K8L"
        />
        <Script id="script-google">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

            gtag('config', 'G-G9TQC20K8L');
          `}
        </Script>
      </head>
      <body
        className={`${cabin.variable} ${roboto.variable} ${oxygen.variable}`}
      >
        <ContextMenuProvider>{children}</ContextMenuProvider>
      </body>
    </html>
  );
}
