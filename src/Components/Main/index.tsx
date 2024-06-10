import "./Main_style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

interface Gun {
    id_skrzynki: number;
    img: string;
    nazwa: string;
    cena: number;
}

export function Main() {
    const [records, setRecords] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [names, setNames] = useState<string[]>([]);
    const [guns, setGuns] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const [balans, setBalans] = useState(0);
    const [guns2, setGuns2] = useState<Gun[]>([]);
    const navigate = useNavigate();
    const [choice, setChoice] = useState(true);
    const [choice2, setChoice2] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(response => {
                if (response.data && response.data.data) {
                    setData(response.data.data);
                } else {
                    console.error('Błąd w bazie danych');
                }
            })
            .catch(error => {
                console.error('Błąd serwera: ', error.message);
            });
    }, []);

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
            const namesArray: string[] = [];
            const namesGun: string[] = [];
            for (let i = 0; i < 40; i++) {
                const randomIndex = Math.floor(Math.random() * records.length);
                const record = records[randomIndex];
                namesArray.push(record['image']);
                namesGun.push(record['name']);
            }
            setNames(namesArray);
            setGuns(namesGun);
        }
    }, [isDataLoaded, records]);

    useEffect(() => {
        if (names.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [names.length]);

    function SortAsc() {
        setChoice2(false);
        setChoice(true);
        const sortedData = [...data].sort((a, b) => b.cena - a.cena);
        setData(sortedData);
    }

    function SortDesc() {
        setChoice2(false);
        setChoice(true);
        const sortedData = [...data].sort((a, b) => a.cena - b.cena);
        setData(sortedData);
    }

    useEffect(() => {
        axios.get('http://localhost:3000/openbox')
            .then(res => {
                setBalans(res.data.balans);
            })
            .catch(err => console.log(err));
    }, []);

    function Avaible() {
        const availableGuns = data.filter(item => Number(balans) >= Number(item.cena));
        setGuns2(availableGuns);
        setChoice(false);
        setChoice2(true);
    }

    function OpenBox(index: number) {
        navigate('/openbox', { state: { index } });
    }

    const randomCrateImage = names.length > 0 ? names[Math.floor(Math.random() * names.length)] : '';

    return (
        <div id="Loot" data-testid='main'>
            <div id="headerLoot">
                {names.length > 0 ? (
                    <div id="header_photos">
                        {Array.from({ length: 6 }).map((_, i) => {
                            const index = (currentIndex + i) % names.length;
                            return (
                                <div id="one_photo" key={index}>
                                    <p className="nameOfGun">{guns[index]}</p>
                                    <img
                                        role='img'
                                        className="header_photos"
                                        src={names[index]}
                                        alt={`Zdjęcie ${index + 1}`}
                                        style={{ width: '15vh', height: 'auto' }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>Ładowanie...</p>
                )}

                <div id="headerLootRight">
                    {randomCrateImage && (
                        <div className="randomCrateContainer">
                            <img
                                src={randomCrateImage}
                                alt="Random Crate"
                                className="randomCrateImage"
                            />
                            <div className="overlayText">
                                Ten skin może być twój
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div id="mainLoot">
                <div id="sort">
                    <button id="desc" onClick={SortAsc}>Od najdroższych</button>
                    <button id="asc" onClick={SortDesc}>Od najtańszych</button>
                    <button id="avaible" onClick={Avaible}>Dostępne do kupienia</button>
                    <hr />
                </div>
                {choice ? (
                    data.length > 0 ? (
                        <ul className="lootBoxContainer">
                            {data.map(item => (
                                <div className="lootBox" role="listitem" id={item.id_skrzynki} key={item.id_skrzynki} onClick={() => OpenBox(item.id_skrzynki)}>
                                    <img src={item.img} alt={item.nazwa} />
                                    <p>{item.nazwa} | {item.cena}</p>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p className="err_main">Zaloguj się!</p>
                    )
                ) : choice2 ? (
                    guns2.length > 0 ? (
                        <ul className="lootBoxContainer">
                            {guns2.map(item => (
                                <div className="lootBox" id={item.id_skrzynki} key={item.id_skrzynki} onClick={() => OpenBox(item.id_skrzynki)}>
                                    <img src={item.img} alt={item.nazwa} />
                                    <p>{item.nazwa} | {item.cena}</p>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p className="err_main">Masz za mało kaski</p>
                    )
                ) : (
                    <ul className="lootBoxContainer">
                        {data.map(item => (
                            <div className="lootBox" id={item.id_skrzynki} key={item.id_skrzynki} onClick={() => OpenBox(item.id_skrzynki)}>
                                <img src={item.img} alt={item.nazwa} />
                                <p>{item.nazwa} | {item.cena}</p>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
