import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {menus} from "./menu.ts";
import {NavLink} from "react-router";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="flex justify-between items-center px-4 py-1">
            {/* Menu Desktop */}
            <ul className="hidden md:flex gap-4 text-black text-[0.9em]">
                {menus.map((item) => (
                    <NavLink to={item.path} key={item.path}
                        className="hover:cursor-pointer hover:bg-secondary p-2 hover:text-white hover:rounded-xl transition"
                    >
                        {item.title}
                    </NavLink>
                ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex gap-4 items-center">
                <button
                    className="px-4 py-2 font-semibold text-white bg-blue-900 rounded-xl hover:bg-blue-800 transition">
                    SOUHAITEZ-VOUS VOUS ENGAGER?
                </button>
            </div>

            {/* Burger icon */}
            <button onClick={toggleMenu} className="md:hidden text-blue-900 hover:cursor-pointer">
                <FontAwesomeIcon
                    icon={isOpen ? faXmark : faBars}
                    className="text-2xl p-1 bg-blue-900 text-white rounded-lg transition"
                />
            </button>

            {/* Menu Mobile */}
            <div
                className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:hidden`}>
                <ul className="flex flex-col gap-3 p-4 text-black text-sm">
                    {menus.map((item) => (
                        <NavLink to={item.path} key={item.path} onClick={()=>setIsOpen(false)}
                            className="hover:cursor-pointer hover:bg-secondary p-2 hover:text-white hover:rounded-xl transition">
                            {item.title}
                        </NavLink>
                    ))}
                    <li>
                        <button
                            className="w-full mt-2 px-4 py-2 font-semibold text-white bg-blue-900 rounded-xl hover:bg-blue-800 transition">
                            SOUHAITEZ-VOUS VOUS ENGAGER?
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Menu