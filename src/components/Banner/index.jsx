import { useBannerContext } from 'common/contexts/bannerContext'
import React from 'react'

export default function Banner() {
    const {banner} = useBannerContext();
    return (
        <section>
            <img src={banner}/>
        </section>
    )
}
