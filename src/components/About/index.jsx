import React from 'react';
import aboutImage from '../../assets/about.jpg';
import styles from './styles.module.css';

const About = () => {
  return (
    <div className={styles.aboutBox}>
      <img className={styles.aboutImg} src={aboutImage} alt="Apie dizaino foto" />
      <div className={styles.aboutTextBox}>
        <h1>Interjero projektavimo paslaugos</h1>
        <p>Siūlome šias interjero dizaino projektavimo paslaugas:
          Patalpų apmatavimas ir suvedimas į kompiuterį; bendras patalpų funkcinis išplanavimas; interjero vizualizacijų sukūrimas – pagrindinė koncepcija, 3D; santechnikos prietaisų brėžiniai plane ir išklotinėse; elektros instaliacijos planai; apšvietimo planai; lubų planai; grindų plano brėžiniai; grindų ir sienų plytelių išklotinės;
          virtuvės baldo projektavimas; židinio projektavimas; laiptų projektavimas; santechnikos prietaisų parinkimas; šviestuvų parinkimas; sienų spalvų bei dangų parinkimas; durų parinkimas;
          baldų parinkimas; aksesuarų parinkimas; autorinė darbų priežiūra.</p>
      </div>
    </div>
  );
};

export default About;
