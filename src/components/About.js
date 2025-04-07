import React from "react";
import videoPresentation from "../videoapresentation.mp4"; // ajuste o caminho se necessário

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        {/* Vídeo à esquerda */}
        <div className="about-video">
          <video
            width="100%"
            height="auto"
            controls
            className="video-player"
          >
            <source src={videoPresentation} type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
          </video>
        </div>

        {/* Texto à direita */}
        <div className="about-text">
          <h2 className="about-title">Sobre a UPBMS</h2>
          <p className="about-description">
            A <strong>UPBMS</strong> é especializada em soluções inteligentes para automação predial,
            segurança eletrônica, detecção e combate a incêndios, além de consultoria e implantação de sistemas
            em data centers. Com foco em inovação e excelência técnica, oferecemos serviços personalizados para
            garantir eficiência, segurança e sustentabilidade em edificações corporativas e industriais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
