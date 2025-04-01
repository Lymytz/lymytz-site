import {createBrowserRouter} from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout.tsx";
import NotreErp from "./pages/NotreErp.tsx";
import NosServices from "./pages/NosServices.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "notre-erp",
                element: <NotreErp/>
            },
            {
                path: "nos-services",
                element: <NosServices/>
            },
            {
                path: "about-us",
                element: <About/>
            },
            {
                path: "contact-us",
                element: <Contact/>
            }
        ]
    }
])

export default routes