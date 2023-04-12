import './ContactInfo.scss';

const ContactInfo = () => {
    return (
        <div className="contact__info">
            <p>
                <i className="fa-solid fa-location-dot"></i> 22, rue de la moisson 54000 MUIZON
            </p>
            <p>
                [icone mail] cueillette-oharvest@mail.com
            </p>
            <p>
                [icone telephone] 00 00 00 00 00
            </p>
        </div>
    );
}

export default ContactInfo;