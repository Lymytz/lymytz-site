import {motion} from 'framer-motion'

interface BannerProps {
    title: string,
    subText?: string,
    video?: object,
}

const Banner = ({title, subText}: BannerProps) => {
    return (
        <section className="relative flex justify-between w-full bg-white h-150 mt-8 ">
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