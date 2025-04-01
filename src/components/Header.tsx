import Menu from "./Menu";
import {NavLink} from "react-router";

const Header=()=>{
    return(
        <header className={'p-5 bg-white shadow-md font-primary relative z-50'}>
            <div className={'flex justify-between'}>
                <h1 className={'text-2xl font-bold text-blue-900 font-primary'}>
                    <NavLink  to={'/'} >LYMYTZ SYSTEM</NavLink>
                </h1>
                <Menu />
            </div>
        </header>
    )
}
export default Header