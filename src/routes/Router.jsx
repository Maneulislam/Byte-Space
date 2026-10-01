import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import AuthenticationLayOut from "../layouts/AuthenticationLayouts";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Course from "../pages/Courses/Courses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import Creators from "../pages/Creators/Creators";
import NotFound from "../pages/NotFound/NotFound";




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
            {
                path: 'courses',
                Component: Course,
                loader: () => fetch('/course.json').then(res => res.json())
            },
            {
                path: "/course/:id",
                Component: CourseDetails,
                loader: () => fetch('/course.json').then(res => res.json())
            },
            {
                path: "/creators",
                Component: Creators,
                loader: () => fetch('/course.json').then(res => res.json())
            },
            {
                path: 'notfound',
                Component: NotFound
            }


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