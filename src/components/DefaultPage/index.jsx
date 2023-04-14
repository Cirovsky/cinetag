import { BannerProvider } from 'common/contexts/bannerContext';
import FavoritosProvider from 'common/contexts/favoritos';
import { VideosProvider } from 'common/contexts/videosContext';
import Banner from 'components/Banner';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DefautPage() {
    return (
        <>
            <BannerProvider>
                <Banner />
            </BannerProvider>
            <VideosProvider>
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
            </VideosProvider>

        </>

    )
}
