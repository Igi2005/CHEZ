import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import  './UserData_style.scss'
import bambi from "../../assets/bambi - IRL.mp3"
import dogi from "../../assets/tapeta.jpg"
export default function UserData() {
    const location = useLocation();
    const action = location.state?.send;
    const [data,setData] = useState<any[]>([]);
    const [userData,setUserData] = useState<any[]>([]);
    const [id,setId] = useState(null)
    useEffect(()=>{
        if(action != null && action != undefined) {
            axios.get(`http://localhost:3000/getaddeddata/${action}`)
            .then(res =>{
                    setData(res.data.data)
                    
            })
            .catch(err => {
                console.error('Błąd serwera: ', err.message); 
            })
        }
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:3000/getitems`)
        .then(res =>{
            setUserData(res.data.data)
            setId(res.data.id)
            console.log(userData)
            
        })
        .catch(err =>{
            console.error('Błąd serwera: ', err.message);
        })
    },[])

    useEffect(() =>{
            //const audio = new Audio(bambi);
            //audio.play();
    },[])

    function sellItem(idOfGun:number,idTransaction:number,priceGun) {
        const idG = idOfGun
        const idT = idTransaction
        const priceG = priceGun
        console.log("idT to " + idT)
        const Data = {
            idG : idG,
            idT : idT,
            price : priceG
        }
        axios.post(`http://localhost:3000/sellitems`,Data)
        .then(res =>{
            console.log("sold item")
        })
        .catch(err => {
            console.error('Błąd serwera: ', err.message); 
        })
        window.location.reload();
    }
    return (
        <div>
            <Header/>
            <div id="mainUser">
                {action != null && action != undefined && id != null ? (
                    <div className="user-card pulse-effect">
                        <p id="won">Gratulacje wygrałes !</p>
                        <h2>{data.name}</h2>
                        <img src={data.img} alt={data.name} />
                        <p>Cena: {data.cena} PLN</p>
                    </div>
                ) : null}
                <div>
                    {userData.length > 0 ? (
                        <ul className="weapon-data-list">
                            {userData.slice().reverse().map((weaponItem, index) => (
                            <li key={index}>
                                <div className="one-item">
                                    <img src={weaponItem.img}/>
                                    <p>
                                        {`Nazwa: ${weaponItem.name}, Cena: ${weaponItem.cena}`}
                                        <hr/>
                                        <button id="sellItem" onClick={() => sellItem(weaponItem.id,weaponItem.id_operacji,weaponItem.cena)}>Sprzedaj za {weaponItem.cena}</button>
                                        
                                    </p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    ) : (
                        id != null ? (
                            <p className="err">Nie masz itemow stary/stara musisz isc otwierac skrzynie pamiętaj u nas zawsze sie wygrywa !
                                <img src={dogi}/></p>
                        ) : <p className="err">Zaloguj się!</p>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
    

}