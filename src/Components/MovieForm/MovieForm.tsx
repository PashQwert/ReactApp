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
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form) as unknown as Iterable<[MovieInfo, FormDataEntryValue]>;
        const requestData: MovieInfo = Object.fromEntries(formData);
        
        onSubmint(requestData);
    };

    return (<form className="movieForm" onSubmit={handleSubmit}>
        <label className="title c-2-3">
            Title
            <input name="title" type="text" value={movieInfo?.title}/>
        </label>
        <label className="release c-1-3">
            Release date
            <input name="release" type="date" value={movieInfo?.release}/>
        </label>

        <label className="url c-2-3">
            Movie url
            <input name="url" type="text" placeholder="http://" value={movieInfo?.url}/>
        </label>
        <label className="rating c-1-3">
            Rating
            <input name="rating" type="text" value={movieInfo?.rating}/>
        </label>

        <label className="genre c-2-3">
            Genre
            <select name="genre" value={movieInfo?.relevantGenres}>                
                <option value="Crime" key="Crime">Crime</option>
                <option value="Documentrary" key="Documentrary">Documentrary</option>
                <option value="Horror" key="Horror">Horror</option>
                <option value="Comedy" key="Comedy">Comedy</option>
            </select>
        </label>
        <label className="runtime c-1-3">
            Runtime
            <input name="runtime" type="text" value={movieInfo?.runtime}/>
        </label>

        <label className="overview c-1-1">
            Overview
            <textarea name="overview" value={movieInfo?.overview}/>
        </label>

        <input type="submit" className="submit" value="Submit"/>
        <input type="button" className="reset" value="Reset"/>
    </form>)
}

export default MovieForm;