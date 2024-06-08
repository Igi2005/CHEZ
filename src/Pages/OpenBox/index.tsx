import { useLocation, useNavigate  } from "react-router-dom";
import { Header } from "../../Components/Header";
import { useEffect, useState,useRef  } from "react";
import axios from "axios";
import { Footer } from "../../Components/Footer";
import "./OpenBox_style.scss"
import { BiColor } from "react-icons/bi";
import backgroundImage from '../../assets/background.png'; 
import audio1 from '../../assets/CS_GO Case + Knife Opening Sound Effect.mp3'
export function OpenBox() {
        
    const location = useLocation();
    const { index } = location.state || { index: 0 };
    const [skrzynka, setSkrzynka] = useState<any>({});
    const [bronie, setBronie] = useState<any[]>([]);
    const [clearData, setClearData] = useState<any[]>([]);
    const [test, setTest] = useState<any>(null);
    const [balans, setBalas] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationActive, setAnimationActive] = useState(false);
    const [test2, setTest2] = useState(true);
    const specialElementRef = useRef<HTMLDivElement | null>(null);
    const [shuffledNames, setShuffledNames] = useState<string[]>([]);
    const [shuffledNames2, setShuffledNames2] = useState<string[]>([]);
    const [action, setAction] = useState(false)
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:3000/openbox/${index}`)
            .then(res => {
                setSkrzynka(res.data.img);
                setBronie(res.data.data);
                setClearData(res.data.data);

                const names = [];
                const names2 = [];
                const bronie = res.data.data;

                for (let i = 0; i < bronie.length; i++) {
                    names.push(bronie[i].img);
                    names2.push(bronie[i].name);
                }

                for (let i = names.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [names[i], names[j]] = [names[j], names[i]];
                    [names2[i], names2[j]] = [names2[j], names2[i]];
                }

                setShuffledNames(names);
                setShuffledNames2(names2);
                
            })
            .catch(error => {
                console.error('Błąd serwera: ', error.message); 
            });
        
    }, []);

    useEffect(()=>{
        //console.log("wywołanie useEFECT")
        if(animationActive == false && test2 == false){

            const p1 = document.querySelector('.special')?.querySelector('p')
            console.log(p1?.outerHTML)         
            let obj = null
            for(let i = 0; i < clearData.length; i++) {
                if(clearData[i].name == p1?.textContent) {
                    obj = clearData[i]
                    console.log("\t obj to " + obj.name)
                }
            }
            const Data = {
                item: obj
            }
            
            if(obj != null) {
                axios.post('http://localhost:3000/adddata',Data)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.error('Błąd serwera: ', error.message);
                });
            }
            const send = p1?.textContent
            console.log("send to " + send)
            setTest2(true)
            setAction(true)
            
        }
    }, [animationActive, test2, clearData, navigate])

    useEffect(() => {
        if (action) {
            const p1 = document.querySelector('.special')?.querySelector('p')
            const send = p1?.textContent
            navigate('/user', { state: {send} });
        }
    }, [test2, action, navigate]);

    
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
        
    const logoStyle = {
        color : 'red'
    };

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
      };

    //console.log("balans to " + balans + "cena to "  + skrzynka.cena)
    function startAnimation(){
        if(Number(balans) >= skrzynka.cena && test2 == true) {
            const saldo:number = balans - skrzynka.cena;
            setBalas(saldo);
            //console.log("-------------->" + saldo)
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

                setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledNames.length);
                const elapsedTime = Date.now() - animationStartTime;
                if (elapsedTime < 10000) { 
                    //console.log("elapsed time to " + elapsedTime)
                    if(currentInterval < 100) {
                        currentInterval+=1;
                    }
                    if(currentInterval >= 100) {
                        currentInterval+=100;
                    }
                    setTimeout(animate, currentInterval);   
                } 
                if(elapsedTime >= 10000) {
                    console.log("elapsed" + elapsedTime)
                    
                    console.log("elapsedTime == 10000")
                    setAnimationActive(false);
                    setTest2(false) 
                }
            };
            /*const audio = new Audio(audio1);
            audio.play();*/
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
                    <p>Cena: {skrzynka.cena} Saldo po otwarciu to {balans - skrzynka.cena}</p>
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
                            const index = (currentIndex + i) % shuffledNames.length;
                            return (
                                <div
                                    className={i === 3 ? "special" : "one_photo_box"}
                                    ref={i === 3 ? specialElementRef : null}
                                    key={i}
                                >
                                    <img
                                        className="header_photos"
                                        src={shuffledNames[index]}
                                        alt={`Zdjęcie ${index + 1}`}
                                        style={{ width: '15vh', height: 'auto' }}
                                    />
                                    <p className={i > 0 && i < 7 ? "specialText" : "puste"}>{shuffledNames2[index]}</p>
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
