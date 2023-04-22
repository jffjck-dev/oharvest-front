import React from 'react';
import './AboutUs.scss';
import image from '../../../assets/team.png';

const AboutUs = () => {
    return (
        <div className='who' >
            <h2 className='who__title'>Qui sommes-nous ?</h2>
            <img className='who__img' src={image} alt="portrait de l'équipe team" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vel quod! Quidem consequuntur accusamus commodi voluptate tenetur incidunt illum molestias, dolor, voluptates aperiam ipsa aliquam voluptatibus sunt maxime fugiat cumqueTotam eligendi asperiores amet veritatis, nam cumque iure ratione qui nihil hic magnam vel ipsum officiis natus minus est obcaecati earum placeat non numquam excepturi. Accusamus labore laborum molestias ullam Magni deleniti quo laborum vero odit dignissimos alias aliquam odio debitis est reiciendis</p>
        </div>
    );
};

export default AboutUs;