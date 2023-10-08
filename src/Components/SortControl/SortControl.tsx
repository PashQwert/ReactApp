import React, {ChangeEvent} from "react";
import './SortControl.css';

interface SortControlProps {
    currentSelection: string,
    onChange: (s:string) => void
}

function  SortControl({currentSelection, onChange}:SortControlProps): React.ReactElement {    
    function handleOnChange(event:ChangeEvent<HTMLSelectElement>) {
        //console.log('input changed');
        onChange(event.currentTarget.value);
    }

    return <div className="sortControl_box">
        <label className="selectLabel" htmlFor="selectControl">Sort by</label>
        <select className="selectControl" name="selectControl" id="selectControl" onChange={handleOnChange}>
            <option value="release_date" key="Release Date">Release Date</option>
            <option value="title" key="Title">Title</option>
        </select>
    </div>;
}

export default SortControl;