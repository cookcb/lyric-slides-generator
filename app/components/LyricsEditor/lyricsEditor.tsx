/*
    Create a react component that will display a text area to show and edit lyrics.
    The component should have a h1 at the top that just says "Lyrics Editor"

    Add in a prop to provide to the component called "lyrics" that will be a string.
*/

import React from 'react';
import { AppProps } from 'next/app';


export default function LyricsEditor({ ...props }) {
    return (
        <div>
            <h1>Lyrics Editor</h1>
            <textarea>
                {props.lyrics}
            </textarea>
        </div>
    )
}
