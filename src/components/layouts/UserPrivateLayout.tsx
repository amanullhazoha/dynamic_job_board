"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

const UserPrivateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useContext must be used within an AuthContextProvider");
  }

  const { user } = authContext;

  return (
    <div className="grid grid-cols-12 gap-6 py-2">
      <div className="col-span-12 lg:col-span-3">
        <div className="shadow-section rounded-md px-5 py-6 dark:bg-slate-800">
          <div className="flex justify-center">
            <div className="w-[150px] h-[150px] rounded-full bg-black shadow-md"></div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <p className="text-center text-3xl font-semibold text-slate-800 dark:text-white mb-1">
              {user?.fullName}
            </p>

            <div className="flex justify-between">
              <p className="text-base font-semibold text-slate-600 dark:text-white">
                Member
              </p>

              <p className="text-base font-semibold text-slate-600 dark:text-white">
                18 Dec 2023
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-base font-semibold text-slate-600 dark:text-white">
                Total Job Post
              </p>

              <p className="text-base font-semibold text-slate-600 dark:text-white">
                100
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-base font-semibold text-slate-600 dark:text-white">
                Total Job Apply
              </p>

              <p className="text-base font-semibold text-slate-600 dark:text-white">
                10
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-9">{children}</div>
    </div>
  );
};

export default UserPrivateLayout;
