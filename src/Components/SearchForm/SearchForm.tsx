import React, { ChangeEvent, useState } from "react";
import './SearchForm.css';

const defValue = 'What do you want to watch?'

function SearchForm({initialSearchString='', onSearch=(s:string):void=>{}}): JSX.Element {
    const [searchString, setSearchString] = useState(initialSearchString);

    function searchButtonClick() {
        //console.log('search button clicked');
        onSearch(searchString);
    }

    function inputChanged(event:ChangeEvent<HTMLInputElement>) {
        //console.log('input changed');
        setSearchString(event.currentTarget.value);
    }

    const inputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter'){
            //console.log('enter pressed')
            onSearch(searchString);
        }
    }

    return (
        <p className="searchPanel">
            <input className="searchInput" placeholder={defValue} defaultValue={searchString} 
                onKeyDown={inputKeyDown} 
                onChange={inputChanged}/>
            <button className='searchButton' onClick={searchButtonClick}>
                SEARCH
            </button>
        </p>
    );
}

export default SearchForm;