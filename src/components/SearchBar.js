import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='col col-sm-4'>
            <input className='form-control' placeholder='Click' value={props.value}
            onChange={ (event) => props.setSearchValue(event.target.value)}
            />
        </div>
    )
}

export default SearchBar;