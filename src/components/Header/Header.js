import './Header.css';
import facebook from '../../images/facebook-cat-tail-svgrepo-com.svg'
import instagram from '../../images/instagram-cat-tail-svgrepo-com.svg';
import whatsApp from '../../images/chat-message-cat-svgrepo-com.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
      <address className='social-media-links'>
        <a className='social-media-link' href="https://wa.me/qr/MMWAREFAW4N4O1">
          <img className='social-media-link-image' src={whatsApp} alt='WhatsApp'/>
        </a>
        <a className='social-media-link' href="https://www.instagram.com/m.sha.aa">
          <img className='social-media-link-image' src={instagram} alt='Instagram'/>
        </a>
        <a className='social-media-link' href="https://www.facebook.com/mariiareznik">
          <img className='social-media-link-image' src={facebook} alt='Facebook'/>
        </a>
      </address>
      <Navigation />
    </header>
  );
}

export default Header;
