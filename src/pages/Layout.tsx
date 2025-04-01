import {Outlet} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Header from "../components/Header.tsx";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <main className="flex-grow justify-center">
                <Header/>
                <Outlet/>
            </main>
            <footer className="bg-secondary text-white p-5 text-center w-full text-sm px-10">
                <div className={'flex justify-end'}>
                    <p>&copy; 2014-2025 Lymytz System</p>
                </div>
                <div className={'flex justify-end mt-1'}>
                    <div className={'flex gap-3 justify-center'}>
                        <FontAwesomeIcon icon={faFacebook} className={'text-lg'}/>
                        <FontAwesomeIcon icon={faLinkedin} className={'text-lg'}/>
                        <FontAwesomeIcon icon={faYoutube} className={'text-lg'}/>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
