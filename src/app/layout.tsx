import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "This is my Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
