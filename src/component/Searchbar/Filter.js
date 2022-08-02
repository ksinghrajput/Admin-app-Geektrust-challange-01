import React from 'react';
import './Filter.css'

const Filter = (props) => {
    const handleSearchEvent = (event) => {
        props.onFilterChange(event.target.value);
    }

    return (
        <div className='search-bar'>
            <input type="text" placeholder='Search by name email or role' onChange={handleSearchEvent} />
        </div>
    );
}

export default Filter;
