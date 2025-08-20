export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
        <h1>Authentication</h1>
      </header>
      <div>{children}</div>
      <footer style={{ backgroundColor: "lightblue", padding: "1rem" }}>
        <p>© 2025 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}
