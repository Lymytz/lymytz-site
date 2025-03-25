const Menu=()=>{
    return(
        <nav className={'flex gap-6 text-lg font-primary items-center'}>
            <ul className="flex space-x-6  text-black text-[0.9em]">
                <li className="hover:text-blue-900 hover:cursor-pointer">NOTRE ERP</li>
                <li className="hover:text-blue-900 hover:cursor-pointer">NOS SERVICES</li>
                <li className="hover:text-blue-900 hover:cursor-pointer">CONTACT</li>
                <li className="hover:text-blue-900 hover:cursor-pointer">À PROPOS</li>
            </ul>
            <button className="px-4 py-2 font-semibold text-white bg-blue-900 rounded-xl hover:bg-blue-800">
                SOUHAITEZ-VOUS VOUS ENGAGER?
            </button>
        </nav>
    )
}
export default Menu