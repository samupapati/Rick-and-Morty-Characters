import logo from '../assets/imgs/logo2white.png'
import Home from './Home';
import Characters from './Characters';
import Episodes from './Episodes';
import Locations from './Locations';

function Menu({activeComponent, handleComponent}) {
    const components = {
        home:   <li className="menu-item"><p className="menu-item-link" onClick={() => handleComponent(<Home key={'home'}/>)}>Home</p></li>,
        characters: <li className="menu-item"><p className="menu-item-link" onClick={() => handleComponent(<Characters key={'characters'}/>)}>Characters</p></li>,
        episodes:   <li className="menu-item"><p className="menu-item-link" onClick={() => handleComponent(<Episodes key={'episodes'}/>)}>Episodes</p></li>,
        locations:  <li className="menu-item"><p className="menu-item-link" onClick={() => handleComponent(<Locations key={'locations'}/>)}>Locations</p></li>
        
    }
    function handleItem(key){
        switch(key){
            default: 
                return '';
            case 'home':
                return (
                    <ul id="menu">
                       {components.characters}{components.episodes}{components.locations} 
                    </ul>
                )
            case 'characters':
                return (
                    <ul id="menu">
                       {components.home}{components.episodes}{components.locations} 
                    </ul>
                )
            case 'episodes':
                return (
                    <ul id="menu">
                       {components.home}{components.characters}{components.locations} 
                    </ul>
                )
            case 'locations':
                return (
                    <ul id="menu">
                       {components.home}{components.characters}{components.episodes} 
                    </ul>
                )
        }
    }
    
    return (
        <nav className="container" id="navbar">
           <img src={logo} alt="" id="logo"/>
            {handleItem(activeComponent.key)}
        </nav>

    )
}

export default Menu;