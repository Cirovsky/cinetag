import { createContext, useContext, useEffect, useState } from "react";
import { useHref, useParams } from "react-router-dom";
import BannerHome from '/imagens/banner-home.png';
import BannerFavoritos from '/imagens/banner-favoritos.png';
import BannerPlayer from '/imagens/banner-player.png';

export const BannerContext = createContext();

BannerContext.displayName = "banner"

export const BannerProvider = ({ children }) => {
    const href = useHref();
    const [banner, setBanner] = useState({});
    return (
        <BannerContext.Provider value={{ href, banner, setBanner, }}>
            {children}
        </BannerContext.Provider>
    )
}

export const useBannerContext = () => {
    const { href, banner, setBanner } = useContext(BannerContext);
    const id = useParams().id;

    function bannerObserver(){
        switch(href){
            case '/':
                setBanner({image: BannerHome, classBanner: "bannerHome"});
                break;
            case '/favoritos':
                setBanner({image: BannerFavoritos, classBanner: "bannerFavorito"});
                break;
            case `/player/${id}`:
                setBanner({image: BannerPlayer, classBanner: "bannerPlayer"});
                break;
            default:
                setBanner({image: BannerHome, classBanner: "wherever"});
                break;
        }
    }
    
    useEffect(() => {
        bannerObserver();
    },[href, banner.image, banner.classBanner]);
    return {
        banner,
    }
}

