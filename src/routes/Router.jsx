import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import AuthenticationLayOut from "../layouts/AuthenticationLayouts";
import SignUp from "../pages/Authentication/SignUp/SignUp";




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
    },



    // Authentication Layout

    {
        path: "/",
        Component: AuthenticationLayOut,
        children: [
            {
                path: 'signin',
                Component: SignIn,

            },
            {
                path: 'signup',
                Component: SignUp,

            },


        ],
    }
])