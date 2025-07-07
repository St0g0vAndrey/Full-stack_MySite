import './Button.css'

interface Settings_value {
    name: String;
    text_url: String;
}

const Button = ({name, text_url}: Settings_value) => (
    <div className='button_galery'>
        <button>
            <img src='{text_url}'></img>
            <p>{name}</p>
         </button>
    </div>
);

export default Button;