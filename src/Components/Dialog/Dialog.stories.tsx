import type { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';
import { string } from 'prop-types';
import React from 'react';

import MovieForm from '../MovieForm';
import MovieInfo from '../MovieForm';
import { ShowEmptyForm } from '../MovieForm/MovieForm.stories'
import { ShowFilledForm } from '../MovieForm/MovieForm.stories'

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: string,
        children: MovieForm,//{ control: 'text' } ,
        onClose: () => {}
    }
};// satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        title: "Title for dialog",
        children: 'Some text',
    },
};

export const AddMovie: Story = {
    args: {
        title: "Add movie",
        children: React.createElement(
            MovieForm,
            {onSubmint: (movieInfo) => {console.log(movieInfo)}}
        ),
    },
};

export const EditMovie: Story = {
    args: {
        title: "Edit movie",
        children: React.createElement(
            MovieForm,
            {
                onSubmint: (movieInfo) => {console.log(movieInfo)},             
                movieInfo: {
                    title: "Movie name",
                    release: "2023-09-07",
                    url: "https://posters.ru/1235486.png",
                    relevantGenres: ["Comedy"],
                    runtime: 125,
                    rating: 8.5,
                    overview: "A lot of text A lot of text A lot of text A lot of text A lot of text A lot of text A lot of text"
                }
            }
        ),
    },
};

export const DeleteMovie: Story = {
    args: {
        title: "Delete movie",
        children: (<div>
            <p>Are you sure you want to delete this movie?</p>
            <input type='button' value="Confirm" onClick={() => {console.log("Confirmed.")}}/>
        </div>),
    },
};

//attempt to use story
export const AddMovie2: Story = {
    args: {
        title: "Add movie",
        children: (<MovieForm onSubmint={(movieInfo) => {console.log(movieInfo)}}/>),
    },
};

export const EditMovie2: Story = {
    args: {
        title: "Edit movie",
        children: (<MovieForm movieInfo={ShowFilledForm.args?.movieInfo} onSubmint={(movieInfo) => {console.log(movieInfo)}}/>),
    },
};

/* //???
export const Attempt2: Story = {
    render: (args) => (
        <Dialog {...args}>
          <ShowFilledForm {...ShowFilledForm.args} />
        </Dialog>
      ),
    };
*/
