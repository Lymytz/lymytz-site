import Menu from "./Menu";

const Header=()=>{
    return(
        <header className={'p-5'}>
            <div className={'flex justify-between'}>
                <h1 className={'text-2xl font-bold text-blue-900 font-primary'}>LYMYTZ SYSTEM</h1>
                <Menu />
            </div>
        </header>
    )
}
export default Header