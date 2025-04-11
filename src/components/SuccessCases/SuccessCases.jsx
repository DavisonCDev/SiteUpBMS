import React from 'react';
import styles from './SuccessCases.module.css';
import caseImages from '../SuccessCases/caseImages.js';

const SuccessCases = () => (
  <section className={styles.container}>
    <h2>Cases de Sucesso</h2>
    <div className={styles.slider}>
      {caseImages.map((item, index) => (
        <div className={styles.case} key={index}>
          <img src={item.image} alt={item.title} />
          <div className={styles.overlay}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SuccessCases;
