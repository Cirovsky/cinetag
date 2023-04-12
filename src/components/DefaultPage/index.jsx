import {BannerProvider } from 'common/contexts/bannerContext'
import Banner from 'components/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefautPage() {
    return (
        <BannerProvider>
            <Banner/>
            <Outlet/>
        </BannerProvider>
    )
}
