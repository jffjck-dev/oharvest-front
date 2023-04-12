import './Welcome.scss';

/**
 * bloc contenant l'image et le texte de présentation de la cueillette en dessous de la bannière de légume qui défile.
 */
const Welcome = () => {
    return (
        <div className='welcome'>
            <img className='welcome__img' src='https://cdn.pixabay.com/photo/2018/11/10/11/03/pumpkin-3806393_960_720.jpg' alt='legumes'></img>
            
            <h2 className='welcome__title'>A propos de la cueillette</h2>

            <p className='welcome__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet, mollitia recusandae quisquam consequuntur facere quos. Sint dolores voluptates eius iure molestiae recusandae eligendi eveniet commodi repellat, optio ullam odio.</p>
        </div>
    );
};

export default Welcome;