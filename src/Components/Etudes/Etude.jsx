// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Etude.css';
import image7 from '../../assets/14.jpg';


import 'bootstrap-icons/font/bootstrap-icons.css';

const Etude = () => {

    return (
        <div className="etudes" id='Etudes'>
            <div className="etudes-left">
                <img src={image7} alt="" className='etudes-img' />

            </div >
            <div className="etudes-right">
                <h3>ETUDES </h3>
                <h2>2024 - 2025</h2>
                <b>L3 Informatique BDGL / Diplome de licence obtenue en 2025</b> <br />
                <hr />
                <br />
                <p>
                    <p>
                        Ce diplôme de Licence en Informatique avec spécialisation en BDGL (Bases de Données et Gestion des Logiciels) représente un grand pas dans mon parcours académique et professionnel, consolidant mes compétences en développement et gestion des systèmes d&apos;information.
                    </p>

                </p>

                <h2>2021 - 2024</h2>
                <b>L1-L2-L3 Informatique à l&apos;université CNTEMAD</b> <br />
                <hr />
                <br />
                <p>
                    <ul>
                        <li> Études en Groupe et Travail Personnel à Domicile.</li>
                        <li> Travail en salle avec le responsable du CenTIC-Mada.</li>
                        <li> Suivi de tutoriels et documentation via des vidéos YouTube, des PDF, etc.</li>
                    </ul>
                </p>
                <h2>Stage en 2024</h2>
                <b>Chez CenTIC-Mada <i className='bi bi-geo-alt'></i></b> <br />
                <hr />
                <br />
                <p>
                    <ul>
                        <li> Réalisation d&apos;un Application web de Gestion de bibliothèque avec <mark>PHP.</mark></li>
                        <li> Apprendre JAVA/JAVA SWING/JAVAFX et participer à un petit projet avec  <mark>Swing builder.</mark></li>
                        <li> Apprendre à Programmer en Parallèle et en Java Web / Client-Serveur</li>

                    </ul>
                </p>
                <h2>2019</h2>
                <b>Obtention du Diplôme de Baccalauréat - Première Session</b> <br />
                <hr />
                <br />
                <p>
                    <ul>
                        <li>Série Scientifique (Série C).</li>
                        <li>Étudiant au Lycée Andoharanofotsy</li>
                    </ul>
                </p>
            </div >

        </div >

    );
}

export default Etude;
