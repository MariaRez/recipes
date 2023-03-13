import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <span>&copy; {new Date().getFullYear()}</span>
        </footer>
    );
  }
  
  export default Footer;