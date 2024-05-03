import  "./Main_style.scss"
import {SetStateAction, useEffect, useState} from "react"
import axios from "axios"
import { useLocation } from 'react-router-dom';

export function Main() {
    const [records, setRecords] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [names, setNames] = useState([]);
    const [guns, setGuns] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const location = useLocation();
    const { nickName } = location.state || {};

    useEffect(() => {
        axios.get('https://bymykel.github.io/CSGO-API/api/en/skins_not_grouped.json')
            .then(res => {
                setRecords(res.data);
                setIsDataLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (isDataLoaded) {
            const namesArray: SetStateAction<never[]> = [];
            const namesGun: SetStateAction<never[]> = []
            for (let i = 0; i < 40; i++) {
                const randomIndex = Math.floor(Math.random() * records.length);
                const record = records[randomIndex];
                namesArray.push(record['image']);
                namesGun.push(record['name'])
            }
            setNames(namesArray);
            setGuns(namesGun)
        }
    }, [isDataLoaded, records]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [names.length]);

    return (
        <div id="Loot">
            <div id="headerLoot">
                {names.length > 0 ? (
                    <div id="header_photos">
                        {Array.from({length: 8}).map((_, i) => {
                            const index = (currentIndex + i) % names.length;
                            return (
                                <div id="one_photo">
                                    <p className="nameOfGun">{guns[index]}</p>
                                    <img
                                        className="header_photos"
                                        key={index}
                                        src={names[index]}
                                        alt={`Zdjęcie ${index + 1}`}
                                        style={{width: '16vh', height: 'auto'}}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>Ładowanie...</p>
                )}
            </div>
            <div id="mainLoot"><h1>Witaj!</h1>
                <p>Email: {nickName}</p>
                </div>

        </div>
    );
}
