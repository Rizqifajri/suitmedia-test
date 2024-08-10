import React from "react";

const FilterShowPage = ({ totalPage, setTotalPage, totalContent, setSortOption }) => {
  return (
    <div className='container relative flex gap-5 justify-between mx-auto my-10 z-50 '>
      <p className='font-bold text-sm'>
        Showing 1-{totalPage} of {totalContent} 
      </p>
      <div className='flex gap-5'>
        <div className="text-sm">
          Show per page{" "}
          <select
            className='w-24 text-center align-middle px-2 py-1 border-2 rounded-full'
            onChange={(e) => setTotalPage(Number(e.target.value))}
          >
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
          </select>
        </div>
        <div className="text-sm">
          Sort by{" "}
          <select
            className='w-24 text-center align-middle px-2 py-1 border-2 rounded-full'
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value='newest'>Newest</option>
            <option value='oldest'>Oldest</option>
            <option value='a-z'>A-Z</option>
            <option value='z-a'>Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterShowPage;
