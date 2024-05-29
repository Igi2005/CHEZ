import  "./Main_style.scss"
import {SetStateAction, useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export function Main() {
    const [records, setRecords] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [names, setNames] = useState([]);
    const [guns, setGuns] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => {
                if (response.data && response.data.data) {
                    setData(response.data.data);
                    //console.log(response.data.data); // Przeniesienie console.log tutaj
                } else {
                    console.error('Błąd w bazie danych');
                }
            })
            .catch(error => {
                console.error('Błąd serwera: ', error.message);
            });
    }, []);
    //console.log(data)

    useEffect(() => {
        axios.get('https://bymykel.github.io/CSGO-API/api/en/skins_not_grouped.json')
            .then(res => {
                setRecords(res.data);
                setIsDataLoaded(true);
                //console.log(records)
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

    function SortAsc() {
        console.log("data----------------- " + data)
        console.log(data[1].cena)
        for(let i=0; i < data.length - 1;i++) {
            for(let j=0; j < data.length - 1; j++) {
                if(Number(data[j].cena) < Number(data[j+1].cena)) {
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
        console.log(data)
    }

    function SortDesc() {
        console.log("data----------------- " + data)
        console.log(data[1].cena)
        for(let i=0; i < data.length - 1;i++) {
            for(let j=0; j < data.length - 1; j++) {
                if(Number(data[j].cena) > Number(data[j+1].cena)) {
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
        console.log(data)
    }

    function OpenBox() {
        navigate('/openbox');
    }

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
                                        style={{width: '15vh', height: 'auto'}}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>Ładowanie...</p>
                )}
                
                <div id="headerLootRight">TUTAJ ROB CO CHCESZ</div>
            </div>
            <div id="mainLoot">
                <div id="sort">
                    <button id="desc" onClick={SortAsc}>Od najdroższych</button>
                    <button id="asc" onClick={SortDesc}>Od najtańszych</button>
                    <button id="avaible">Dostępne do kupienia</button>
                    <hr/>
                </div>
            {data.length > 0 ? (
                <ul className="lootBoxContainer">
                    {data.map(item => (
                        <div className="lootBox" key={item.id_skrzynki} onClick={OpenBox}>
                            <img src={item.img} alt={item.nazwa} />
                            <p>{item.nazwa} | {item.cena}</p>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>Trwa ładowanie danych...</p>
            )}
        </div>

        </div>
    );
}
