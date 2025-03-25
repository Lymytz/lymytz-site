const steps = [
    {num: "01", text: "Maîtriser vos approvisionnements", color: "bg-cyan-600", arrow: "bg-cyan-700"},
    {num: "02", text: "Maîtriser vos stocks", color: "bg-cyan-500", arrow: "bg-cyan-600"},
    {num: "03", text: "Rendre compte de votre trésorerie !", color: "bg-gray-600", arrow: "bg-gray-700"},
    {num: "04", text: "Tenir une comptabilité fiable !", color: "bg-orange-500", arrow: "bg-orange-600"},
    {num: "05", text: "Savoir quelles sont vos marges !", color: "bg-amber-800", arrow: "bg-amber-900"},
    {num: "06", text: "Maîtriser votre planning et agenda", color: "bg-emerald-600", arrow: "bg-emerald-700"},
    {num: "07", text: "Prendre en main votre production", color: "bg-red-500", arrow: "bg-red-600"},
    {num: "00", text: "Et plus encore", color: "bg-teal-600", arrow: "bg-teal-700"},
];
const FrontItem = () => {
    return (
        <div className="relative lg:w-[70%] lg:py-5">
            {steps.map((step, idx) => (
                <div
                    key={step.num}
                    className={`relative w-full flex items-center ${
                        idx % 2 === 0 ? "justify-start" : "justify-end"
                    } my-1`}
                >
                   {/* {/!* Timeline bar *!/}*/}
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gray-300 z-0"></div>

                    {/*{/!* Banner *!/}*/}
                    <div className={`relative ${step.color} text-white flex items-center px-6 py-3 shadow-lg rounded-md`}>
                       {/* {/!* Badge *!/}*/}
                        <div className={`relative flex items-center justify-center w-10 h-10 ${step.arrow} font-bold text-white mr-4`}>
                            {step.num}
                            <div className={`absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 ${step.arrow} clip-arrow-right`}></div>
                        </div>

                       {/* {/!* Text *!/}*/}
                        <span className="font-semibold text-sm md:text-base">{step.text}</span>

                        {/*{/!* End cap *!/}*/}
                        <div className={`absolute right-0 top-0 w-4 h-full ${step.arrow} clip-right-end`}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FrontItem