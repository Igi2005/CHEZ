import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { useLocation } from 'react-router-dom';
export default function UserData() {
    const location = useLocation();
    const action = location.state?.action;
    
    return (
        <div>
            <Header/>
            <div id="mainUser">
                
            </div>
            <Footer/>
        </div>
    )

}