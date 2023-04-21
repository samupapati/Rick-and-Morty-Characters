import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"

function Buttons({handlePage}){
    return (
        <>
            <button className="btn-pass" id="btn-pass-left"  onClick={() => handlePage('left')}><AiFillCaretLeft className="btn-pass-icon"/></button>
            <button className="btn-pass" id="btn-pass-right" onClick={() => handlePage('right')}><AiFillCaretRight className="btn-pass-icon"/></button>
        </>
    )
}

export default Buttons;