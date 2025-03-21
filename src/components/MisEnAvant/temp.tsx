/*
return (
    <div className="relative space-y-6">
        {steps.map((step, idx) => (
            <div
                key={step.num}
                className={`relative w-full flex items-center ${
                    idx % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
                {/!* Timeline bar *!/}
                <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gray-300 z-0"></div>

                {/!* Banner *!/}
                <div className={`relative ${step.color} text-white flex items-center px-6 py-3 shadow-lg rounded-md`}>
                    {/!* Badge *!/}
                    <div className={`relative flex items-center justify-center w-10 h-10 ${step.arrow} font-bold text-white mr-4`}>
                        {step.num}
                        <div className={`absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 ${step.arrow} clip-arrow-right`}></div>
                    </div>

                    {/!* Text *!/}
                    <span className="font-semibold text-sm md:text-base">{step.text}</span>

                    {/!* End cap *!/}
                    <div className={`absolute right-0 top-0 w-4 h-full ${step.arrow} clip-right-end`}></div>
                </div>
            </div>
        ))}
    </div>*/

/*
<div className="relative flex flex-col items-center space-y-6">
    {/!* Barre verticale *!/}
    <div className="absolute w-2 h-full bg-gray-300 left-[20px] top-0 z-0"></div>

    {steps.map((step) => (
        <div key={step.num} className="relative z-10">
            {/!* Ruban flottant *!/}
            <div className={`flex items-center w-[400px] h-12 ${step.color} shadow-lg relative rounded-sm`}>
                {/!* Numéro + flèche *!/}
                <div className="relative flex items-center justify-center w-12 h-12 bg-cyan-700 text-white text-lg mr-4">
                    {step.num}
                    {/!* Flèche droite *!/}
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-700 clip-arrow-right"></div>
                </div>

                {/!* Texte *!/}
                <span className="text-white font-semibold text-sm flex-1 pl-2">{step.text}</span>

                {/!* Pli 3D *!/}
                <div className={`absolute right-0 top-0 w-4 h-12 ${step.arrow} clip-right-fold`}></div>
            </div>
        </div>
    ))}
</div>*/
