'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation'

import SongItem from "@/stories/components/SongItem/SongItem";
import Button from "@/stories/components/Button/Button";
import songs from "../data";

import styles from './page.module.css';

export default function List() {
    const router = useRouter();
    const [songList, setSongList] = useState(songs);
    const [selectedSongIds, setSelectedSongIds] = useState<number[]>([]);

    const songItems = songList.map((song: {id: number, title: string }) => {
        return (
            <SongItem 
                key={song.id}
                title={song.title}
            />
        )
    })

    return (
        <div className={styles.listContainer}>
            <h1>All Songs</h1>
            <Button 
                label="Add Song"
                variant="primary"
                onClick={() => {
                    router.push('/add')
                }}
            />
            <div>
                {songItems}
            </div>
        </div>
    )
}