import Done from '../svg/done3.png';
import propgam from '../svg/LP4txKD9OR7MTvn2N40g1GN8Nk-_1_.jpg';
import star from '../svg/star3.svg';
import setting from '../svg/plus3.svg';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './beneficio.css';

const Beneficios = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: efficiencyRef, inView: efficiencyInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: innovationRef, inView: innovationInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: personalizationRef, inView: personalizationInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: ImgRef, inView: ImgInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div id='Beneficios' className='sobresos'>
            <div className='sobrenos-text'>
                <div
                    ref={ImgRef}
                    className={`animate-fadeInUp ${ImgInView ? 'visible' : ''}`}
                >
                    <img className='propgam' src={propgam} alt="" />
                </div>
                <div>
                    <div
                        ref={titleRef}
                        className={`tittle-propgam animate-fadeInUp ${titleInView ? 'visible' : ''}`}
                    >
                        <p className='text-propgam'>Código é mais do que lógica, é a arte de transformar ideias em realidade.</p>
                    </div>
                    <div
                        ref={efficiencyRef}
                        className={`animate-fadeInUp ${efficiencyInView ? 'visible' : ''}`}
                    >
                        <div className='icon-quality'>
                            <img src={setting} alt="" />
                            <p className='quality-propgam'>Eficiência</p>
                        </div>
                        <p className='text-quality'>Nossa equipe entrega resultados rápidos e de alta qualidade, otimizando processos para garantir que cada projeto seja concluído dentro do prazo e com excelência.</p>
                    </div>
                    <div
                        ref={innovationRef}
                        className={`animate-fadeInUp ${innovationInView ? 'visible' : ''}`}
                    >
                        <div className='icon-quality'>
                            <img src={star} alt="" />
                            <p className='quality-propgam'>Inovação</p>
                        </div>
                        <p className='text-quality'>Nossa agência está sempre em busca de novas tecnologias e ideias criativas para desenvolver soluções exclusivas que impulsionam o sucesso de nossos clientes.</p>
                    </div>
                    <div
                        ref={personalizationRef}
                        className={`animate-fadeInUp ${personalizationInView ? 'visible' : ''}`}
                    >
                        <div className='icon-quality'>
                            <img src={Done} alt="" />
                            <p className='quality-propgam'>Personalização</p>
                        </div>
                        <p className='text-quality'>Nossa equipe se dedica a entender suas necessidades específicas e a criar soluções sob medida que se alinham perfeitamente aos seus objetivos e visão. Cada projeto é adaptado para refletir sua identidade única.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Beneficios;
