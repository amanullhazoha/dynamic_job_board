interface globalPagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const GlobalPagination = ({
  totalItems,
  totalPages,
  currentPage,
  handlePageChange,
}: globalPagination) => {
  return (
    <div className="flex flex-col justify-center items-center mt-2 space-y-4">
      <div className="text-slate-800 dark:text-white">
        Total Items: <span className="font-semibold">{totalItems}</span>
      </div>

      <div className="flex justify-center items-center space-x-4 dark:text-white ">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-green-500 rounded-md hover:bg-green-400 text-white disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-green-500 rounded-md hover:bg-green-400 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GlobalPagination;
