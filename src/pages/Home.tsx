import Banner from "../components/Banner.tsx";
import Header from "../components/Header.tsx";
import FrontItem from "../components/MisEnAvant/FrontItem.tsx";
import ProductFront from "../components/ProductFront.tsx";
import ServiceSlide from "../components/service/ServiceSlide.tsx";

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
                        <ProductFront />
                    </div>
                    <div className={'flex-1 p-10'}>
                        <FrontItem/>
                    </div>
                </div>
            </div>
            <div className={'flex justify-center bg-gray-200 p-12'}>
                <h2 className={'text-4xl text-blue-950 font-bold'}>
                    Comment pouvons nous <span className={'text-secondary'}>accélérer</span> votre transformation digitale?</h2>
            </div>
            <div className={'h-150 flex max-w-[1450px] w-full m-auto'}>
                <ServiceSlide />
            </div>
        </>
    )
}
export default Home