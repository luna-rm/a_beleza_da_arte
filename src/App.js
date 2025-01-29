import { useId, useState, useRef } from 'react';
import './App.css';

function App() {
    const id_input = useId();
    const id_textbox = useId();
    const [input, setInput] = useState();
    const [textbox, setTextbox] = useState();

    const id_Lucca = useRef();
    const id_FK = useRef();
    const id_Contato = useRef();
    

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
            top: 375
        })
    }

    const goToContato = () => {
        window.scroll({
            top: 800
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
            <div className='lucca' ref={id_Lucca}>
                <div className='title' >Lucca Kunst</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae magna ac justo volutpat pulvinar id vel leo. Donec vitae malesuada arcu, a rhoncus mauris. Aenean tempus lacus vel laoreet feugiat. Fusce quis quam sed massa commodo consectetur. Sed mollis mattis neque, a dictum lectus euismod vel. Duis aliquam, tellus id tincidunt scelerisque, tellus purus accumsan sapien, condimentum accumsan sem nunc at ante. Aliquam nec erat sit amet orci aliquam elementum. Curabitur et purus lorem.Sed non nisl accumsan, aliquam nisi in, maximus neque. Suspendisse dui odio, commodo eget efficitur eu, imperdiet eu nunc. Integer libero dui, auctor non nibh ut, tincidunt porta metus. Nulla elementum eget felis vel dignissim. Quisque nibh neque, feugiat sit amet velit non, posuere aliquet velit. In aliquam convallis maximus. Integer magna metus, pharetra fermentum eleifend quis, pharetra sed tortor. Phasellus finibus, tellus vitae placerat ultrices, mi purus congue ex, eget blandit odio est eu lorem. Aenean sagittis neque urna, at maximus nibh ornare a. Proin sollicitudin quam eu dignissim tincidunt. Donec ex ligula, rutrum eu condimentum vel, rhoncus a ex. Donec et nulla congue, aliquam velit eu, euismod ex. Nam iaculis sem nec sagittis venenatis. Morbi rutrum elit id sem imperdiet ullamcorper.Nulla erat lacus, ornare quis pretium eu, suscipit ac lectus. Aliquam justo augue, convallis ultrices mi posuere, rhoncus iaculis tellus. Aliquam scelerisque orci et eleifend semper. Nam pharetra, nulla ut elementum eleifend, ante tellus euismod nunc, quis hendrerit mi tellus vitae magna. Sed nec interdum sapien, cursus aliquam arcu. Duis vel nibh dapibus, commodo libero non, fermentum neque. Morbi sed nisl eget ex ornare sodales vitae id nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed blandit leo. Nunc maximus libero non faucibus euismod. Proin est nulla, dictum sit amet odio sit amet, sollicitudin maximus nulla.
            </div>
            <div className='fk' ref={id_FK}>
                <hr />
                <div className='title'>Família Kunst</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae magna ac justo volutpat pulvinar id vel leo. Donec vitae malesuada arcu, a rhoncus mauris. Aenean tempus lacus vel laoreet feugiat. Fusce quis quam sed massa commodo consectetur. Sed mollis mattis neque, a dictum lectus euismod vel. Duis aliquam, tellus id tincidunt scelerisque, tellus purus accumsan sapien, condimentum accumsan sem nunc at ante. Aliquam nec erat sit amet orci aliquam elementum. Curabitur et purus lorem.Sed non nisl accumsan, aliquam nisi in, maximus neque. Suspendisse dui odio, commodo eget efficitur eu, imperdiet eu nunc. Integer libero dui, auctor non nibh ut, tincidunt porta metus. Nulla elementum eget felis vel dignissim. Quisque nibh neque, feugiat sit amet velit non, posuere aliquet velit. In aliquam convallis maximus. Integer magna metus, pharetra fermentum eleifend quis, pharetra sed tortor. Phasellus finibus, tellus vitae placerat ultrices, mi purus congue ex, eget blandit odio est eu lorem. Aenean sagittis neque urna, at maximus nibh ornare a. Proin sollicitudin quam eu dignissim tincidunt. Donec ex ligula, rutrum eu condimentum vel, rhoncus a ex. Donec et nulla congue, aliquam velit eu, euismod ex. Nam iaculis sem nec sagittis venenatis. Morbi rutrum elit id sem imperdiet ullamcorper.Nulla erat lacus, ornare quis pretium eu, suscipit ac lectus. Aliquam justo augue, convallis ultrices mi posuere, rhoncus iaculis tellus. Aliquam scelerisque orci et eleifend semper. Nam pharetra, nulla ut elementum eleifend, ante tellus euismod nunc, quis hendrerit mi tellus vitae magna. Sed nec interdum sapien, cursus aliquam arcu. Duis vel nibh dapibus, commodo libero non, fermentum neque. Morbi sed nisl eget ex ornare sodales vitae id nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed blandit leo. Nunc maximus libero non faucibus euismod. Proin est nulla, dictum sit amet odio sit amet, sollicitudin maximus nulla.
            </div>
            <div className='contato' ref={id_Contato}>
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
