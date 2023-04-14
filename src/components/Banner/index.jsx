import { useBannerContext } from 'common/contexts/bannerContext'
import styles from './Banner.module.css';

export default function Banner() {
    const {banner} = useBannerContext();

    return (
        <section 
        className={`${styles[banner.classBanner]} ${styles.banner}`}
        style={{backgroundImage: `url('${banner.image}')`}}
        >
        </section>
    )
}
