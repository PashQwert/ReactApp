import type { Meta, StoryObj } from '@storybook/react';
import SortControl from './SortControl';
import { within, userEvent, fireEvent } from '@storybook/testing-library';
import { string } from 'prop-types';

const options = ['Release Date','Title'];

const meta = {
    title: 'Components/SortControl',
    component: SortControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        currentSelection: {
            options: options,
            control: {type: 'select'}
        },
        onChange: (s:string) => {}
    }
} satisfies Meta<typeof SortControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedFirstOption: Story = {
    args: {    
        currentSelection: options[0]
    },
};

export const SelectedSecondOption: Story = {
    args: {    
        currentSelection: options[1]
    },
};

export const ChangeSelection: Story = {
    args: {    
        currentSelection: options[0]
    },
    play:async ({canvasElement}) => {
        const canvas = within(canvasElement);

        const firstOption = await canvas.getByDisplayValue(options[0]);
        fireEvent.change(firstOption, { target: { value: options[1] } });
    }
}