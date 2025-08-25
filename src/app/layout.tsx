import type { Metadata } from "next";
import React from "react";
import "./golbal.css";

export const metadata: Metadata = {
  title: {
    // absolute: "",// no need of absolute title
    default: "Next.js App",
    template: "%s - Next.js App",
  },
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
        <header style={{ backgroundColor: "lightcoral", padding: "1rem" }}>
          <h1>Welcome to My Next.js App</h1>
        </header>
        <div>{children}</div>
        <footer style={{ backgroundColor: "lightcoral", padding: "1rem" }}>
          <p>© 2025 My Next.js App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
