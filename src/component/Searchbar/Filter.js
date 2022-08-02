import React from 'react';
import './Filter.css'

const Filter = () => {
    const handleSearchEvent = (event) => {
        console.log(event);
    }

    return (
        <div className='search-bar'>
            <input type="text" placeholder='Search by name email or role' onChange={handleSearchEvent} />
        </div>
    );
}

export default Filter;
