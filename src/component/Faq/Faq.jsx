const Faq = () => {
    return ( <section>
        <div className="container">
            <div className="faq">
                <div className="faq__search">
                    <h1>F.A.Q</h1>
                    <input type="search" placeholder="Search"></input>
                </div>
                <div className="faq__favorite-faq favorite-faq">
                    <ul className="favorite-faq__faq-menu">
                        <li className=""></li>
                    </ul>
                </div>
                <div className="faq__result"></div>
            </div>
        </div>
    </section> );
}
 
export default Faq;