import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Pagination from './Pagination';
import image from '../assets/cat.jpg';
import FilterShowPage from './FilterShowPage';

const ListPost = () => {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [totalPages, setTotalPages] = useState(5);
  const [totalContent, setTotalContent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
          params: {
            'page[number]': currentPage,
            'page[size]': itemsPerPage,
            'append[]': ['small_image', 'medium_image'],
            sort: '-published_at',
          },
          headers: {
            Accept: 'application/json',
          },
        });

        setContent(response.data.data);
        setTotalPages(response.data.meta.pagination.last_page);
        setTotalContent(response.data.meta.pagination.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage, itemsPerPage]);

  return (
    <section className='relative container mx-auto z-20'>
      <FilterShowPage totalPage={itemsPerPage} setTotalPage={setItemsPerPage} totalContent={totalContent} />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full mx-auto'>
        {content.map((data) => (
          <div
            className='flex flex-col w-[300px] h-full cursor-pointer p-2 rounded-lg shadow-xl mx-auto'
            key={data.id}
          >
            <img
              className='object-cover transition-transform duration-300 ease-in-out hover:scale-105 w-[300px] h-[200px] rounded-t-lg'
              src={image}
              alt='image'
              loading='lazy'
            />
            <div className='p-5'>
              <p className='text-sm mt-5'>
                {format(new Date(data.published_at), 'd MMMM yyyy')}
              </p>
              <h1 className='text-xl font-bold text-black text-ellipsis-2'>
                {data.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Pagination 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};

export default ListPost;
