import { useEffect, useState } from "react";

const FiatNews = (props) => {
  const curMoney = props.currentMoney;
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function getNews(a) {
      if (a === "USD") {
        const responce = await fetch(
          "https://gnews.io/api/v4/search?q=%D1%94%D0%B2%D1%80%D0%BE&lang=uk&country=ua&max=10&apikey=92da8fe36128cfea276fd472d561c47b"
        ).then((e)=>{if(e.status !== 200){
            setNews([]);
            
        }else{
            const newsData = responce.json();
            setNews(newsData.slice(1,10));
        }});

        
      } else if (a === "EUR") {
        const responce = await fetch(
          "https://gnews.io/api/v4/search?q=%D1%94%D0%B2%D1%80%D0%BE&lang=uk&country=ua&max=10&apikey=92da8fe36128cfea276fd472d561c47b"
        );
        const newsData = await responce.json();
        setNews(newsData);
      } else if (a === "UAH") {
        const responce = await fetch(
          "https://gnews.io/api/v4/search?q=%D0%B3%D1%80%D0%B8%D0%B2%D0%BD%D1%8F&lang=uk&country=ua&max=10&apikey=92da8fe36128cfea276fd472d561c47b"
        );
        const newsData = await responce.json();
        setNews(newsData);
      } else {
        setNews([]);
      }
    }
    getNews(curMoney);
  }, [curMoney]);

  const loaderNews = (
    <a href="#" className="fiat__news-card news-card">
      <div alt="" className="news-card__image news-card__image--loader"></div>
      <h1 className="news-card__title news-card__title--loader">
        НБУ встановив офіційний курс на 2 лютого
      </h1>
      <p className="news-card__desc news-card__desc--loader">
        <p>ddufh</p> <p>lodssfh</p> <p>lfidufh</p>{" "}
        <p>lodsfiddfh</p> <p>lufh</p> <p>loddsdufh</p>{" "}
        <p>sdufh</p>
        <p>loddssfh</p> <p>loufh</p>
        <p>ddufh</p> <p>lodssfh</p> <p>lfidufh</p>{" "}
      </p>
      <button className="news-card__button news-card__button--loader">Show more</button>
    </a>
  );

  const arrLoader = [
    loaderNews,
    loaderNews,
    loaderNews,
    loaderNews,
    loaderNews,
    loaderNews,
    loaderNews,
    loaderNews,
    loaderNews,
    loaderNews,
  ];
  return (
    <div className="fiat__news">
      <h1 className="fiat__title">Last News</h1>
      {news.length > 0 ? (
        <>
          {news.map((item) => {
            return (
              <a
                key={item.title}
                href={item.url}
                className="fiat__news-card news-card news-card--transition"
              >
                <img src={item.image} alt="" className="news-card__image" loading="lazy"/>
                <h1 className="news-card__title">{item.title}</h1>
                <p className="news-card__desc">{item.description}</p>
                <button className="news-card__button">Show more</button>
              </a>
            );
          })}
        </>
      ) : (
        <>{arrLoader.map((item) => item)}</>
      )}
    </div>
  );
};

export default FiatNews;
