/*
    Create a story for the SongItem component in this directory

    The SongItem component should have the following interface
    - title: string
*/

import type { Meta, StoryObj } from '@storybook/react';

import SongItem from './SongItem';

const meta = {
    title: 'Components/SongItem',
    component: SongItem,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
        }
    }
} as Meta<typeof SongItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Song Title',
        songId: 3
    }
}