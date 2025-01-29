import { useId, useState } from 'react';
import './App.css';
import KunstA from './components/KunstA';
import KunstB from './components/KunstB'

function App() {
    const id_input = useId();
    const id_textbox = useId();
    const [input, setInput] = useState();
    const [textbox, setTextbox] = useState();

    const changePage = () => {
        if(input === "Marcelo Fernandes"){
            if(textbox === "uRp2r6W2ouL4"){
                console.log("grep")
                window.location.href = '/mansao'
            }
        }
    }

    const goToLucca = () => {
        window.scroll({
            top: 0
        })
    }

    const goToFK = () => {
        window.scroll({
            top: 790
        })
    }

    const goToContato = () => {
        window.scroll({
            top: 7000
        })
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
                        <a href='#Lucca' onClick={goToLucca}>Lucca Kunst</a>
                        <a href='#FK' onClick={goToFK}>Família Kunst</a>
                        <a href='#Contato' onClick={goToContato}>Contato</a>
                    </ul>
                </div>
            </div>
            <div className='lucca'>
                <KunstA pessoa='lucca' />
            </div>
            <div className='fk'>
                <hr />
                <div className='title'>Família Kunst</div>
                <KunstB pessoa='albert' />
                <KunstA pessoa='klaus' />
                <KunstB pessoa='heinrich' />
                <KunstA pessoa='emilia' />
            </div>
            <div className='contato'>
                <hr />
                <div className='title'>Contato</div>
                <form className="container-input">
                    <div className="mini-container-input">
                        <div className="subtitle">Nome:</div>
                        <input id={id_input} value={input} onInput={e => setInput(e.target.value)}/>
                    </div>
                    <div className="mini-container-input">
                        <div className="subtitle">Mensagem:</div>
                        <textarea id={id_textbox} value={textbox} onInput={e => setTextbox(e.target.value)} onChange={changePage()}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App;
