export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
        <h2>Product Details</h2>
      </header>
      <div>{children}</div>
      <footer style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
        <p>© 2025 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}
