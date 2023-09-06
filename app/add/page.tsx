'use client';
import { useState } from "react";

import Button from "@/stories/components/Button/Button";
import Textarea from "@/stories/components/Textarea/Textarea";

import styles from './page.module.css';
import Input from "@/stories/components/Input/Input";

export default function Add() {
    const [title, setTitle] = useState<string>('')
    const [lyrics, setLyrics] = useState<string>('')

    const handleSubmit = async () => {
        fetch('http://127.0.0.1:5000/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                lyrics: lyrics
            })
        })
        .then(res => res.json())
        .then(data => {
            alert('Song was successfully added')
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        setTitle(e.target.value);
        console.log(title);
    }

    const onChangeLyrics = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLyrics(e.target.value);
        console.log(lyrics);
    }
    
    return (
        <div className={styles.backgroundDefault}>
            <h1>Add Lyrics</h1>
            <p>Add the title and lyrics for the song of your choosing here</p>
            <div>
                <Input 
                    label="Title"
                    value={title}
                    placeholder="Enter title here" 
                    onChange={(e) => onChangeTitle(e)} />
                <Textarea 
                    label="Lyrics" 
                    value={lyrics} 
                    placeholder="Enter lyrics here"
                    onChange={(e) => onChangeLyrics(e)} />
            </div>
            <Button 
                label="Add Lyrics" 
                variant="success"
                onClick={handleSubmit} />
        </div>
    )
}