import Lang from '../Lang/Lang';
import Logo from '../Logo/Logo';
import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--flex-column">
        <div className="footer__container-link">
            <ul>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
            </ul>
            <ul>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
            </ul>
            <ul>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
            </ul>
            <ul>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Service</a></li>
            </ul>
            <ul>
                <li><Logo/></li>
                <li><p>Likeconvert - is perfect tools for your requirements</p></li>
                <li><ul className='flex-row'>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Linked in</li>
                    </ul></li>
                <li><Lang/></li>
                
            </ul>
        </div>
        <div className="footer__copyright">
            <p className="copyright__main-info">
                Likeconvert Inc. All right is reserved. 2022-2024
            </p>
            <p className="copyright__powered-by">
                Powered by Andrii Topii
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
