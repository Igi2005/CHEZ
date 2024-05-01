import  "./Main_style.scss"
import {useEffect, useState} from "react";
import axios from "axios";

export function Main() {
    const [records, setRecords] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [names, setNames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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
            const namesArray = [];
            for (let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * records.length);
                const record = records[randomIndex];
                namesArray.push(record['image']);
            }
            setNames(namesArray);
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
                    <div>
                        <img
                            src={names[currentIndex]}
                            alt={`Zdjęcie ${currentIndex + 1}`}
                            style={{ width: '20vh', height: 'auto' }}
                        />
                    </div>
                ) : (
                    <p>Ładowanie...</p>
                )}
            </div>
            <div id="mainLoot">

            </div>
        </div>
    );
}
