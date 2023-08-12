import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text' },
        label: { control: 'text' },
    }
} as Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'Hello, world!',
        label: 'Lyrics Text'
    },
};