import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotificationsPage() {
  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">Archived Notifications</h1>
      <Link href="/complex-dashboard/">View default notifications</Link>
    </Card>
  );
}
