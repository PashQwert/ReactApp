import type { Meta, StoryObj } from '@storybook/react';
import MovieForm, {MovieInfo} from './MovieForm';
import { string } from 'prop-types';

const meta = {
    title: 'Components/MovieForm',
    component: MovieForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        movieInfo:MovieForm,
        //onSubmint:()=>{}
        //onSubmint: (movieInfo:MovieInfo) => {console.log(movieInfo.toString())}
    }
} satisfies Meta<typeof MovieForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowEmptyForm: Story = {
    args: {
    },
};

export const ShowFilledForm: Story = {
    args: {
        movieInfo: {
            title: "Movie name",
            release: "2023-09-07",
            url: "https://posters.ru/1235486.png",
            relevantGenres: ["Comedy"],
            runtime: 125,
            rating: 8.5,
            overview: "A lot of text A lot of text A lot of text A lot of text A lot of text A lot of text A lot of text"
        }
    },
};