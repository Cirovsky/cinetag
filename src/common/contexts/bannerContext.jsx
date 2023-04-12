import { createContext, useContext, useEffect, useState } from "react";
import { useHref, useParams } from "react-router-dom";
import BannerHome from 'assets/imagens/banner-home.png';
import BannerFavoritos from 'assets/imagens/banner-favoritos.png';
import BannerPlayer from 'assets/imagens/banner-player.png';
import Home from "pages/Home";

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
    const href = useHref();
    const [banner, setBanner] = useState(BannerHome);
    return (
        <BannerContext.Provider value={{ href, banner, setBanner }}>
            {children}
        </BannerContext.Provider>
    )
}

export const useBannerContext = () => {
    const { href, banner, setBanner } = useContext(BannerContext);
    const id = useParams().id;
    
    useEffect(() => {
        switch(href){
            case '/':
                setBanner(BannerHome);
                break;
            case '/favoritos':
                setBanner(BannerFavoritos);
                break;
            case `/player/${id}`:
                setBanner(BannerPlayer);
                break;
        }
    },[href, banner, setBanner]);
    return {
        banner
    }
}

