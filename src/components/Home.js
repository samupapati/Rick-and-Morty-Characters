import logo from '../assets/imgs/logo.png'

function Home(){
    console.log('renderizei')
    return(
        <div className="container" id="home">
            <div id='description'>
                <h1>Rick and Morty</h1>
                <p>Learn more about the cartoon</p>
            </div>
        </div>
    )
}

export default Home;