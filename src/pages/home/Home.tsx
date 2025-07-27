import './Home.css'; 

function Home() {
    return (
        <>
            <div className="home-container">
                <div>
                    <div className="home-text-box">
                        <h2>Seja Bem Vinde!</h2>
                        <p>Expresse aqui seus pensamentos e opiniões</p>
                    </div>

                    <div className="home-image-box">
                        <img 
                            src="https://i.imgur.com/VpwApCU.png" 
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;