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
            <div className={`flex justify-center gap-6 ${invert? 'flex-row-reverse':''} h-70 p-10 mt-5`}>
                <section className={'flex-1/2'}>
                    <h3 className={'text-2xl font-bold py-6 text-justify'}>{moduleTitle}</h3>
                    {moduleText}
                </section>
                <div className={'flex-1/2'}>
                    <img src={image} alt={'Background module'} className={'object-cover w-full h-full'}/>
                </div>
            </div>
        </>
    )
}
export default CardModule