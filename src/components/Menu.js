import logo from '../assets/imgs/logo2white.png'
import Home from './Home';
import Characters from './Characters';

function Menu({handleComponent}) {
    return (
        <nav className="container" id="navbar">
           <img src={logo} alt="" id="logo" onClick={() => handleComponent(<Home key={'home'}/>)}/>
            <ul id="menu">
                <li className="menu-item" onClick={() => {handleComponent(<Home key={'home'}/>)}}>Home</li>,
                <li className="menu-item" onClick={() => {handleComponent(<Characters key={'characters'}/>)}}>Characters</li>
            </ul>
        </nav>
    )
}

export default Menu;