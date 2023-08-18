/*
    Create a story for the Button component in this directory
*/

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
        },
        variant: {
            control: 'select',
            options: [
                'default', 
                'success', 
                'danger'
            ]
        }
    }
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Button',
        variant: 'default'
    }
}