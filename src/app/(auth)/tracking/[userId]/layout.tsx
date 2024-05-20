import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../../(general)/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthcare",
  description: "Website theo dõi và chăm sóc sức khỏe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header/>
          {children}
      </body>
    </html>
  );
}
