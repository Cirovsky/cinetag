import Card from "components/Card";
import styles from "./Cards.module.css";
import { useHref } from "react-router-dom";
import { useFavoritosContext } from "common/contexts/favoritos";
import { useEffect, useState } from "react";

export default function Cards() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Cirovsky/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        });
    }, [])

    const href = useHref();
    const {favoritos} = useFavoritosContext();

    const cards = href==='/favoritos'? 
        favoritos.length > 0 ? favoritos.map(video => <Card {...video} key={video.id}/>) : <></>
        :videos.map(video => <Card {...video} key={video.id}/>)
    console.log(href)
    return (
        <section className={`${styles.cards} ${href === '/favoritos' ? styles.favoritos: ''}`}>
            {cards}
        </section>
    )
}
