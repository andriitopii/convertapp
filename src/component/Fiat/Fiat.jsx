import { useEffect, useRef, useState } from 'react';
import './Fiat.scss'
import { compileString } from 'sass';
const Fiat = () => {
    const [valFirstInput, setValueFirstInput] = useState(0)
  const myRef = useRef(null)
  useEffect(()=>{
    console.log(valFirstInput);
  },[valFirstInput]);
    return ( <>
    <div className="fiat__converter">
    <label for="from">From</label>
    <select className='fiat__input-main' name="from" id="" >
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="EUR">USD</option>
        
    </select>
    <input className='fiat__input-main' ref={myRef} onChange={()=>setValueFirstInput(myRef.current.value)}type="number" placeholder="0" />
    <button type="button" className='fiat__btn-change'>Change</button>
    <label for="to">To</label>
    <select className='fiat__input-main' name="to" id="">
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="EUR">USD</option>
    </select>
    <input className='fiat__input-main' type="number" placeholder="0" />
    </div>
    <div className="fiat__news">
        <h1>Last news</h1>
        <article className='fiat__news-card'>
            <img src="" alt="" />
            <h1>Usd fall</h1>
            <p>askjdhfgsjdhf asjdhfgsadhjgf</p>
        </article>
    </div>
    </> );
}
 
export default Fiat;