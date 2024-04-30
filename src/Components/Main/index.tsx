import  "./Main_style.scss"
import {useEffect, useState} from "react";
import axios from "axios";
export function Main() {

    const [records, setRecords] = useState([])
    useEffect(() => {
        axios.get('https://bymykel.github.io/CSGO-API/api/en/skins_not_grouped.json')
            .then( res => {setRecords(res.data)})
            .catch(err => console.log(err))
    }, []);
    console.log(records)

    const random = Math.floor(Math.random() * 1400)
    const randomRecord = records[random];

    return (
        <div id="Loot">
            <div id="headerLoot">
                {randomRecord ? (
                    <div>
                        {randomRecord['id']}<br/>
                        {randomRecord['name']}
                    </div>
                ) : (
                    <p>Ładowanie...</p>
                )}
            </div>
            <div id="mainLoot">

            </div>
        </div>
    )
}