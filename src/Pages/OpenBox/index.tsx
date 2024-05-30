import { useLocation } from "react-router-dom";
import { Header } from "../../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../../Components/Footer";
import "./OpenBox_style.scss"

export function OpenBox() {
        
    const location = useLocation();
    const { index } = location.state || { index: 0 };
    const [skrzynka, setSkrzynka] = useState({});
    const [bronie, setBronie] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); 

    useEffect(() => {
        axios.get(`http://localhost:3000/openbox/${index}`)
            .then(res => {
                setSkrzynka(res.data.img)
                setBronie(res.data.data)
                setIsLoaded(true); 
            })
            .catch(error => {
                console.error('Błąd serwera: ', error.message);
                setIsLoaded(true); 
            });
        
    }, [index, isLoaded]);

    console.log(bronie)
    console.log(skrzynka)
    return (
        <div>
            <Header/>
            <div id="openBox">
            <div id="box">
                <p>Nazwa: {skrzynka.nazwa}</p>
                <p>Cena: {skrzynka.cena}</p>
                <img src={skrzynka.img} alt={skrzynka.nazwa} />
            </div>
            <div id="underBox">
                {bronie.reduce((rows, bron, index) => {
                    if (index % 5 === 0) {
                        rows.push([bron]);
                    } else {
                        rows[rows.length - 1].push(bron);
                    }
                    return rows;
                }, []).map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((bron, bronIndex) => (
                            <div key={bronIndex} className="bron">
                                <img src={bron.img} alt={bron.name} />
                                <p>{bron.name}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
            <Footer/>
        </div>
    )
}
