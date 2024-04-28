import React from 'react'
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/SingUpPage";
import {MainPage} from "../Pages/MainPage";
import { CiLogin } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { GrDomain } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import UserData from "../Pages/UserData";
interface RouteElement {
    element: React.JSX.Element
    icon?: React.JSX.Element
    path: string
    title: string
}

export const routes: Array<RouteElement> = [
    {
        path: "/login",
        element: <LoginPage/>,
        title: "Zaloguj sie!",
        icon: <CiLogin />
    },
    {
        path: "/signup",
        element : <SignUp/>,
        title: "Stwórz konto!",
        icon: <IoCreateOutline />
    },
    {
        path: "/",
        element: <MainPage/>,
        title: "Strona główna",
        icon: <GrDomain />
    },
    {
        path: "/user",
        element: <UserData/>,
        title: "Data user",
        icon: <FaUser />
    }

]
