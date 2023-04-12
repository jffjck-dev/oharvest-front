import Map from './Map/Map';
import Horaire from './Horaire/Horaire';
import ContactInfo from './ContactInfo/Contactinfo';

import './ContactSection.scss';

/* Contient la googleMap, les horaires, ainsi que les contacts */
const ContactSection = () => {
    return (
        <section className="contact">
            <Map />
            <Horaire />
            <ContactInfo />
        </section>
    );
};

export default ContactSection;