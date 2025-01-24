import { useId, useState } from 'react';
import './App.css';

function App() {
    const id_input = useId();
    const id_textbox = useId();
    const [input, setInput] = useState();
    const [textbox, setTextbox] = useState();

    const changePage = () => {
        if(input === "Marcelo Fernandes"){
            if(textbox === "uRp2r6W2ouL4"){
                console.log("grep")
                window.location.href = '/rascunho'
            }
        }
    }

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>

            <div className='nav'>
                <div className='site_title'>
                    <a href='/'>A Beleza da Arte</a>
                </div>
                <div className='navigation-menu'>
                    <ul>
                        <a href='#Lucca'>Lucca Kunst</a>
                        <a href='#FK'>Família Kunst</a>
                        <a href='#Contato'>Contato</a>
                    </ul>
                </div>
            </div>
            <div className='content'>
{/*                 <hr />
 */}                <div className='title'>Contato</div>
                <form className="container-input">
                    <div className="mini-container-input">
                        <div className="subtitle">Nome:</div>
                        <input id={id_input} value={input} onInput={e => setInput(e.target.value)}/>
                    </div>
                    <div className="mini-container-input">
                        <div className="subtitle">Mensagem:</div>
                        <textarea id={id_textbox} value={textbox} onInput={e => setTextbox(e.target.value)} onChange={changePage()}/>
                    </div>
                    <a href='/' className="button">Enviar</a>
                </form>
            </div>
        </div>
    )
}

export default App;
