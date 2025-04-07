import React from 'react';
import './SuccessCases.css';

// Importação direta das imagens
import EatonImg from "../images/eaton.jpg";
import ItauImg from "../images/itau.png";
import SylvamoImg from "..//images/sylvamo.png";
import NSKImg from "../images/nsk.png";
import BradescoImg from "../images/bradescocti.jpg";
import UnileverImg from "../images/unilever.jpg";
import AbbvieImg from "../images/abbvie.jpg";
import ParelheirosImg from "../images/hospitalparelheiros.jpg";
import OsascoImg from "../images/supershoppingosasco.jpg";
import NovelisImg from "../images/novelisdobrasil.jpg";

const successData = [
  {
    title: 'Eaton',
    description: 'Realizamos a modernização completa dos sistemas de proteção contra incêndio nas unidades de Valinhos, Mogi das Cruzes e Porto Feliz...',
    image: EatonImg,
  },
  {
    title: 'Itaú',
    description: 'Conduzimos a modernização do sistema de detecção, alarme e comando de incêndio...',
    image: ItauImg,
  },
  {
    title: 'Sylvamo',
    description: 'Fizemos a modernização integral do sistema de proteção e combate a incêndios...',
    image: SylvamoImg,
  },
  {
    title: 'NSK',
    description: 'Executamos a substituição completa do sistema de detecção e combate a incêndio...',
    image: NSKImg,
  },
  {
    title: 'Bradesco CTI',
    description: 'Realizamos a modernização do sistema de controle e automação do ar-condicionado...',
    image: BradescoImg,
  },
  {
    title: 'Unilever',
    description: 'Desenvolvemos e implantamos melhorias contínuas nos processos de segurança contra incêndios...',
    image: UnileverImg,
  },
  {
    title: 'Abbvie',
    description: 'Atuamos na otimização e aprimoramento contínuo dos sistemas de climatização e automação predial...',
    image: AbbvieImg,
  },
  {
    title: 'Hospital Parelheiros',
    description: 'Executamos o comissionamento completo e a integração entre os sistemas de incêndio e automação predial...',
    image: ParelheirosImg,
  },
  {
    title: 'Super Shopping Osasco',
    description: 'Conduzimos a melhoria contínua dos sistemas de proteção contra incêndio...',
    image: OsascoImg,
  },
  {
    title: 'Novelis do Brasil',
    description: 'Implantamos projetos completos de sistemas de proteção contra incêndio...',
    image: NovelisImg,
  },
];

const SuccessCases = () => {
  return (
    <section className="success-cases-section">
      <h2 className="section-title">Cases de Sucesso</h2>
      <div className="scroll-container">
        <div className="scroll-content">
          {[...successData, ...successData].map((item, index) => (
            <div className="case-card" key={index}>
              <div className="card-inner">
                <img src={item.image} alt={item.title} className="case-image" />
                <div className="case-description">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
