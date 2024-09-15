import './App.css';
import backgroundcor from './svg/sdad.svg';
import propgam from './svg/LP4txKD9OR7MTvn2N40g1GN8Nk-_1_.jpg';
import star from './svg/star3.svg';
import setting from './svg/plus3.svg';
import angular from './svg/program/angular.svg';
import css from './svg/program/css.svg';
import html from './svg/program/html.svg';
import java from './svg/program/java.svg';
import javascript from './svg/program/javascript.svg';
import next from './svg/program/next.svg';
import nodejs from './svg/program/nodejs.svg';
import npm from './svg/program/npm.svg';
import react from './svg/program/react.svg';
import Notbook from './svg/nootbook.jpg'
import Logo from './svg/logo.svg'
import Mulher from './svg/5QEw8TrFCLxDzHvd1rg8XSvxA (1).jpg'
import Backgroundorcamento from './svg/WfZf3UaSuBa4dHRJjWVoBEzc8.jpg'
import Done from './svg/done3.png'
function App() {
  const images = [
    javascript,
    angular,
    css,
    html,
    java,
    next,
    nodejs,
    npm,
    react,
    angular,
    css,
    html,
    javascript,
    nodejs,
    npm,
    java,
    next,
    react
  ];

  return (
    <div className="Container">
      <nav>
        <div className='navbar-container'>
          <img className='logo-codecrows' src={Logo} alt="" width={75} />
          <ul className='list-navbar'>
            <li><a className='list-nav' href="#Home">Home</a></li>
            <li><a className='list-nav' href="#Beneficios">Beneficios</a></li>
            <li><a className='list-nav' href="#Portifolio">Portifolio</a></li>
            <li><a className='list-nav' href="#visaogeral">Quem Somos?</a></li>
          </ul>
          <div className="svg-wrapper">
            <span className='button-navbar'>Começar</span>
          </div>
        </div>
      </nav>

      <div id='Home'>
        <div id='background-home'>
          <div>
            <p className='text-home'>CodeCrows - Transformando Ideias em Soluções <br /> Digitais</p>
            <p className='texttwo-home'>Do planejamento ao lançamento, oferecemos suporte em cada etapa do desenvolvimento do <br /> seu website.</p>
          </div>
          <div className='buttons-home'>
            <button className='button-comecar'>Começar</button>
            <button className='button-saber'>Saber mais</button>
          </div>
        </div>
      </div>

      <div id='Beneficios' className='sobresos'>
        <div className='sobrenos-text'>
          <div>
            <img className='propgam' src={propgam} alt="" />
          </div>
          <div>
            <div className='tittle-propgam'>
              <p className='text-propgam'>Código é mais do que lógica, é a arte de transformar ideias em realidade.</p>
            </div>
            <div>
              <div className='icon-quality'>
                <img src={setting} alt="" />
                <p className='quality-propgam'>Eficiência</p>
              </div>
              <p className='text-quality'>-Nossa equipe entrega resultados rápidos e de alta qualidade, otimizando processos para garantir que cada projeto seja concluído dentro do prazo e com excelência.</p>
            </div>
            <div>
              <div className='icon-quality'>
                <img src={star} alt="" />
                <p className='quality-propgam'>Inovação</p>
              </div>
              <p className='text-quality'>-Nossa agência está sempre em busca de novas tecnologias e ideias criativas para desenvolver soluções exclusivas que impulsionam o sucesso de nossos clientes.</p>
            </div>
            <div>
              <div className='icon-quality'>
                <img src={Done} alt="" />
                <p className='quality-propgam'>Personalização</p>
              </div>
              <p className='text-quality'>-Nossa equipe se dedica a entender suas necessidades específicas e a criar soluções sob medida que se alinham perfeitamente aos seus objetivos e visão. Cada projeto é adaptado para refletir sua identidade única.</p>
            </div>
          </div>
        </div>
      </div>

      <div id='Portifolio'>
        <div className='portifolio-container'>
          <p className='tittle-visaogeral'>Portifolio</p>
          <div className='portifolio-list'>
            <div className='item-portifolio'>
              <div>
                <img className='image-portifolio' src={Notbook} alt="" />
              </div>
              <div className='text-porfiolio'>
                <div>
                  <p className='tittle-portifolio'>Nome</p>
                  <p className='subtittle-portifolio'>Descriçao</p>
                </div>
                <div>
                  <button className='button-view'>View</button>
                </div>
              </div>
            </div>
            <div className='item-portifolio'>
              <div>
                <img className='image-portifolio' src={Notbook} alt="" />
              </div>
              <div className='text-porfiolio'>
                <div>
                  <p className='tittle-portifolio'>Nome</p>
                  <p className='subtittle-portifolio'>Descriçao</p>
                </div>
                <div>
                  <button className='button-view'>View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='visaogeral' className="visaogeral">
        <p className='tittle-visaogeral'>Visao Geral</p>
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
            <span className='button-navbar'>Orçamento</span>
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
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#beneficios">Benefícios</a></li>
              <li><a href="#quemsomos">Quem Somos?</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="https://facebook.com" aria-label="Facebook" className="social-icon facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://instagram.com" aria-label="Instagram" className="social-icon instagram"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://twitter.com" aria-label="Twitter" className="social-icon twitter"><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CodeCrows. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
