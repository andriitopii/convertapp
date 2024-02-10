import { useEffect, useRef, useState } from "react";
import exchange from "./img/exchange.svg";
import "./Fiat.scss";
import { compileString } from "sass";
import FiatNews from "../FiatNews/FiatNews";
const Fiat = () => {
  const [loadingComponen, setLoadingComponent] = useState(false);
  const [data, setData] = useState(undefined);
  const [from, setFrom] = useState("USD");
  const [valueFrom, setValueFrom] = useState(0);
  const [to, setTo] = useState("EUR");
  const [valueTo, setValueTo] = useState(0);

  //Get dat
  useEffect(() => {
    async function getData() {
      const responce = await fetch(
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
      );
      const data = await responce.json();
      setData(data);
      if (data) {
        setLoadingComponent(true);
      }
    }

    getData();
  }, []);
  // Change
  const exChange = () => {
    setFrom(to);
    setTo(from);
  };
  useEffect(() => {
    function calculating(value, from, to) {
      if (from === to) {
        setValueTo(value);
      } else if (from === "UAH") {
        switch (to) {
          case "EUR":
            data.forEach((item) => {
              if (item.cc === "EUR") {
                setValueTo(value / item.rate);
              }
            });
            break;
          case "USD":
            data.forEach((item) => {
              if (item.cc === "USD") {
                setValueTo(value / item.rate);
              }
            });
            break;
        }
      } else if (to === "UAH") {
        data.forEach((item) => {
          switch (item.cc) {
            case "USD":
              setValueTo(value * item.rate);
              break;
            case "EUR":
              setValueTo(value * item.rate);
              break;
          }
        });
      } else {
        const objFrom = data.filter((item) => {
          return item.cc === from;
        });
        const objTo = data.filter((item) => {
          return item.cc === to;
        });

        setValueTo(value*(objFrom[0].rate /objTo[0].rate))
      }
    }

    if (data === undefined) {
      return;
    } else calculating(valueFrom, from, to);
  }, [valueFrom, from, to]);
  return (
    <>
      {!loadingComponen ? (
        <span className="loader"></span>
      ) : (
        <>
          <div className="fiat__converter">
            <div className="fiat__col">
              <div className="fiat__col-row fiat__col-row--gap">
                <div className="fiat__col">
                  <label htmlFor="from">From</label>
                  <select
                    className="fiat__input-main"
                    value={from}
                    name="from"
                    id="3"
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
                <div className="fiat__col">
                  <label htmlFor="to">To</label>
                  <select
                    className="fiat__input-main"
                    value={to}
                    name="to"
                    id=""
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>

              <input
                className="fiat__input-main"
                value={valueFrom}
                type="number"
                placeholder="0"
                onChange={(e) => setValueFrom(e.target.value)}
              />
            </div>
            <button type="button" className="fiat__btn-change">
              <img src={exchange} onClick={exChange} />
            </button>
            <div className="fiat__col">
              <h1>
                {valueFrom} {from} in {to} - {valueTo.toFixed(2)}{" "}
              </h1>
            </div>
          </div>
          <FiatNews currentMoney={from} />
        </>
      )}
    </>
  );
};

export default Fiat;
