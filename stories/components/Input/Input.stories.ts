/*

Create a story for the input component in this directory

*/

import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
    }
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'Christian',
        label: 'Name',
        placeholder: 'Enter your name'
    },
};
