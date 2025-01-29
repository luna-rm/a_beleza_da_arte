import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import './Kunst.css'

function Kunst(props) {
    const pessoa = props.pessoa;
    const imagem = useRef();
    const [nome, setNome] = useState();
    const [subtitle, setSubtitle] = useState();
    const [texto, setTexto] = useState();
    const [texto2, setTexto2] = useState();
    const [texto3, setTexto3] = useState();
    const [frase, setFrase] = useState();

    useEffect(() => {
        setNome("");

        if(pessoa === 'lucca'){
            setNome('Lucca Kunst');
            setSubtitle('Berlim, Alemanha - 2005');
            setFrase('“Apenas através do sentimento mais puro a perfeição será alcançada”')
            setTexto('O novo nome das artes já é reconhecido em todo o mundo, sendo o pintor mais novo a ganhar o Prémio de Arte do Luxemburgo, nada que não fosse esperado do mais novo descendente da família Kunst. Em suas pinturas, Lucca Kunst traz a mais pura representação do desespero e medo, trazendo um rompimento do real e do falso em artes incríveis.')
            setTexto2('Mesmo passando quase nenhum tempo com seu pai adotivo, Albert Kunst, Lucca seguiu o caminho da família nas artes, cursando artes plásticas na Fundação Calouste Gulbenkian em Paris e conseguindo sua primeira exposição com apenas dezessete (17) anos.')
            setTexto3('')
            imagem.current.src = require('../imgs/lucca_kunst.png')
        }

        if(pessoa === 'albert'){
            setNome('Albert Kunst');
            setSubtitle('Berlim, Alemanha - 1921, 2008');
            setFrase('“Assim seremos eternos”')
            setTexto('Albert foi um dos precursores da tecnologia no mundo, inovando com a criação e desenvolvimento das primeiras inteligências artificiais (IAs) que eram lindas por si só. Nunca cursou nenhuma faculdade de artes, afinal seu estilo era único e extravagante, se tornando um artista apenas no final de sua vida.')
            setTexto2('O programador se casou em 1971 com Ella “St3ll3” Meier (1927, 2008), uma parceira de trabalho de Albert e ambos tiveram uma vida feliz, existem relatos que Ella que incentivou ele continuar a linhagem de artistas. Ambos adotaram Lucca em 2003.')
            setTexto3('')
            imagem.current.src = require('../imgs/albert_kunst.png')
        }

        if(pessoa === 'klaus'){
            setNome('Klaus Kunst');
            setSubtitle('Berlim, Alemanha - 1884, 1940');
            setFrase('“Não preciso de olhos pra ver sua perfeição”')
            setTexto('Mesmo quando um pequeno garoto, Klaus foi ensinado por seu pai, Heinrich Kunst, a beleza da artes e, assim, mesmo com a sua complicação se tornou um renomado artista de sua época, com quadros representando o pavor da cegueira, da morte e como todos estão fadados a retornar ao pó.')
            setTexto2('Todavia, quando envelheceu, parou de pintar sem nunca contar o porque, psicólogos, lendo as cartas que Klaus deixou após sua morte, o diagnosticaram com uma grave depressão. Suas obras sempre estarão em nossas memórias. Telefone Centro de Valorização a Vida: 188.')
            setTexto3('')
            imagem.current.src = require('../imgs/klaus_kunst.png')
        }

        if(pessoa === 'heinrich'){
            setNome('Heinrich Kunst');
            setSubtitle('Dresden, Alemanha - 1847, 1899');
            setFrase('“Deus chegou a realidade para mostrar suas criações”')
            setTexto('Conhecido como muitos como Vincent von Gore, Heinrich Kunst foi o primeiro de sua família a fazer sucesso, construindo o sobrenome Kunst através de esculturas extremamente realistas e grotescas, mostrando animais com órgãos para fora e mesclas de seres, sendo a primeira vista impossível de distinguir do real.')
            setTexto2('Segundo anotações de Heinrich, o mesmo se tornou um artista ao observar a obra de vida de sua mãe, Emilia Kunst, e se encantar pelos detalhes e perfeições.')
            setTexto3('')
            imagem.current.src = require('../imgs/heinrich_kunst.png')
        }

        if(pessoa === 'emilia'){
            setNome('Emilia Kunst');
            setSubtitle('Dresden, Alemanha - 1801, 1866');
            setFrase('“Só quero terminar isso […]”')
            setTexto('Emilia foi a primeira da linha de artistas da família Kunst, segundo anotações da mesma, pintar, esculpir e escrever era o seu destino. Todavia, Emilia apenas foi fazer sucesso após sua morte com seu filho espalhando sua arte ao mundo, visto que em vida ela nunca vendeu um quadro sequer.')
            setTexto2('A artista foi considerada louca por sua família e é estimado que desde dos seus vinte e quatro (24) anos foi internada em um hospital psiquiátrico. E mesmo sem apoio da família, mesmo sem nunca ter feito dinheiro com arte, mesmo internada, não desistiu do seu destino. ')
            setTexto3('Até onde se sabe, Emilia nunca se casou.')
            imagem.current.src = require('../imgs/emilia_kunst.png')
        }

        console.log(imagem)
    }, []);
    

    return (
        <div className='contentB'>
            <div className='textB'>
                <div className='titleB'>{nome}</div>
                <div className='subtitleB'>{subtitle}</div>
                <div className='fraseB'>{frase}</div>
                <div className='alotoftextB'>{texto}</div>
                <div className='alotoftextB'>{texto2}</div>
                <div className='alotoftextB'>{texto3}</div>
                <div className='vejaArtesB'>Veja Artes de {nome}</div>
            </div>
            <img ref={imagem} alt={nome} />
        </div>
    )
}

export default Kunst
