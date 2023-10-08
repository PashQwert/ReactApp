import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import MovieListPage from './MovieListPage';

interface MovieInfo {
    budget: number,
    genres: [string],
    id: number,
    overview: string
    poster_path: string
    release_date: string
    revenue: number
    runtime: number
    tagline: string
    title: string
    vote_average: number
    vote_count: number
  }
  
  type resp = {
    totalAmount: number,
    limit: number,
    offset: number,
    data: Array<MovieInfo>
  };

const assetsFetchMock = () => Promise.resolve({
    ok: true,
    status: 200,
    json: async () => {return {
        totalAmount: 1,
        limit: 1,
        offset: 0,
        data: [
            {
                budget: 10,
                genres: ["Comedy"],
                id: 1,
                overview: "",
                poster_path: "",
                release_date: "2010-10-15",
                revenue: 5000,
                runtime: 100,
                tagline: "",
                title: "Scary movie",
                vote_average: 5.3,
                vote_count: 100
            }]
        } as resp }
    } as Response);

let fetchMock: any = undefined;

beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch")
    .mockImplementation(assetsFetchMock);
});

afterEach(() => {
    jest.restoreAllMocks();
});

test('Test that component fetch data and render it', async () => {
    await act(async () => {
        render(<MovieListPage />);
    });
    
    expect(fetchMock).toBeCalledTimes(1);
    
    // expect(fetchMock).toHaveBeenCalledWith(
    //     `http://localhost:4000/movies?limit=5&sortOrder=asc&searchBy=title&sortBy=Title&search=&filter=`
    // )
        
    await waitFor(() => {
        //screen.debug();
        const linkElement = screen.getByText(new RegExp(`Scary movie`));
        expect(linkElement).toBeInTheDocument();
    })

    const linkElement = screen.getByText(new RegExp(`Scary movie`));
    expect(linkElement).toBeInTheDocument();    
});