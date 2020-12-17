import React from 'react';

import './styles.css';
// import './stylo.css';

import separator from '../../assets/images/separator.svg';
import yoda from '../../assets/images/characters/yoda.png';

import CourseReactRedux from '../../assets/images/courses/react-redux.jpg';
import CoursePhp from '../../assets/images/courses/php.jpg';
import CourseFlutter from '../../assets/images/courses/flutter.jpg';
import CardCourse from '../../componentes/CardCouse';

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
            <div className="section-2">
                <div className="container">
                    <h2>+3 Cursos Completos</h2>
                    <p>
                        Na Luke code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.
                    </p>
                    <section className="card-container">
                        <CardCourse image={CourseReactRedux} description="Desenvolvimento front-end React e Redux">
                            Desenvolvimento front-end <br /> React e Redux
                        </CardCourse>

                        <CardCourse image={CoursePhp} description="PHP 7 - Trabalhando com PSRs">
                            PHP 7 - Trabalhando com PSRs
                        </CardCourse>
                        
                        
                        <CardCourse image={CourseFlutter} description="Desenvolvimento IOS e Android com flutter">
                            Desenvolvimento IOS e Android <br/> com flutter
                        </CardCourse>
                        
                    </section>
                    <button>
                        Inscreva-se
                    </button>
                </div>
            </div>

            <div className="section-3">
                <div className="container">
                    <h2>Oque oeferecemos para você</h2>
                    <section className="categories-container">

                        <div className="category-card">
                            <div className="category-card-image">
                               
                            </div>
                            <div class="category-card-content">
                                 <h4>BACK-END</h4>
                                <p>22 Cursos</p>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Home;