import {fonctionnalites} from "./fonctionnalite.ts";
import {useState} from "react";

const VerticalMenu=()=>{
    const [activeIndex, setActiveIndex] = useState<number | null>(6);

    return (
        <div className="w-full max-w-xs p-4 bg-white shadow-md rounded-md">
            <ul className="border-l border-gray-300 space-y-1">
                {fonctionnalites.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <li
                            key={index}
                            className={`pl-4 pr-2 py-2 cursor-pointer transition-all group ${
                                isActive ? "text-blue-600 font-semibold" : "text-black"
                            }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="relative">
                                {/* Ligne bleue verticale */}
                                {isActive && (
                                    <div className="absolute -left-4 top-0 h-full w-1 bg-blue-600 rounded-r"></div>
                                )}
                                {/* Titre */}
                                <div>{item.title}</div>
                                {/* Contenu (slide visible uniquement si actif) */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isActive ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                                    } text-sm text-gray-600`}
                                >
                                    {item.content}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 px-4 text-sm text-gray-600">
                <button className="hover:text-blue-600">&lt;</button>
                <span>
          Step {activeIndex! + 1} of {fonctionnalites.length}
        </span>
                <button className="hover:text-blue-600">&gt;</button>
            </div>
        </div>
    );
}
export default VerticalMenu