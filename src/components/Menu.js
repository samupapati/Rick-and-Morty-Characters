import logo from '../assets/imgs/logo2white.png'
import Home from './Home';
import Characters from './Characters';
import Episodes from './Episodes';
import Locations from './Locations';
import { useState } from 'react';

function Menu({activeComponent, handleComponent}) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    window.onresize = function(){
        setScreenWidth(window.innerWidth)
        if(screenWidth <= 550){
            document.getElementById('menu').childNodes.forEach(children => {
                children.classList.add('hide')
            })
        }
    }

    const components = {
        home:   <li className="menu-item" onClick={() => {
                            handleComponent(<Home key={'home'}/>)
                            showMenu()
                        }}
                >
                    Home
                </li>,
        characters: <li className="menu-item" onClick={() => {
                            handleComponent(<Characters key={'characters'}/>)
                            showMenu()
                        }}
                >
                    Characters
                </li>,
        episodes:   <li className="menu-item" onClick={() => {
                        handleComponent(<Episodes key={'episodes'}/>)
                        showMenu()
                        }}
                >
                    Episodes
                </li>,
        locations:  <li className="menu-item" onClick={() => {
                        handleComponent(<Locations key={'locations'}/>)
                        showMenu()
                        }}
                >
                    Locations
                </li>
    }

    function handleItem(key){
        switch(key){
            default: 
                return '';
            case 'home':
                return (
                    <>
                       {components.characters}{components.episodes}{components.locations} 
                    </>
                )
            case 'characters':
                return (
                    <>
                       {components.home}{components.episodes}{components.locations} 
                    </>
                )
            case 'episodes':
                return (
                    <>
                       {components.home}{components.characters}{components.locations} 
                    </>
                )
            case 'locations':
                return (
                    <>
                       {components.home}{components.characters}{components.episodes} 
                    </>
                )
        }
    }

    function showMenu(){
        if(screenWidth <= 550){
            document.getElementById('menu').childNodes.forEach(children => {
                children.classList.toggle('hide')
            })
        }
    }

    return (
        <nav className="container" id="navbar">
           <img src={logo} alt="" id="logo" onClick={() => {
                    handleComponent(<Home key={'home'}/>)
                    document.getElementById('menu').childNodes.forEach(children => {
                        children.classList.add('hide')
                    })
                }}
            />
                {screenWidth <= 550 
                ?
                    <div id="menu-btn" onClick={() => showMenu()}></div>
                :
                    ''
                }
            <ul id="menu">
                {handleItem(activeComponent.key)}
            </ul>
        </nav>

    )
}

export default Menu;