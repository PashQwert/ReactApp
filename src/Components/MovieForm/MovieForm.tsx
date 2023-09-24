import React, {ChangeEvent, FormEvent, FormEventHandler, useState} from "react";
import './MovieForm.css';
import { debug } from "console";

export interface MovieInfo{
    title: string,
    release: string,

    url: string,
    rating: number,

    relevantGenres: string[],
    runtime: number,

    overview: string
}

interface MovieFormProps {
    movieInfo?: MovieInfo,
    onSubmint: (movieInfo: MovieInfo) => void
    //onSubmint: ({...MovieInfo}) => void
}

const MovieForm = ({movieInfo, onSubmint}:MovieFormProps):React.ReactElement => {
    //const [inputs, setInputs] = useState({...movieInfo});//https://www.w3schools.com/react/react_forms.asp
    const [inputs, setInputs] = useState(movieInfo !== undefined ? movieInfo : {} as MovieInfo);

    const handleSelectChange = (event:ChangeEvent<HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: [value]}))
    }

    const handleAreaChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        // setInputs({
        //     [name]: value
        // });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form) as unknown as Iterable<[MovieInfo, FormDataEntryValue]>;
        const requestData: MovieInfo = Object.fromEntries(formData);
        
        //console.log(inputs);
        onSubmint(requestData);
    };

    return (<form className="movieForm" onSubmit={handleSubmit}>
        <label className="title c-2-3">
            Title
            <input name="title" type="text" onChange={handleInputChange} value={inputs.title}/>
        </label>
        <label className="release c-1-3">
            Release date
            <input name="release" type="date" onChange={handleInputChange} value={inputs.release}/>
        </label>

        <label className="url c-2-3">
            Movie url
            <input name="url" type="text" placeholder="http://" onChange={handleInputChange} value={inputs.url}/>
        </label>
        <label className="rating c-1-3">
            Rating
            <input name="rating" type="text" onChange={handleInputChange} value={inputs.rating}/>
        </label>

        <label className="genre c-2-3">
            Genre
            <select name="genre" onChange={handleSelectChange} value={inputs.relevantGenres}>                
                <option value="Crime">Crime</option>
                <option value="Documentrary">Documentrary</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
            </select>
        </label>
        <label className="runtime c-1-3">
            Runtime
            <input name="runtime" type="text" onChange={handleInputChange} value={inputs.runtime}/>
        </label>

        <label className="overview c-1-1">
            Overview
            <textarea name="overview" onChange={handleAreaChange} value={inputs.overview}/>
        </label>

        <input type="submit" className="submit" value="Submit"/>
        <input type="button" className="reset" value="Reset"/>
    </form>)
}

export default MovieForm;