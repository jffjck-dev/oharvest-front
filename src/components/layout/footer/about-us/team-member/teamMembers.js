import carotte from '../../../../../assets/avatar_kevin.png';
import fraise from '../../../../../assets/avatar_andrea.png';
import patate from '../../../../../assets/avatar_jf.png';
import cerise from '../../../../../assets/avatar_guillaume.png';
import brocoli from '../../../../../assets/avatar_mickael.png';

const teamMembers = [
    {
        type: 'back',
        title: 'Back',
        members: [
            { image: cerise, name: 'Guillaume', role: 'Lead Dev Back' },
            { image: carotte, name: 'Kévin', role: 'Product Owner' },
        ],
    },
    {
        type: 'front',
        title: 'Front',
        members: [
            { image: fraise, name: 'Andréa', role: 'Scrum Master' },
            { image: patate, name: 'Jeff', role: 'Lead Dev Front' },
            { image: brocoli, name: 'Mickael', role: 'Git Master' }
        ],
    },
];

export default teamMembers;
