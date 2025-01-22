// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Titre.css';

// eslint-disable-next-line react/prop-types
const Titre = ({ subTitle, title }) => {

    return (
        <div className="titre">
            <p>{subTitle}</p>
            <h2>{title}</h2>
        </div>
    );
}

export default Titre;
