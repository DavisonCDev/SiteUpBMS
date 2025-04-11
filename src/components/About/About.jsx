import React from 'react';
import styles from './About.module.css';

const About = () => (
  <section className={styles.about}>
    <h2>Quem Somos</h2>
    <p>
      A UPBMS atua há mais de 10 anos no setor de automação predial, com foco em sistemas de segurança,
      incêndio, controle de acesso, climatização e infraestrutura crítica para data centers.
    </p>
    <video controls className={styles.video}>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Seu navegador não suporta vídeo.
    </video>
  </section>
);

export default About;
