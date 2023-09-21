import type { Meta, StoryObj } from '@storybook/react';
import MovieDetails from './MovieDetails';
import { within, userEvent } from '@storybook/testing-library';
import image from './PulpFiction.png'

const meta = {
    title: 'Components/MovieDetails',
    component: MovieDetails,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        //movieInfo: MovieDetails
    }
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowMovieInfo: Story = {
    args: {    
        movieInfo: {
            imageUrl: image,
            movieName: 'Pulp Fiction',
            releaseYear: 1994,
            relevantGenres: ['Action & Adventure'],
            duration: 154,
            rating: 8.9,
            description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
        }
    },
};