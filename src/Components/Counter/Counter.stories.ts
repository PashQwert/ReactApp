import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';
import { number } from 'prop-types';

const meta = {
    title: 'Components/Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        count: number
    }
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
    args: {
        count: 12,
    },
};