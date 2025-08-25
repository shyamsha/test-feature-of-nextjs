export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{children}</h2>
    </div>
  );
}
