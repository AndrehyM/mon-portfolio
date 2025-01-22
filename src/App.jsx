// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sary from './Components/Sary/Sary';
import Apropos from './Components/Propos/Apropos';
import Titre from './Components/Titre/Titre';
import Etude from './Components/Etudes/Etude';
import Competances from './Components/Compentances/Competance';
import Equipes from './Components/Equipes/Equipes';
import Contact from './Components/Contact/Contact';

const App = () => {

  return (
    <div className="">
      <Navbar />
      <Sary />
      <div className="container">
        <Titre subTitle='A PROPOS DE MOI' title='Voici quelques photos' />
        <Apropos />
        <Titre subTitle='MON PARCOURS D&apos;ETUDES' />
        <Etude />
        <Titre subTitle='COMPETANCES EN INFORMATIQUE' title='Langage et Framework' />
        <Competances />
        <Titre subTitle='EQUIPES' title='Nos Equipes' />
        <Equipes />
        <Titre subTitle='CONTACT' title='Si vous avez besoin de moi,Voici mes coordonnées.' />
        <Contact />
      </div>

    </div>
  );
}

export default App;
