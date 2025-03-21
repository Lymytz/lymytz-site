import {createBrowserRouter} from "react-router";
import Home from "./pages/Home";
import Layout from "./pages/Layout.tsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>

            }
        ]
    }
])

export default routes