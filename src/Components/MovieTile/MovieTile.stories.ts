import type { Meta, StoryObj } from '@storybook/react';
import MovieTile from './MovieTile';
import { within, userEvent } from '@storybook/testing-library';
import logo from '../../logo.svg'

const meta = {
    title: 'Components/MovieTile',
    component: MovieTile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        movieInfo: MovieTile,
        onClick: (s:string):void => {}
    }
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowMovieInfo: Story = {
    args: {    
        movieInfo: {
            imageUrl: logo,
            movieName: 'Movie name',
            releaseYear: 2023,
            relevantGenres: ['Genre 1', 'Genre 2', 'Genre 3']
        }
    },
};

export const ClickTile: Story = {
    args: {     
        movieInfo: {
            imageUrl: logo,
            movieName: 'Movie name',
            releaseYear: 2023,
            relevantGenres: ['Genre 1', 'Genre 2', 'Genre 3']
        } 
    },
    play:async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const tile = await canvas.getByAltText('Movie name');

        await userEvent.click(tile);
    }
}