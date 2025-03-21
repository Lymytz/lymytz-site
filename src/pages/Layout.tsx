import {Outlet} from "react-router";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <main className="flex-grow p-4 justify-center">
                <Outlet/>
            </main>
            <footer className="bg-secondary text-white p-2 text-center w-full text-sm flex justify-end px-10">
                <p>&copy; 2014-2025 Lymytz System</p>
            </footer>
        </div>
    );
};

export default Layout;
