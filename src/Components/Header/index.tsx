import "./Header_style.scss"
import {Navbar} from "../Navbar";
import logo from "../../assets/logo.png"
import {Link } from "react-router-dom";
import {BiSolidUserPlus} from "react-icons/bi";
import axios from "axios"
import { useEffect, useState } from "react";

export function Header() {
    const [nickName, setNickName] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/login/nickname')
            .then(response => {
                if (response.data && response.data.data) {
                    console.log("nick zalogowanego to " + response.data.data);
                    setNickName(response.data.data);  
                } else {
                    console.error('Błąd w bazie danych');
                }
            })
            .catch(error => {
                console.error('Błąd serwera: ', error.message);
            });
    }, []);

    function LogOut() {
        setNickName(null)
        axios.get('http://localhost:3000/login/logout')
        .then(response => {
                console.log("wylogowano sie!")
        })
        .catch(error => {
            console.error('Błąd serwera: ', error.message);
        });
    }

    return (
        <div className="header">
            <div id="left">
                <img src={logo} id="logo_photo" alt="logo"/>
                <h1 id="app_name">Małpie skrzynie</h1>
            </div>
            <div id="right">
            {nickName ? (
                    <div className="nickname">
                        Zalogowano: {nickName}
                        <button onClick={LogOut}>Wyloguj sie!</button>
                    </div>
                ) : (
                    <div className="nickname2">
                        <Link to="/login">Zaloguj sie!<BiSolidUserPlus /></Link>
                    </div>
                )}
                <Navbar/>

            </div>

        </div>
    )
}