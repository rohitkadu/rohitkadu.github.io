
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitkadu.github.io"),
  title: "Rohit Kadu | Software Engineer",
  description:
    "Rohit Kadu — Software Engineer passionate about AI, secure application development, scalable systems, and thoughtful engineering.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Rohit Kadu | Software Engineer",
    description:
      "Curious soul, passionate about AI. Building secure, scalable, and reliable applications.",
    url: "https://rohitkadu.github.io",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
