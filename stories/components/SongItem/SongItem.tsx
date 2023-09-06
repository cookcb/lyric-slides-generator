import React from 'react';
import Button from '../Button/Button';
import './SongItem.css';

interface SongItemProps {
    title: string;
    songId: number;
}

export default function SongItem({
    title,
    songId
}: SongItemProps){
    return (
        <div className="song-item-container">
            <h1 className="song-item-label">{title}</h1>
            <div className="song-item-buttons">
                <Button 
                    label="Select Song"
                    variant="success"
                    onClick={() => alert(`Selected ${title} with id ${songId}`)}
                />
                <Button 
                    label="Edit Song"
                    variant="success"
                    onClick={() => alert(`Selected ${title} with id ${songId}`)}
                />
                <Button 
                    label="Delete Song"
                    variant="danger"
                    onClick={() => alert(`Deleted ${title} with id ${songId}`)}
                />
            </div>
        </div>
    )
}

