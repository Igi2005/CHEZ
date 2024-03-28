import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./LoginPage_style.scss"
import { useState } from "react"
import {Error} from "../../Components/Error/index.tsx"
import axios from "axios"
import {Link} from "react-router-dom";
import { BiSolidUserPlus } from "react-icons/bi";

function LoginPage(){

    /*const [Useremail, setUseremail] = useState('')
    const [Password, setPassword] = useState('')*/
    const [IsUseremail, setIsUseremail] = useState(false)
    const [IsPassword, setIsPassword] = useState(false)
    const [Err,setErr] = useState(false)
    const [Redirect, setRedirect] = useState(false)
    function Validation(e : React.ChangeEvent<any>){
        e.preventDefault()
        const {user_email,user_pass} = e.target.elements
        const email = user_email.value
        const pass = user_pass.value

        const RegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i

        if(email.length == 0 || !email.match(RegExp)) {
            setIsUseremail(true)
        }
        else {
            setIsUseremail(false)
        }
        if(pass.length == 0) {
            setIsPassword(true)
        }
        else {
            setIsPassword(false)
        }

        if(email.length > 0 && pass.length > 0) {
            const Data = {
                UserEmail : email,
                UserPass : pass
            }
            console.log(Data)
            axios.post('http://localhost:3000/login',Data)
                .then(res => {
                    console.log(res.data);
                    const message = res.data.msg;
                    console.log('Received message:', message);
                    if(message == "Pomyslnie zalogowano się!") {
                        setRedirect(true)
                    }
                    if(message == "Niestety podane dane nie zgadzają się!") {
                        setErr(true)
                    }
            })
                .catch(err => console.log(err));

        }
    }

    return (
        <div className="form_login" >
            <form action="/login" onSubmit={Validation} id="form_login">
                <h1>Zaloguj się!</h1>
                <div className="inputs">
                    <input type="text" placeholder="Email" name="user_email" />
                    <FaUser className="icons"/>
                </div>
                {IsUseremail && <Error message="Podano niepoprawny adres email"></Error>}
                <div className="inputs">
                    <input type="password" placeholder="Podaj hasło" name="user_pass" />
                    <RiLockPasswordFill className="icons"/>
                </div>
                {IsPassword && <Error message="Nie można podać pustej nazwy użytkowinika"></Error>}
                <input type="submit" value="Zaloguj sie" id="login_btn"/>
                <div className="create_acc">
                    <Link to="/signup" id="create_acc">Stwórz konto!<BiSolidUserPlus id="create_icon" /></Link>
                </div>
                {Err && <Error message="Podane dane nie zgadzają się!"></Error>}
            </form>
        </div>
    );
}

export default LoginPage