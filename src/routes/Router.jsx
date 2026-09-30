import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";




export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/course.json').then(res => res.json())
            },

        ],
    }
])