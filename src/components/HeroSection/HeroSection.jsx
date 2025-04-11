import React from 'react';
import styles from './HeroSection.module.css';
import background from '../../assets/background.jpeg';

const HeroSection = () => (
  <section className={styles.hero} style={{ backgroundImage: `url(${background})` }}>
    <div className={styles.overlay}>
      <h1>UPBMS</h1>
      <p>Especialistas em automação, segurança e infraestrutura predial</p>
    </div>
  </section>
);

export default HeroSection;
