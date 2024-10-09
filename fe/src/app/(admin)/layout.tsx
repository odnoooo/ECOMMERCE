import { AdminHeader } from "@/components/AdminHeader";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}
