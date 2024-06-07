import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import  './UserData_style.scss'
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

    console.log("id to " +  id)
    return (
        <div>
            <Header/>
            <div id="mainUser">
                {action != null && action != undefined ? (
                    <div className="user-card">
                        <h2>{data.name}</h2>
                        <img src={data.img} alt={data.name} />
                        <p>Cena: {data.cena} PLN</p>
                    </div>
                ) : null}
                <div>
                    {userData.length > 0 ? (
                        <ul className="weapon-data-list">
                            {userData.map((weaponItem, index) => (
                            <li key={index}>
                                <div className="one-item">
                                    <img src={weaponItem.img}/>
                                    <p>{`Nazwa: ${weaponItem.name}, Cena: ${weaponItem.cena}`}</p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    ) : (
                        id != null ? (
                            <p>Brak dodatkowych danych użytkownika</p>
                        ) : <p>Zaloguj się!</p>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
    

}