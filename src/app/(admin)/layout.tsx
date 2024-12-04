import PublicLayout from "@/components/layouts/PublicLayout";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default AdminLayout;
