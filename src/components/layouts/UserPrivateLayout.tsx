import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const UserPrivateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const accessToken: string | undefined = Cookies.get("access_token");
  const user: any = accessToken && jwtDecode(accessToken);

  return (
    <div className="grid grid-cols-12 gap-6 py-2">
      <div className="col-span-12 lg:col-span-3">
        <div className="shadow-section rounded-md px-5 py-6 dark:bg-slate-800">
          <div className="flex justify-center">
            <div className="w-[150px] h-[150px] rounded-full bg-black shadow-md"></div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <p className="text-center text-3xl font-semibold text-slate-800 dark:text-white mb-1">
              Amanullha Zoha
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
