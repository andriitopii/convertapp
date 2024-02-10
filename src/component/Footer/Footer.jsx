import Lang from '../Lang/Lang';
import Logo from '../Logo/Logo';
import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
        <div className='container container--justify-between'>
        <p className="copyright__main-info">
                Likeconvert Inc. All right is reserved. 2022-2024
            </p>
            <p className="copyright__powered-by">
                Powered by Andrii Topii
            </p>
            <select name="" id="">
                <option value="UA">Українська</option>
                <option value="ENG">English</option>
                <option value="PL">Polski</option>
            </select>
            <Logo/>
        </div>
            
    </footer>
  );
};

export default Footer;
