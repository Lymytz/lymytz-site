import * as React from "react";

interface SliderServiceItemsProps {
    title: string,
    texte?: string | React.ReactNode | undefined,
    background: string
}

const SlideServiceItems = ({title, texte, background}: SliderServiceItemsProps) => {
    return (
        <>
            <div className={'flex'}>
                <div className={'relative w-full bg-white flex items-center justify-center'}>
                    <img src={background} alt={'image background'}
                         className="w-full h-full object-cover"
                    />
                    <div className={'absolute bg-black/50 top-0 right-0 inset-0 p-10 z-50'}>
                        <h3 className={'text-white text-4xl font-bold m-5'}>{title}</h3>
                        <div className={'text-white text-2xl pt-10 flex justify-center'}>
                            {texte}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SlideServiceItems
