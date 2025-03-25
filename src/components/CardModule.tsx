import * as React from "react";

interface CardModuleProps {
    moduleTitle: string,
    moduleText?: string | React.ReactNode | undefined,
    image: string,
    invert?: boolean
}

const CardModule = ({moduleTitle, moduleText, image, invert}: CardModuleProps) => {
    return (
        <>
            <div
                className={`flex flex-col-reverse justify-center lg:gap-6 ${invert ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
            p-5 lg:p-10 mt-5 lg:max-h-70 w-full`}>
                <section className={'lg:flex-1/2'}>
                    <h3 className={'text-2xl font-bold py-6 text-justify'}>{moduleTitle}</h3>
                    {moduleText}
                    <div className={'justify-end flex text-sm'}>
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white border border-transparent border-b-blue-500
                             hover:border-transparent">
                            En savoir plus
                        </button>
                    </div>
                </section>
                <div className={'lg:flex-1/2'}>
                    <img src={image} alt={'Background module'}
                         className={'object-cover w-full h-full rounded-xl lg:rounded-3xl'}/>
                </div>
            </div>
        </>
    )
}
export default CardModule