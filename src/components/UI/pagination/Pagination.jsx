import React from 'react';
import {usePagination} from '../../../hooks/usePagination';

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArrays = usePagination(totalPages);
  return (
    <div className={'page_wrapper'}>
      {pagesArrays.map(p => (
        <span key={p} onClick={() => changePage(p)} className={page === p ? 'page page__current' : 'page'}>
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
