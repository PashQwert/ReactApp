import React, { ChangeEvent, useState } from "react";
import './SearchForm.css';

const defValue = 'What do you want to watch?'

//function SearchForm(props:any): JSX.Element {
function SearchForm({initialSearchString='', onSearch=(s:string):void=>{}}): JSX.Element {
    const [searchString, setSearchString] = useState(initialSearchString);

    function handleSearchButtonClick() {
        //console.log('search button clicked');
        onSearch(searchString);
    }

    function handleInputChanged(event:ChangeEvent<HTMLInputElement>) {
        //console.log('input changed');
        setSearchString(event.currentTarget.value);
    }

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter'){
            //console.log('enter pressed')
            onSearch(searchString);
        }
    }

    return (
        <p className="searchPanel">
            <input className="searchInput" placeholder={defValue} defaultValue={searchString} 
                onKeyDown={handleInputKeyDown} 
                onChange={handleInputChanged}/>
            <button className='searchButton' onClick={handleSearchButtonClick}>
                SEARCH
            </button>
        </p>
    );
}

export default SearchForm;