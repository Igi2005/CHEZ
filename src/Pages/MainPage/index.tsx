import "./MainPage_style.scss"
import {Header} from "../../Components/Header";
import {Footer} from "../../Components/Footer"
import {Main} from "../../Components/Main"
export function MainPage(){
    return(
        <div id="main">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}