import React, { ChangeEvent, useState } from "react";
import './SearchForm.css';

const defValue = 'What do you want to watch?'

interface SearchFormProps {
    initialSearchString: string;
    onSearch: (s: string) => void;
}

const SearchForm = ({initialSearchString, onSearch}:SearchFormProps): React.ReactElement => {
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
        <p className="searchForm_box">
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