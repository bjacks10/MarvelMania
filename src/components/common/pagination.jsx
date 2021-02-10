import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'; //underscore

const Pagination = props => {
    const{ itemsCount, pageSize, currentPage, onPageChange} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1,pagesCount+1);

//[1...pagesCount], map()
    return <nav>
        <ul className="pagination">
            {pages.map(page => (
            <li key={page} 
            className={page === currentPage ? 'page-item active' : 'page-item'}>
               <a style={page === currentPage ? {backgroundColor:"#e3e0e0", borderColor: "black", color:"black", width:"50px", textAlign:"center"} : {backgroundColor:"white", color:"black", width:"50px", textAlign:"center"}}  className="page-link" onClick={() => onPageChange(page)}>{page}</a>
            </li>
           ))}
        </ul>
    </nav>
};
 
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;