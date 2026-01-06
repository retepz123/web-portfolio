import '../css-files/footer.css';
import fb from '../images/facebook.png';
import gmail from '../images/gmail.png';
import instagram from '../images/instagram.png';
import link from '../images/link.png';

function Footer() {
  return (
    <footer className='foot-container'>
      <div className='icon-container'>
      <a href='https://mail.google.com/mail/u/0/?fs=1&to=pedrojuana08@gmail.com&tf=cm' target='_blank'><img src={gmail} alt='gmail' className='soc-icons'></img> </a>
      <a href='https://www.facebook.com/ordeps.jonelag' target='_blank'><img src={fb} alt='facebook' className='soc-icons'></img> </a>
      <a href='https://www.instagram.com/retepznaj' target='_blank'><img src={instagram} alt='IG' className='soc-icons'></img> </a>
      <a href='https://www.linkedin.com/in/peter-john-galeno-855933367/' target='_blank'><img src={link} alt='LinkedIn' className='soc-icons'></img> </a>
      </div>
      <div>
        <p>©️ 2026 copyright Peter John Galeno</p>
      </div>
    </footer>
  );
}

export default Footer;