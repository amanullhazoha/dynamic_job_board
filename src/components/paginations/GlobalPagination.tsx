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
    <div className="flex flex-col justify-center items-center mt-6 space-y-4">
      <div className="text-gray-600">
        Total Items: <span className="font-semibold">{totalItems}</span>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GlobalPagination;
