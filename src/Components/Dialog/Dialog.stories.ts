import type { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';
import { string } from 'prop-types';
import React from 'react';

const options = ['Release Date','Title'];

const meta = {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: string,
        children: { control: 'text' } ,
        onClose: () => {}
    }
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowData: Story = {
    args: {
        title: "Title for dialog",
        children: 'Some text',
    },
};