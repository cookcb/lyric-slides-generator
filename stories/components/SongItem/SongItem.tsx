import React from 'react';
import Button from '../Button/Button';
import './SongItem.css';

type SongItemProps = {
    title: string;
}

export default function SongItem({
    title,
}: SongItemProps){
    return (
        <div className="song-item-container">
            <h1 className="song-item-label">{title}</h1>
            <div className="song-item-buttons">
                <Button 
                    label="Select Song"
                    variant="success"
                    onClick={() => alert(`Selected ${title}`)}
                />
                <Button 
                    label="Edit Song"
                    variant="success"
                    onClick={() => alert(`Selected ${title}`)}
                />
                <Button 
                    label="Delete Song"
                    variant="danger"
                    onClick={() => alert(`Deleted ${title}`)}
                />
            </div>
        </div>
    )
}

