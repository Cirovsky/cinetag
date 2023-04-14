import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { MdFavorite as FavOn, MdOutlineFavoriteBorder as FavOff } from 'react-icons/md';
import { useFavoritosContext } from 'common/contexts/favoritos';


export default function Card(card) {

    const { id, capa, titulo } = card;

    const { favoritos, addFavorito } = useFavoritosContext();

    const fav = favoritos.some(video => video.id === id);

    const displayFav = fav ? <FavOn /> : <FavOff />;

    return (
        <div className={styles.card} >
            <div className={styles.cardContainer}>
                <Link to={`/player/${id}`} >
                    <img src={capa} alt={'capa do vídeo'} />
                    <h3>{titulo}</h3>
                </Link>
            </div>

            <div
                onClick={() => {
                    addFavorito(card);
                }}
                className={styles.fav}>{displayFav}</div>
        </div>
    )
}
