import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({id, cover, title}) {
    return (
        <div>
            <Link to={`/player/${id}`} >
                <img src={cover} alt={'capa do vídeo'}/>
                <h3>{title}</h3>
            </Link>
        </div>
    )
}
