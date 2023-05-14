import './footer.css'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footerContainer' id='contact'>
        <p className='pFooter'>All Rights reserved</p>
      <ul className='footer'>
        <li >
          <a href="https://www.linkedin.com/in/cristian-castro-5a7679197/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='icon'/>
          </a>
        </li>
        <li >
          <a href="https://github.com/criscasguitar" target="_blank" rel="noopener noreferrer">
            <FaGithub className='icon'/>
          </a>
        </li>
        <li >
          <a href="https://twitter.com/criscasguitar" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='icon'/>
          </a>
        </li>
        <li >
          <a href="https://api.whatsapp.com/50671301104" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='icon'/>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
