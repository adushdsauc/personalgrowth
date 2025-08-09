import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Personal Growth OS",
  description: "Login-ready Next.js base with NextAuth v5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
