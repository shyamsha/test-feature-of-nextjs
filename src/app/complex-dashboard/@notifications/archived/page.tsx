import Link from "next/link";

export default function ArchivedNotificationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Archived Notifications</h1>
      <Link href="/complex-dashboard/">View default notifications</Link>
    </div>
  );
}
