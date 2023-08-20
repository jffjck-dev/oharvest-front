import React from 'react';
import './CGU.scss';

const CGU = () => {
    const datetime = Date.now();
    const date = new Date(datetime).toLocaleDateString('fr');
    const url = 'https://www.oharvest.fr';
    const mail = 'contact@oharvest.fr';

    return (
        <div>
            <h5 className="header-spacing">Conditions Générales d&apos;Utilisation (CGU) pour un Site Vitrine</h5>

            <p className="text-spacing">Date de dernière mise à jour : {date}</p>

            <p className="text-spacing">Bienvenue sur O&apos;Harvest !</p>

            <p className="text-spacing">Les présentes Conditions Générales d&apos;Utilisation (ci-après dénommées &quot;CGU&quot;) régissent l&apos;utilisation du site web {url} (ci-après dénommé le &quot;Site&quot;) édité par JFFJCK (ci-après dénommé &quot;Nous&quot; ou &quot;Éditeur&quot;). En accédant et en utilisant ce Site, vous acceptez de vous conformer aux présentes CGU. Si vous n&apos;êtes pas d&apos;accord avec ces termes, veuillez cesser toute utilisation du Site.</p>

            <ol>
                <li>
                    <h6 className="header-spacing">1. Utilisation du Site</h6>
                    <p className="text-spacing">1.1. Vous acceptez d&apos;utiliser le Site conformément aux lois françaises en vigueur et aux présentes CGU.</p>
                    <p className="text-spacing">1.2. Vous reconnaissez que l&apos;Éditeur se réserve le droit de modifier, suspendre ou interrompre tout ou partie du Site sans préavis.</p>
                </li>
                <li>
                    <h6 className="header-spacing">2. Contenu du Site</h6>
                    <p className="text-spacing">2.1. Le contenu du Site, y compris mais sans s&apos;y limiter, les textes, images, graphiques, vidéos, logos et marques, est la propriété de l&apos;Éditeur ou de tiers et est protégé par les lois sur le droit d&apos;auteur et la propriété intellectuelle.</p>
                    <p className="text-spacing">2.2. Vous n&apos;êtes pas autorisé à copier, reproduire, distribuer, publier, diffuser, modifier ou exploiter de quelque manière que ce soit le contenu du Site sans l&apos;autorisation écrite préalable de l&apos;Éditeur.</p>
                </li>
                <li>
                    <h6 className="header-spacing">3. Liens vers des Tiers</h6>
                    <p className="text-spacing">3.1. Le Site peut contenir des liens vers des sites web de tiers. L&apos;Éditeur n&apos;exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu, leur exactitude ou leur légalité.</p>
                    <p className="text-spacing">L&apos;inclusion de liens vers des sites tiers ne constitue pas une approbation ou une recommandation de ces sites par l&apos;Éditeur.</p>
                </li>
                <li>
                    <h6 className="header-spacing">4. Données Personnelles</h6>
                    <p className="text-spacing">4.1. La collecte et l&apos;utilisation de vos données personnelles sont régies par notre Politique de Confidentialité.</p>
                </li>
                <li>
                    <h6 className="header-spacing">5. Responsabilité</h6>
                    <p className="text-spacing">5.1. L&apos;Éditeur met en œuvre des efforts raisonnables pour s&apos;assurer de l&apos;exactitude et de la mise à jour du contenu du Site. Cependant, l&apos;Éditeur ne garantit pas l&apos;exactitude, la pertinence ou l&apos;exhaustivité du contenu du Site.</p>
                    <p className="text-spacing">5.2. Dans les limites autorisées par la loi, l&apos;Éditeur décline toute responsabilité pour tout préjudice direct, indirect, accessoire, consécutif ou punitif découlant de l&apos;utilisation du Site.</p>
                </li>
                <li>
                    <h6 className="header-spacing">6. Modification des CGU</h6>
                    <p className="text-spacing">6.1. L&apos;Éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prendront effet dès leur publication sur le Site. Il est de votre responsabilité de consulter régulièrement les CGU pour rester informé des éventuelles mises à jour.</p>
                </li>
                <li>
                    <h6 className="header-spacing">7. Loi Applicable et Juridiction</h6>
                    <p className="text-spacing">7.1. Les présentes CGU sont régies par les lois françaises. Tout litige découlant de l&apos;utilisation du Site sera soumis à la compétence exclusive des tribunaux français.</p>
                </li>
            </ol>

            <p className="text-spacing">En utilisant ce Site, vous reconnaissez avoir lu, compris et accepté les présentes Conditions Générales d&apos;Utilisation.</p>

            <p className="text-spacing">Pour toute question ou demande concernant les CGU, veuillez nous contacter à l&apos;adresse suivante : {mail} .</p>

            <p className="text-spacing">Date de dernière mise à jour : {date}</p>
        </div>
    );
};

export default CGU; 