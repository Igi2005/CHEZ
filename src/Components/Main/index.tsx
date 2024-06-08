import "./Main_style.scss";
import { SetStateAction, useEffect, useState } from "react";
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
    const [names, setNames] = useState([]);
    const [guns, setGuns] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const [balans, setBalans] = useState([])
    const [guns2, setGuns2] = useState<Gun[]>([]);
    const navigate = useNavigate();
    const [choice,setChoice] = useState(false)
    const [choice2, setChoice2] = useState(false)
    const [choice3, setChoice3] = useState(false)
    
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
    console.log(data);

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
            const namesGun: SetStateAction<never[]> = [];
            for (let i = 0; i < 40; i++) {
                const randomIndex = Math.floor(Math.random() * records.length);
                const record = records[randomIndex];
                console.log(record);
                namesArray.push(record['image']);
                namesGun.push(record['name']);
            }
            setNames(namesArray);
            setGuns(namesGun);
        }
    }, [isDataLoaded, records]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [names.length]);

    function SortAsc() {
        setChoice2(false)
        setChoice(true)
        //console.log("data----------------- " + data);
        //console.log(data[1].cena);
        for (let i = 0; i < data.length - 1; i++) {
            for (let j = 0; j < data.length - 1; j++) {
                if (Number(data[j].cena) < Number(data[j + 1].cena)) {
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
        //console.log(data);
    }

    function SortDesc() {
        setChoice2(false)
        setChoice(true)
        for (let i = 0; i < data.length - 1; i++) {
            for (let j = 0; j < data.length - 1; j++) {
                if (Number(data[j].cena) > Number(data[j + 1].cena)) {
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
    }
    const help: Gun[] = [];
    function Avaible() {
        setChoice(false)
        setChoice2(true)
        axios.get('http://localhost:3000/openbox')
        .then(res => {
            setBalans(res.data.balans)
            console.log(balans)
        })
        .catch(err => console.log(err));
        //const help: Gun[] = [];
        for(let i = 0; i < data.length;i++) {
            console.log(data[i].cena)
            if(Number(balans) >= Number(data[i].cena)) {
                help.push({
                    id_skrzynki: data[i].id_skrzynki,
                    img: data[i].img,
                    nazwa: data[i].nazwa,
                    cena: data[i].cena
                });
            } 
        }
        setGuns2(help);
    }

    function OpenBox(index:number) {
        navigate('/openbox',{ state: { index} });
    }
    
    const randomCrateImage = names.length > 0 ? names[Math.floor(Math.random() * names.length)] : '';

    return (
        <div id="Loot">
            <div id="headerLoot">
                {names.length > 0 ? (
                    <div id="header_photos">
                        {Array.from({ length: 6 }).map((_, i) => {
                            const index = (currentIndex + i) % names.length;
                            return (
                                <div id="one_photo" key={index}>
                                    <p className="nameOfGun">{guns[index]}</p>
                                    <img
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
                                {/* Ten skin może być twój */}
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
                {choice ? ( data.length > 0 ? (
                    <ul className="lootBoxContainer">
                     {data.map(item => (
                    <div className="lootBox" role='listitem' id={item.id_skrzynki} key={item.id_skrzynki} onClick={() => OpenBox(item.id_skrzynki)}>
                        <img src={item.img} alt={item.nazwa} />
                        <p>{item.nazwa} | {item.cena}</p>
                    </div>
                        ))}
                    </ul>
                ) : (
                    <p>Zaloguj się!</p>
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
                    <p>Zaloguj sie!</p>
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
