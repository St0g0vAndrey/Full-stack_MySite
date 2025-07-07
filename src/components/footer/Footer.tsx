import './Footer.css'

interface Footer_massage {
    text_footer: String;
}

const Footer = ({text_footer}: Footer_massage) => (
    <div className='footer'>
        <p>Copy &copy; {text_footer}</p>
    </div>
);
    
export default Footer;