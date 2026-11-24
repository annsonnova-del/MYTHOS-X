import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MYTHOS X — Dark Intelligence OS",
  description: "A privacy-minded AI and cybersecurity learning workspace for defensive research, coding, and safe cyber labs.",
  applicationName: "MYTHOS X",
  keywords: ["AI", "cybersecurity", "ethical hacking", "OSINT", "developer tools"],
  icons: { icon: "/mythos-mark.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}