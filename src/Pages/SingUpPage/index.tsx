import {Error} from "../../Components/Error"
import axios from "axios"
import  "./SingUpPage_style.scss"
import {useState} from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import React from "react";

function SignUp() {

    const [IsUsername, setIsUsername] = useState(false)
    const [IsUsersurname, setIsUsersurname] = useState(false)
    const [IsUseremail, setIsUseremail] = useState(false)
    const [IsPassword, setIsPassword] = useState(false)
    const [IsNick,setIsNick] = useState(false)
    const [Err,setErr] = useState(false)
    const [Redirect, setRedirect] = useState(false)
    const RegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i

    function Validation(e : React.ChangeEvent<any>) {
        e.preventDefault()
        const {user_name,user_surname,user_email,user_pass,user_nick} = e.target.elements
        const name = user_name.value
        const surname = user_surname.value
        const email = user_email.value
        const pass = user_pass.value
        const nick = user_nick.value

        setIsNick(nick.length === 0);
        setIsUsername(name.length === 0);
        setIsUsersurname(surname.length === 0);
        setIsUseremail(email.length === 0 || !email.match(RegExp));
        setIsPassword(pass.length === 0);

        if(name.length > 0 && surname.length > 0 && email.match(RegExp) && pass.length > 0 && nick.length > 0) {
            const Data = {
                UserName : name,
                UserSurname : surname,
                UserEmail : email,
                UserPass : pass,
                UserNick : nick
            }
            console.log(Data)
            axios.post('http://localhost:3000/signup',Data)
                .then(res => {
                    console.log(res.data);
                    const message = res.data.msg;
                    console.log('Received message:', message);
                    if(message == "Podany adres email istnieje w bazie danych!") {
                            setErr(true)
                    }
                    if(message == "Pomyślnie dodano do bazy danych!") {
                        setRedirect(true)
                        window.location.href = '/';
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="form_signup">
            <form action="/login" onSubmit={Validation} id="form_signup" role='form'>
                <h1>Stwórz konto!</h1>
                <div className="inputs">
                    <input type="text" placeholder="Imie" name="user_name"/>
                    <FaUser className="icons"/>
                </div>
                {IsUsername && <Error message="Pole z imieniem nie może być puste!"></Error>}
                <div className="inputs">
                    <input type="text" placeholder="Nazwisko" name="user_surname"/>
                    <FaUser className="icons"/>
                </div>
                {IsUsersurname && <Error message="Pole z nazwiskiem nie może być puste!"></Error>}
                <div className="inputs">
                    <input type="text" placeholder="wpisz nickname" name="user_nick"/>
                    <IoPerson className="icons"/>
                </div>
                {IsNick && <Error message="Pole z nickiem nie może być puste"></Error>}
                <div className="inputs">
                    <input type="text" placeholder="Adres email" name="user_email"/>
                    <MdEmail className="icons" />
                </div>
                {IsUseremail && <Error message="Podano zły adres email!"></Error>}
                <div className="inputs">
                    <input type="password" placeholder="Podaj hasło" name="user_pass"/>
                    <RiLockPasswordFill className="icons"/>
                </div>
                {IsPassword && <Error message="Hasło nie może być puste!"></Error>}
                <input type="submit" value="Stwórz konto" id="login_btn"/>
                {Err && <Error message="Podany adres email istnieje w bazie danych nie można stworzyć konta"></Error>}
            </form>
        </div>)
}

export default SignUp