'use client';

import Button from "@/stories/components/Button/Button";
import Textarea from "@/stories/components/Textarea/Textarea";

import styles from './page.module.css';

export default function Add() {
    const handleSubmit = () => {
        alert('Clicked Button')
    }
    
    return (
        <div className={styles.backgroundDefault}>
            <h1>Add Lyrics</h1>
            <p>Add the title and lyrics for the song of your choosing here</p>
            <Textarea 
                label="Lyrics" 
                value="" 
                placeholder="Enter lyrics here" />
            <Button 
                label="Add Lyrics" 
                variant="success"
                onClick={handleSubmit} />
        </div>
    )
}