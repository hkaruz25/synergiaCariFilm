import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";

export const metadata = {
  title:
    "Template Next.js (Canary Version), Prisma, Cloudflare R2 | Devscale ID",
  description:
    "Template Project Next.js (Canary Version), Prisma, Cloudflare R2 for Devscale ID",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
