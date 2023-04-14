import Main from 'components/Main'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styles from './Player.module.css';
import NotFound from 'pages/NotFound';

export default function Player() {

    const params = useParams();
    const [video, setVideo] = useState();
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Cirovsky/cinetag-api/videos?id=${params.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados);
        });
    }, []);

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
