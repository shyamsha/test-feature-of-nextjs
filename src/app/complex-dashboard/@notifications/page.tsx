import Card from "@/components/Card";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <div>
      <Card>
        Notifications{" "}
        <Link href="/complex-dashboard/archived">View archived</Link>
      </Card>
      {/* Notification list and details go here */}
    </div>
  );
}
