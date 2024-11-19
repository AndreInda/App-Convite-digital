import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const fonte = Inter({
  subsets:["latim"],
})

export const metadata: Metadata = {
  title: "App convite digital",
  description: "Aplicação para convidar e controlar fluxo de convidados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pr-BR">
      <body
        className={`fonte.className`}
      >
        {children}
      </body>
    </html>
  );
}
