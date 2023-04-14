import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'favoritos'

export default function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);
    console.log(favoritos)

    return (
        <FavoritosContext.Provider
            value={{ favoritos, setFavoritos }}
        >
            {children}
        </FavoritosContext.Provider>
    );
}

export const useFavoritosContext = () => {

    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    function addFavorito(novoFavorito) {
        if (favoritos) {
            const favoritoRepetido = favoritos.map(item => item.id).indexOf(novoFavorito.id);
            console.log(favoritoRepetido);
            const novalista = [...favoritos];

            if (favoritoRepetido === -1) {
                setFavoritos([...novalista, novoFavorito]);
            } else {
                novalista.splice(favoritoRepetido, 1);
                setFavoritos([...novalista]);
            }
        }

    }

    return {
        favoritos,
        addFavorito,
    }
}