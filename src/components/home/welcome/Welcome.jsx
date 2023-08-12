import React from 'react';

import './Welcome.scss';
import farmview from '../../../assets/farm.png';

/**
 * welcome section with an image and the title inside
 * @returns {JSX.Element}
 */
const Welcome = () => {
    return (
        <section className='welcome'>
            <img className='welcome__img' src={farmview} alt='legumes'></img>
            <h2 className='welcome__title'>BIENVENUE À LA CUEILLETTE</h2>
            <div className='welcome__description'>
                <p>Lorem Elsass ipsum munster eget gewurztraminer ac pellentesque Yo dû.
                tristique geht's wie kougelhopf ac mamsell id, leo messti de Bischheim gal barapli risus, réchime
                sit quam. auctor, leo in, merci vielmols turpis suspendisse knack habitant morbi sed ullamcorper salu
                rossbolla vulputate Salut bisamme nullam météor elit kartoffelsalad Hans hop condimentum Wurschtsalad
                amet id rucksack kuglopf tellus Heineken ornare mollis ante schneck bissame baeckeoffe turpis, dui Gal.
                aliquam semper dolor vielmols, ch'ai amet, wurscht mänele ornare Oberschaeffolsheim knepfle
                    Christkindelsmärik hopla so placerat Racing. </p>
                <p>Carola consectetur Huguette blottkopf, Miss Dahlias
                tellus chambon quam, Pfourtz !  hopla lacus dignissim Mauris schpeck et jetz gehts los s'guelt
                Verdammi eleifend Spätzle senectus commodo varius hopla Pellentesque Kabinetpapier Strasbourg bredele
                nüdle rhoncus libero, purus Chulien libero, schnaps Oberschaeffolsheim hoplageiss und DNA, sagittis
                gravida sed Coopé de Truchtersheim sit non Salu bissame yeuh. sit leverwurscht adipiscing
                picon bière lotto-owe Richard Schirmeck Morbi Chulia Roberstau ftomi! libero. geïz porta
                        flammekueche elementum hopla Gal ! non tchao bissame amet</p>
            </div>
        </section>
    );
};

export default Welcome;