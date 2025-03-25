import {motion} from 'framer-motion'

interface BannerProps {
    title: string,
    subText?: string,
    video?: object,
}

const Banner = ({title, subText}: BannerProps) => {
    return (
        <section className="relative flex justify-between w-full bg-white h-140 mt-8 pl-10">
            <div className="w-[70%] flex flex-col justify-center">
                <motion.h1 initial={{opacity: 0, y: 150}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 0.8, ease: "easeOut"}}
                           className="text-7xl font-bold text-black">
                    {title}
                </motion.h1>
                <motion.p initial={{opacity: 0, y: 150}}
                          animate={{opacity: 1, y: 0}}
                          transition={{duration: 0.8, ease: "easeOut", delay: 0.5}}
                          className="mt-4 text-3xl font-semibold text-gray-700 px-2">
                    {subText}
                </motion.p>
                <div className={'flex gap-2 justify-center py-5'}>
                    <button type="button"
                            className="text-white bg-blue-900
                            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Demander une démonstration
                    </button>
                    <button type="button"
                            className="text-blue-950 bg-gray-100 border outline-blue-900 border-blue-900
                            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Visite guidée du produit
                    </button>
                </div>
            </div>
            <div className="relative w-[30%] bg-gray-300 poly">
                <video controls={false} autoPlay loop className={'w-full h-full bg-secondary object-cover '}>
                    <source src="/video/banner_video.webm" type="video/webm"/>
                </video>
            </div>
            <style>
                {`          
                  .poly{
                    clip-path: polygon(50% 0%, 100% 0%, 100% 100%,0% 100%);
                    background: red
                  }
            `}
            </style>
        </section>
    )
}
export default Banner