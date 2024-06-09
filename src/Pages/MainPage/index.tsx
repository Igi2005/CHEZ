import "./MainPage_style.scss"
import {Header} from "../../Components/Header";
import {Footer} from "../../Components/Footer"
import {Main} from "../../Components/Main"
import React from "react";


export function MainPage(){
    return(
        <div id="main" data-testid='main-container'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}