import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import './navBar.css'


const Enlace = styled.a`
    display: block;
    text-decoration: none;
    color: black;
    padding: 2vh;
    &:hover {
        cursor: pointer;
        background-color: #dba932a0;
        transition: width 1s, height 2s;
        transition-delay: 0.5s;
        border-radius: 5px;
    }
`

const DivC = styled.div`
    margin: 2vh;
`

const HamburguerIcon = styled.svg`
    width: 50px;
    height: 50px;
    
`

const NavBar = () => {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu);
    }
    

  return (
    <>
    <div className={`divNav ${ menu ? 'isActive' : ''}`}>
        <DivC>
            <p>Cristian Castro <span>FullStack Developer</span> </p>
            
            
        </DivC>

        <button 
            onClick={toggleMenu}
            className={`button-css  ${ menu ? 'bottonActive' : ''}`}>
                <HamburguerIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </HamburguerIcon>
        </button>

    </div>
    
    <section data-aos='slide-down'>
        <nav className={`ul-flex ${menu ? 'menuActive' : ''}`}>

        <ul className='listFull'>
            <li>
                <Enlace href="#portfolio">Portfolio</Enlace>
            </li>
            <li>
                <Enlace href="#skillset">Skill Set</Enlace>
            </li>
            <li>
                <Enlace href="#contact">Contact</Enlace>
            </li>
        </ul>

        </nav>
    </section>
        </>
        )
}

export default NavBar