import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "./App.scss";
import Fiat from "../Fiat/Fiat";
const App = () => {
    const cookies = new Cookies();
    const [currentMode, setCurrentMode] = useState(cookies.get('currentMode')||'FIAT');
    const [currentTabs, setCurrentTabs] = useState(null);
    cookies.set('currentMode', currentMode, {path: '/'})
    useEffect(()=>{
        if(currentMode === 'FIAT'){
            let e = document.getElementById('app-default-tabs1');
            setCurrentTabs(e);
            e.classList.add('app__tab--active')
        } else if(currentMode === 'CRYPTO'){
            let e = document.getElementById('app-default-tabs2');
            setCurrentTabs(e);
            e.classList.add('app__tab--active')
        } else{
            let e = document.getElementById('app-default-tabs3');
            setCurrentTabs(e);
            e.classList.add('app__tab--active')
        }
    },[]);
    const modeSwitch = (e) =>{
       let element = e.target;
        currentTabs.classList.remove('app__tab--active')
        setCurrentTabs(e.target)
        element.classList.add('app__tab--active')
    }
    return ( <section>
        <div className="container">
            <div className="app">
                <div className="app__header">
                   <button id="app-default-tabs1" className="app__tab" type="btn" onClick={(e) => {setCurrentMode('FIAT');modeSwitch(e)}}>Fiat</button>
                   <button id="app-default-tabs2" className="app__tab" type="btn" onClick={(e) => {setCurrentMode('CRYPTO');modeSwitch(e)}}>Crypto</button>
                   <button id="app-default-tabs3" className="app__tab" type="btn" onClick={(e) => {setCurrentMode('TIME');modeSwitch(e)}}>Time & Date</button>
                </div>
                <div className="app__main fiat">
                {currentMode === 'FIAT' && <Fiat/>}
                {currentMode === 'CRYPTO' && 'CRYPTO'}
                {currentMode === 'TIME' && 'TIME'}

                
                </div>
            </div>
        </div>
    </section> );
}
 
export default App;