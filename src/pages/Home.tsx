import Banner from "../components/Banner.tsx";
import Header from "../components/Header.tsx";
import FrontItem from "../components/MisEnAvant/FrontItem.tsx";
import ProductFront from "../components/ProductFront.tsx";
import ServiceSlide from "../components/service/ServiceSlide.tsx";
import CardModule from "../components/CardModule.tsx";
import HomeAbout from "../components/HomeAbout.tsx";

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
                <div className={'flex justify-between w-full gap-12'}>
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
            <div className={'h-150 flex max-w-[1450px] w-full m-auto'}>
                <ServiceSlide/>
            </div>
            <div className={'flex justify-center bg-blue-900 p-12'}>
                <h2 className={'text-4xl text-white font-bold'}>
                    Qu'est ce que la solution <span className={'text-secondary'}>Lymytz System</span> apporte à votre entreprise?</h2>
            </div>
            <div className={'w-[60%] m-auto bg-orange-100'}>
                <CardModule moduleTitle={'Gestion des stocks'}
                            moduleText={'Vous cherchez un endroit où vous pouvez libérer votre créativité et prendre des initiatives, avec le soutien d\'experts en technologie ?\n' +
                                '\n' +
                                'Rejoignez-nous dans cette aventure où chaque idée compte et où chaque talent s\'exprime.'} image={'/images/gallery/ZPP-zP8HYG0.webp'}
                />
                <CardModule moduleTitle={'Gestion des approvisionnement'} invert={true}
                            moduleText={'Content'} image={'/images/gallery/p-xSl33Wxyc.webp'}
                />
                <CardModule moduleTitle={'Gestion de la production'}
                            moduleText={'Content'} image={'/images/gallery/p-xSl33Wxyc.webp'}
                />
                <CardModule moduleTitle={'Ressources humaines & gestion de la paie'} invert={true}
                            moduleText={'Content'} image={'/images/gallery/p-xSl33Wxyc.webp'}
                />
            </div>
            <div className={'bg-primary'}>
                <HomeAbout />
            </div>
        </>
    )
}
export default Home