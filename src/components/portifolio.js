import React from 'react';
import { useInView } from 'react-intersection-observer';
import './portifolio.css';
import Notbook from '../svg/nootbook.jpg';

const Portifolio = () => {
  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: itemRef, inView: itemInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id='Portifolio' ref={containerRef} className={`portifolio-container ${containerInView ? 'visible' : ''}`}>
      <p className='tittle-visaogeral'>Portfólio</p>
      <div className='portifolio-list'>
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className={`item-portifolio animate-fadeInUp ${itemInView ? 'visible' : ''}`}
            ref={itemRef}
          >
            <div>
              <img className='image-portifolio' src={Notbook} alt={`Portfolio Item ${item}`} />
            </div>
            <div className='text-porfiolio'>
              <div>
                <p className='tittle-portifolio'>Nome</p>
                <p className='subtittle-portifolio'>Descrição</p>
              </div>
              <div>
                <button className='button-view'>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portifolio;
