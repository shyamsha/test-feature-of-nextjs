export default function DashboardLayout({
  children,
  users,
  notifications,
  analytics,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <div className="col-span-1">{children}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">{users}</div>
        <div className="col-span-1">{notifications}</div>
        <div className="col-span-1">{analytics}</div>
      </div>
    </div>
  );
}
