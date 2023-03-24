import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <h5 className='footer__copy'>&copy; {new Date().getFullYear()}</h5>
        </footer>
    );
  }
  
  export default Footer;