// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Apropos.css';
import image1 from '../../assets/3.jpg';
import image3 from '../../assets/5.jpg';
import image4 from '../../assets/4.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Apropos = () => {

    return (
        <div className="Apropos" id='Apropos'>
            <div className="propos">
                <img src={image1} alt="" />
                <div className="emotion">
                    <i className='bi bi-heart'></i>
                    <p>2023</p>
                </div>
            </div >

            <div className="propos">
                <img src={image3} alt="" />
                <div className="emotion">
                    <i className='bi bi-heart'></i>
                    <p>2022</p>
                </div>
            </div >
            <div className="propos">
                <img src={image4} alt="" />
                <div className="emotion">
                    <i className='bi bi-heart'></i>
                    <p>2023</p>
                </div>
            </div >

        </div >

    );
}

export default Apropos;
