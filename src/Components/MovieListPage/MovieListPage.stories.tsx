import type { Meta, StoryObj } from '@storybook/react';
import MovieListPage from './MovieListPage';
import { string } from 'prop-types';
import React from 'react';

const meta: Meta<typeof MovieListPage> = {
    title: 'Components/MovieListPage',
    component: MovieListPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Initial: Story = {
    args: {   
    },
};