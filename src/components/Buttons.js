import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { numberPages } from './states'

function Buttons({handlePage, counter}){
    return (
        <>
            {counter === 1 
            ? 
                ''
            :
                <button className="btn-pass" id="btn-pass-left"  onClick={() => handlePage('left')}><AiFillCaretLeft className="btn-pass-icon"/></button>
            }
            {counter === numberPages()
            ? 
                ''
            :
                <button className="btn-pass" id="btn-pass-right" onClick={() => handlePage('right')}><AiFillCaretRight className="btn-pass-icon"/></button>
            }
        </>
    )
}

export default Buttons;