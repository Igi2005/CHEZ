import { useLocation } from "react-router-dom";
import { Header } from "../../Components/Header";
import { useEffect, useState,useRef  } from "react";
import axios from "axios";
import { Footer } from "../../Components/Footer";
import "./OpenBox_style.scss"
import { BiColor } from "react-icons/bi";
import backgroundImage from '../../assets/background.png'; 

export function OpenBox() {
        
    const location = useLocation();
    const { index } = location.state || { index: 0 };
    const [skrzynka, setSkrzynka] = useState({});
    const [bronie, setBronie] = useState([]);
    const [test, setTest] = useState(null);
    const [balans, setBalas] = useState<null | number>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationActive, setAnimationActive] = useState(false);
    const [act,setAct] = useState(false)
    const specialElementRef = useRef(null);
    const [win,setWin] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/openbox/${index}`)
            .then(res => {
                setSkrzynka(res.data.img)
                setBronie(res.data.data)

            })
            .catch(error => {
                console.error('Błąd serwera: ', error.message); 
            });
        
    }, []);

    useEffect(() => {
        const paragraphText = document.getElementById('special') as HTMLDivElement | null;
        if (paragraphText) {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = paragraphText.innerHTML;
            const pElement = tempElement.querySelector('p');
    
            if (pElement) {
                const textContent = pElement.textContent; 
                //console.log("wylosowana bron to " + textContent);
                setWin(textContent)
                console.log("win to " + win)
                //alert("you won " + win)
                //window.location.reload();

            }
        }
    });
    
    axios.get('http://localhost:3000/openbox')
        .then(response => {
            if (response.data) {
                setTest(response.data.data)
                setBalas(response.data.balans)
                //console.log("nick zalogowanego to openBOX " + response.data.data);
                
            } else {
                console.error('Błąd w bazie danych');
                setTest(null)
                console.log("test to " + test)
            }
        })
        .catch(error => {
            console.error('Błąd serwera: ', error.message);
        });
    
    let names = []
    let names2 = []

    for(let i = 0; i < bronie.length; i++) {
        names.push(bronie[i].img)
        names2.push(bronie[i].name)
    }

    const logoStyle = {
        color : 'red'
    };

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
      };

    //console.log("balans to " + balans + "cena to "  + skrzynka.cena)
    function startAnimation(){
        if(Number(balans) >= skrzynka.cena) {
            const saldo:number = balans - skrzynka.cena;
            setBalas(saldo);
            console.log("-------------->" + saldo)
            const Data = {
                Balans : saldo
            }
            axios.post("http://localhost:3000/newsaldo", Data )
            .then(response => {
                console.log("Response:", response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
            
            setAnimationActive(true);
            let currentInterval = 1; 
            let animationStartTime = Date.now();
            const animate = () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
                //console.log("interval to " + currentInterval);
                console.log("new balans to " + saldo);
                const elapsedTime = Date.now() - animationStartTime;
                if (elapsedTime < 10000) { 
                    if(currentInterval < 100) {
                        currentInterval+=1;
                    }
                    if(currentInterval >= 100) {
                        currentInterval+=100;
                    }
                    setTimeout(animate, currentInterval);
                } 
                if(elapsedTime === 10000) {
                    setAnimationActive(false); 
                }
            };
            animate();
        }
    }
    
    

    return (
        <div>
            <Header/>
            <div id="openBox" style={backgroundStyle}>
                <div id="box">
                    <div className="data_box">
                    <p>Nazwa: {skrzynka.nazwa}</p>
                    <p>Cena: {skrzynka.cena}</p>
                    <img src={skrzynka.img} alt={skrzynka.nazwa} />
                    <div>
                        {test === null || test === undefined ? (
                            <p style={logoStyle}>Zaloguj sie żeby otworzyć tą skrzynkę !</p>
                            ) : (
                            <button onClick={startAnimation} id="btn_open">Otwórz</button>
                        )}
                        {balans < skrzynka.cena && <p style={logoStyle}>Nie masz siana stary/stara !</p>}
                    </div>
                    </div>      
                <div id="animation">
                {Array.from({ length: 7 }).map((_, i) => {
                            const index = (currentIndex + i) % names.length;
                            //console.log("nazwa broni " + names2[index])
                            return (
                                <div 
                                    id={i === 3 ? "special" : "one_photo_box" } 
                                    ref={specialElementRef}
                                >
                                    <img
                                        className="header_photos"
                                        src={names[index]}
                                        alt={`Zdjęcie ${index + 1}`}
                                        style={{ width: '15vh', height: 'auto' }}
                                    />
                                    <p>{names2[index]}</p>
                                </div>
                            );
                        })}
                </div>
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
