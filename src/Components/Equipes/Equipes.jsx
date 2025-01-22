import { useState } from 'react';
import './Equipes.css';
import img1 from '../../assets/15.jpg';
import img2 from '../../assets/16.jpg';
import img3 from '../../assets/17.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const carrouselData = [
    {
        id: 1,
        image: img1,
        title: 'RAKOTOZANANY Rigane',
        description: 'Jeune Développeur React-js, Etudiant en Informatique au CNTEMAD.',
    },
    {
        id: 2,
        image: img2,
        title: 'Ralph FANANTENANA',
        description: 'Jeune Développeur JAVA, Etudiant en Informatique au CNTEMAD.',
    },
    {
        id: 3,
        image: img3,
        title: 'Mendrika Kevin',
        description: 'Jeune Développeur JAVA, Etudiant en Informatique au CNTEMAD.',
    },

];

const Equipes = () => {
    // Le hook useState doit être appelé à l'intérieur du composant.
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carrouselData.length);
    };

    const goToPrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + carrouselData.length) % carrouselData.length
        );
    };

    const { image, title, description } = carrouselData[currentIndex];

    return (
        <div className="Equipe" id="Equipes">
            <div className="carrousel">
                <div className="carrousel-content">
                    <div className="carrousel-image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="carrousel-text">
                        <h2>{title}</h2>
                        <p>{description}</p>

                    </div>
                </div>

                <div className="carrousel-controls">
                    <button onClick={goToPrevious}><i className="bi bi-arrow-left"></i></button>
                    <button onClick={goToNext}><i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Equipes;
