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

    return <>
        <label className="selectLabel" htmlFor="selectControl">Sort by</label>
        <select className="selectControl" name="selectControl" id="selectControl" onChange={handleOnChange}>
            <option value="Release Date" key="Release Date">Release Date</option>
            <option value="Title" key="Title">Title</option>
        </select>
    </>;
}

export default SortControl;