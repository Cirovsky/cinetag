import Main from 'components/Main'
import React from 'react'
import { useParams } from "react-router-dom";
import styles from './Player.module.css';
import NotFound from 'pages/NotFound';
import { UseVideosContext } from 'common/contexts/videosContext';

export default function Player() {

    const params = useParams();
    const {videos} = UseVideosContext();

    const video = videos.find(video => video.id === Number(params.id));

    if(!video){
        return <NotFound/>
    }

    return (
        <Main title={video.titulo}>
            <section className={styles.videoContainer}>
            <iframe className={styles.iframe}
                src={video.link}
                title={video.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
            </iframe>

        </section>
        </Main>
    )
}
