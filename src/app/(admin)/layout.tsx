import AdminLayout from "@/components/layouts/AdminLayout";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default Layout;
