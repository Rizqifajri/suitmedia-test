import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-orange-500 text-white' : 'bg-transparent text-gray-700'}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center py-24 space-x-2">
      <button
        className={`px-2 py-1 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'}`}
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      <button
        className={`px-2 py-1 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'}`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lsaquo;
      </button>
      {renderPageNumbers()}
      <button
        className={`px-2 py-1 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'}`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &rsaquo;
      </button>
      <button
        className={`px-2 py-1 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'}`}
        onClick={() => handleClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
