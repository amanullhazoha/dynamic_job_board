import UserPrivateLayout from "@/components/layouts/UserPrivateLayout";

const UserLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <UserPrivateLayout>{children}</UserPrivateLayout>;
};

export default UserLayout;
