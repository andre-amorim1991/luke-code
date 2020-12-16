import React from 'react';

import './styles.css';
import './stylo.css';

import separator from '../../assets/images/separator.svg';
import yoda from '../../assets/images/characters/yoda.png';

const Home = () => {
    return (
        <>
            <div className="section-1">
                <div className="container">
                    <header className="header">
                        <h2>Luke code</h2>
                        <nav>
                            <button>
                                Fazer Login
                            </button>
                            <button>
                                Inscreva-se
                            </button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <div className="Star2Change">
                                
                            </div>
                            <h1>Torne-se um mestre <br /> da programação!</h1>
                            <img src={separator} alt="" />
                            <p>
                                De o próximo passo para o seu futuro, <br />
                                que a força esteja com você.
                            </p>
                        </section>
                        <section>
                            <img src={yoda} alt="Mestre Yoda com sabre de luz" />
                        </section>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Home;