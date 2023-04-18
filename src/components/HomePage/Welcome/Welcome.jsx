import React from 'react';
import './Welcome.scss';

/**
 * bloc contenant l'image et le texte de présentation de la cueillette en dessous de la bannière de légume qui défile.
 */
const Welcome = () => {
    return (
        <div className='welcome'>
            <img className='welcome__img' src='https://cdn.pixabay.com/photo/2020/04/06/11/22/seedling-5009286_960_720.jpg' alt='legumes'></img>
            
            <h2 className='welcome__title'>A PROPOS DE LA CUEILLETTE</h2>

            <p className='welcome__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet, mollitia recusandae quisquam consequuntur facere quos. Sint dolores voluptates eius iure molestiae recusandae eligendi eveniet commodi repellat, optio ullam odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae fuga eius quae ab recusandae accusantium repudiandae laudantium dolore, aliquam voluptatibus, cumque quasi dolores quibusdam, amet ut assumenda sed eveniet?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, velit sit voluptatibus distinctio quia blanditiis ullam incidunt veritatis sapiente quis, sint quod, perferendis quas quae molestias praesentium saepe consequuntur? Quos.</p>
        </div>
    );
};

export default Welcome;