import Banner from "../components/Banner.tsx";
import Header from "../components/Header.tsx";
import FrontItem from "../components/MisEnAvant/FrontItem.tsx";
import ProductFront from "../components/ProductFront.tsx";
import ServiceSlide from "../components/service/ServiceSlide.tsx";
import CardModule from "../components/CardModule.tsx";
import HomeAbout from "../components/HomeAbout.tsx";
import {
    TEXTE_COMPTABILITE,
    TEXTE_GESTION_APPROVISIONNEMENT,
    TEXTE_GESTION_DES_STOCK,
    TEXTE_GESTION_PRODUCTION,
    TEXTE_RESSOURCES_HUMAINE
} from "../data/constant.tsx";

const subtext = 'Une solution unifiée pour toute votre entreprise'
const title = 'Reprenez le contrôle avec Lymytz'
const Home = () => {
    return (
        <>
            <Header/>
            <Banner title={title} subText={subtext}/>
            <div className={'bg-blue-900 p-10 flex justify-center'}>
                <p className={'text-4xl text-center text-gray-200 w-[80%]'}>
                    La solution <span className={'text-secondary'}>Lymytz System</span> en quelque mot
                </p>
            </div>
            <div className={'flex justify-center max-w-[1450px] w-full m-auto'}>
                <div className={'flex flex-col-reverse lg:flex-row lg:justify-between w-full lg:gap-12'}>
                    <div className={'flex-1'}>
                        <ProductFront/>
                    </div>
                    <div className={'flex-1 p-10'}>
                        <FrontItem/>
                    </div>
                </div>
            </div>
            <div className={'flex justify-center bg-blue-900 p-12'}>
                <h2 className={'text-4xl text-white font-bold'}>
                    Comment pouvons nous <span className={'text-secondary'}>accélérer</span> votre transformation
                    digitale?</h2>
            </div>
            <div className={'h-100 lg:h-150 flex max-w-[1450px] w-full m-auto'}>
                <ServiceSlide/>
            </div>
            <div className={'flex justify-center bg-blue-900 p-12'}>
                <h2 className={'text-4xl text-white font-bold'}>
                    Qu'est ce que la solution <span className={'text-secondary'}>Lymytz System</span> apporte à votre entreprise?</h2>
            </div>
            <div className={'w-[99%] lg:w-[60%] m-auto bg-orange-100'}>
                <CardModule moduleTitle={'Gestion des stocks'}
                            moduleText={TEXTE_GESTION_DES_STOCK} image={'/images/gallery/ZPP-zP8HYG0.webp'}
                />
                <CardModule moduleTitle={'Gestion des approvisionnement'} invert={true}
                            moduleText={TEXTE_GESTION_APPROVISIONNEMENT} image={'/images/gallery/p-xSl33Wxyc.webp'}
                />
                <CardModule moduleTitle={'Gestion de la production'}
                            moduleText={TEXTE_GESTION_PRODUCTION} image={'/images/gallery/p-xSl33Wxyc.webp'}
                />
                <CardModule moduleTitle={'Ressources humaines'} invert={true}
                            moduleText={TEXTE_RESSOURCES_HUMAINE} image={'/images/gallery/p-xSl33Wxyc.webp'}
                />
                <CardModule moduleTitle={'Comptabilité'}
                            moduleText={TEXTE_COMPTABILITE} image={'/images/gallery/p-xSl33Wxyc.webp'}
                />
            </div>
            <div className={'bg-primary mt-5'}>
                <HomeAbout />
            </div>
        </>
    )
}
export default Home