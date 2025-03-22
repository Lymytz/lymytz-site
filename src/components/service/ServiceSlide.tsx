import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import SlideServiceItems from "./SlideServiceItems.tsx";
import {useRef} from "react";


const textDev = <p className={'text-2xl/10'}>
    Notre objectif premier étant de booster votre croissance, <br/>
    nous écoutons vos besoins propres et vous apportons des développements spécfiques
</p>
const textFormation = <p className={'text-2xl/10'}>
    Nous avons conscience que votre coeur de métier n'est pas l'informatique, <br/>
    aussi, nous mettons un accent <span className={'text-red-500'}>particulier sur l'accompagnement</span> permanent de
    vos équipes afin de leur offrir une expérience de travail la plus fluide possible
</p>
const textEditeur = <p className={'text-2xl/10'}>
    Notre expertise est le développement de solutions logiciels standard et sur mesure.<br/>
    Discutez de vos besoins avec nos experts et nous les transformerons en solutions digitale à forte valeur ajouté
</p>
const ServiceSlide = () => {
    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);

    const onAutoplayTimeLeft = (_s: unknown, time: number, progress: number) => {
        progressCircle?.current?.style?.setProperty('--progress', `${1 - progress}`)
        const node = progressContent.current;
        if (node != null) {
            node.textContent = `${Math.ceil(time / 1000)}s`
        }
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                centeredSlides={true}
                pagination={{clickable: true}}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
                navigation={true}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                <SwiperSlide>
                    <SlideServiceItems title={'Développements Complémentaires'}
                                       background={'/images/gallery/p-xSl33Wxyc.webp'}
                                       texte={textDev}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideServiceItems title={'Accompagnement sur mesure'}
                                       background={'/images/gallery/Bg0Geue-cY8.webp'}
                                       texte={textFormation}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideServiceItems title={'Edition de logiciels'} background={'/images/gallery/xScd4RblFy8.webp'}
                                       texte={textEditeur}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideServiceItems title={'Outsourcing'} background={'/images/gallery/ZPP-zP8HYG0.webp'}
                                       texte={textEditeur}/>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}
export default ServiceSlide