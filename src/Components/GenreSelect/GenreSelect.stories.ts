import type { Meta, StoryObj } from '@storybook/react';
import GenreSelect from './GenreSelect';
import { within, userEvent } from '@storybook/testing-library';
import { debug } from 'console';

const genres = ['Genre 1','Genre 2','Genre 3'];

const meta = {
    title: 'Components/GenreSelect',
    component: GenreSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        genres: [],
        selectedGenre: {
            options: genres,
            control: {type: 'select'}
        },
        onSelect: (genre:string):void => {}
    }
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstSelected: Story = {
    args: {    
        genres: genres,
        selectedGenre: genres[0] 
    },
};

export const SecondSelected: Story = {
    args: {    
        genres: genres,
        selectedGenre: genres[1] 
    },
};

export const ClickThirdGenre: Story = {
    args: {    
        genres: genres,
        selectedGenre: genres[0] 
    },
    play:async ({canvasElement}) => {
        const canvas = within(canvasElement);
        const thirdGenre = await canvas.getByText(genres[2]);

        await userEvent.click(thirdGenre);
    }
}