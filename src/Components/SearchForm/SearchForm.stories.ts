import type { Meta, StoryObj } from '@storybook/react';
import SearchForm from './SearchForm';
import { string } from 'prop-types';

const meta = {
    title: 'Components/SearchForm',
    component: SearchForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        initialSearchString: string,
        onSearch: (s: string):void => {}
    }
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyInitialString: Story = {
    args: {    
        initialSearchString: ''
    },
};

export const ExistsInitialString: Story = {
    args: {    
        initialSearchString: 'Some text for search'
    },
};