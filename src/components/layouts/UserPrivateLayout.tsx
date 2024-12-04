const UserPrivateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-12 gap-6 py-2">
      <div className="col-span-12 md:col-span-3">
        <div className="shadow-lg rounded-md px-4 py-5 dark:bg-slate-800">
          <div className="flex justify-center">
            <div className="w-[150px] h-[150px] rounded-full bg-black shadow-md"></div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <p className="text-center text-2xl font-semibold text-slate-800 dark:text-white mb-1">
              Amanullha Zoha
            </p>

            <p className="text-base font-semibold text-slate-800 dark:text-white">
              Member 18 Dec 2023
            </p>

            <p className="text-base font-semibold text-slate-800 dark:text-white">
              Job Post 105
            </p>

            <p className="text-base font-semibold text-slate-800 dark:text-white">
              Job Apply 10
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-9">{children}</div>
    </div>
  );
};

export default UserPrivateLayout;
