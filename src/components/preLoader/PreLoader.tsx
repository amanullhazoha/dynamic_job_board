const PreLoader = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500"></div>
      <span className="ml-4 text-green-500 text-sm font-medium">
        Loading...
      </span>
    </div>
  );
};

export default PreLoader;
