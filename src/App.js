import './App.css';
import angular from './svg/program/angular.svg';
import css from './svg/program/css.svg';
import html from './svg/program/html.svg';
import java from './svg/program/java.svg';
import javascript from './svg/program/javascript.svg';
import next from './svg/program/next.svg';
import nodejs from './svg/program/nodejs.svg';
import npm from './svg/program/npm.svg';
import react from './svg/program/react.svg';
import Logo from './svg/logo.svg';
import Beneficios from './components/beneficio';
import Portifolio from './components/portifolio';
import React, { useEffect, useState } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const images = [
    javascript, angular, css, html, java, next, nodejs, npm, react,
    angular, css, html, javascript, nodejs, npm, java, next, react
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="Container">
      <nav className={fadeIn ? 'fade-in' : ''}>
        <div className='navbar-container'>
          <img className='logo-codecrows' src={Logo} alt="Codecrows Logo" width={75} />

          <div className='menu-toggle' onClick={toggleMobileMenu}>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </div>

          <ul className={`list-navbar ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a className='list-nav' href="#Home">Home</a></li>
            <li><a className='list-nav' href="#Beneficios">Benefícios</a></li>
            <li><a className='list-nav' href="#Portifolio">Portfólio</a></li>
            <li><a className='list-nav' href="#visaogeral">Quem Somos?</a></li>
          </ul>

          <div className="svg-wrapper">
            <span className='button-navbar'>Começar</span>
          </div>
        </div>
      </nav>
      <div id='Home' className={fadeIn ? 'fade-in' : ''}>
        <div id='background-home'>
          <div>
            <p className='text-home'>CodeCrows - Transformando Ideias em Soluções Digitais</p>
            <p className='texttwo-home'>
              Do planejamento ao lançamento, oferecemos suporte em cada etapa do desenvolvimento do seu website.
            </p>
          </div>
          <div className='buttons-home'>
            <button className='button-comecar'>Começar</button>
            <button className='button-saber'>Saber mais</button>
          </div>
        </div>
      </div>

      <Beneficios />

      <Portifolio />

      <div id='visaogeral' className="visaogeral">
        <p className='tittle-visaogeral'>Visão Geral</p>
        <div className="visaogeral-container">
          <div className="large-box">
            <div className='item-large'>
              <div className='carrosel-direita'>
                <div className="slider">
                  <div className="track">
                    {images.map((image, index) => (
                      <div className="element" key={index}>
                        <img src={image} alt={`Icon ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='carrosel-direita'>
                <div className="slider">
                  <div className="track-two">
                    {images.map((image, index) => (
                      <div className="element" key={index}>
                        <img src={image} alt={`Icon ${index}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='two-lager'>
              <p className='title-large'>As melhores linguagens e tecnologia do mercado</p>
              <p className='text-large'>Ferramentas mais inovadoras e eficazes para transformar suas ideias em realidade.</p>
            </div>
          </div>
          <div className="row">
            <div className="small-box" id='small-one'>
              <div>
                <div className='text-smallbox'>
                  <div>
                    <p className='tittle-smallbox'>Transforme Suas Ideias em Realidade</p>
                  </div>
                  <div>
                    <p className='texto-small'>Na Codecrows, criamos sites e aplicativos personalizados para atender às suas necessidades, com qualidade e eficiência.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="small-box" id='small-two'>
              <div>
                <div className='text-smallbox'>
                  <div>
                    <p className='tittle-smallbox'>Codecrows: Sua Parceira em Soluções Digitais</p>
                  </div>
                  <div>
                    <p className='texto-small'>Somos uma agência que desenvolve sites e aplicativos, focada em qualidade, inovação e resultados para o seu negócio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='Qualidade'>
        <div>
          <div>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div id='Formulario'>
        <div className='formulario--main'>
          <div className='texts-form'>
            <p className='text-formulario'>Crie seu site agora - sua presença online, em qualquer lugar, a qualquer hora!</p>
            <p className='texttwo-formulario'>Assuma o controle do seu projeto digital com a nossa agência de programação – sua solução completa para desenvolvimento e gestão de sites, onde quer que você esteja.</p>
          </div>
          <div>
            <button className='button-navbar'><i className="fab fa-whatsapp"></i><a className='whatsapp-link' href="https://wa.me/5531996864672?text=Boa%20tarde!%20Meu%20nome%20%C3%A9%20[Seu%20Nome].%20Estou%20interessado%20em%20conhecer%20melhor%20os%20servi%C3%A7os%20da%20CodeCrows.%20Gostaria%20de%20saber%20sobre%20or%C3%A7amentos%20e%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis.%20Agrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o%20e%20aguardo%20um%20retorno.%20Obrigado!"> Entrar em contato!</a></button>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-links">
          <div className="footer-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="footer-nav">
            <ul>
              <li><a className='list-nav' href="#Home">Home</a></li>
              <li><a className='list-nav' href="#Beneficios">Benefícios</a></li>
              <li><a className='list-nav' href="#Portifolio">Portfólio</a></li>
              <li><a className='list-nav' href="#visaogeral">Quem Somos?</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="https://www.tiktok.com/@codescrows" aria-label="TikTok" className="social-icon tiktok"><i className="fab fa-tiktok"></i></a></li>
            <li><a href="https://www.instagram.com/codescrows/" aria-label="Instagram" className="social-icon instagram"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://twitter.com" aria-label="Twitter" className="social-icon twitter"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://youtube.com" aria-label="YouTube" className="social-icon youtube"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CodeCrows. Todos os direitos reservados.</p>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
