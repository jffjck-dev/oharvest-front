import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams, useNavigate } from 'react-router-dom';

import './FormPage.scss';
import SeoMetadata from '../../components/ui/seo/SeoMetadata.jsx';

/**
 * Page element with forms for scholar reservation
 * @returns {JSX.Element}
 */
const FormPage = () => {
    const pageInfo = 'Formulaire d\'inscription visite - La cueillette O\'Harvest';
    const [inscriptionDone, setInscriptionDone] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams] = useSearchParams();
    const naviguate = useNavigate();
    const url = import.meta.env.VITE_HARVEST_API_URL;

    const timeslot = searchParams.get('slot');
    const date = new Date(searchParams.get('date'));
    const visitAt = `${date.getFullYear()}-${date.getMonth()+1}-${date.getUTCDate()}`;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data, event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${url}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    studentNumber: Number(data.studentNumber),
                    guideNumber: Number(data.guideNumber),
                    groupNumber: Number(data.groupNumber),
                    slot: timeslot,
                    visitAt,
                }),
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.status}`);
            }

            setError(false);
            setInscriptionDone(true);
            setTimeout(() => {
                naviguate('/');
            }, 5000);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    };

    return (
        <div>
            <SeoMetadata title={pageInfo} content={pageInfo}/>
            <h2 className="formpage__title">
                Formulaire de réservation pour la visite
            </h2>
            <form action="" className="formpage" onSubmit={handleSubmit(onSubmit)}>
                <div className="formpage__resa-div">
                    <h3 className="formpage__resa">Heure et jour de votre reservation</h3>
                    <p>Date : {date.toLocaleDateString()}</p>
                    <p>Créneau : {timeslot === 'morning' ? 'Matin' : 'Après-midi'}</p>
                </div>

                <div className="formpage__input-group">
                    <label htmlFor="name">Nom de l&apos;Etablissement</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        {...register('name', {
                            pattern: {
                                value: /^[A-Za-z-0-9]+$/i,
                                message: 'Format non valide',
                            },
                        })}
                    />
                </div>
                {errors.name && <span className="error-message">{errors.name.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="address">Adresse postale</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        {...register('address', {
                            pattern: {
                                value: /^[A-Za-z 0-9]+$/i,
                                message: 'Format non valide',
                            },
                        })}
                    />
                </div>
                {errors.address && <span className="error-message">{errors.address.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="code">Code postal</label>
                    <input
                        type="number"
                        name="zipcode"
                        id="zipcode"
                        {...register('zipcode', {
                            pattern: {
                                value: /^(0[1-9][0-9]{3}|[1-8][0-9]{4}|9[0-6][0-9]{3}|97[1-8][0-9]{2}|98[46-9][0-9]{2})$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 5,
                                message: 'Le code postal doit avoir 5 chiffres max',
                            },
                        })}
                    />
                </div>
                {errors.zipcode && <span className="error-message">{errors.zipcode.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="city">Ville</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        {...register('city', {
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'Format non valide',
                            },
                        })}
                    />
                </div>
                {errors.city && <span className="error-message">{errors.city.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="phone">Téléphone du Responsable</label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        {...register('phone', {
                            pattern: {
                                value: /^(?:(?:\+|00)33[\s.]{0,3}(?:\(0\)[\s.]{0,3})?|0)[1-9](?:(?:[\s.]?\d{2}){4}|\d{2}(?:[\s.]?\d{3}){2})$/,
                                message: 'Format non valide',
                            },
                        })}
                    />
                </div>
                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="mail">Adresse Email responsable visite</label>
                    <input
                        type="email"
                        name="mail"
                        id="mail"
                        {...register('mail', {
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Format d\'email non valide'
                            }
                        })}
                    />
                </div>
                {errors.mail && <span className="error-message">{errors.mail.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="contact">Nom de l&apos;enseignant/e </label>
                    <input
                        type="text"
                        name="contact"
                        id="contact"
                        {...register('contact', {
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'Format non valide',
                            }
                        })}
                    />
                </div>
                {errors.contact && <span className="error-message">{errors.contact.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="studentNumber">Nombre d&apos;élèves</label>
                    <input
                        type="number"
                        name="studentNumber"
                        id="studentNumber"
                        inputMode="decimal"
                        {...register('studentNumber', {
                            pattern: {
                                value: /^([1-9]|[1-4]\d|50)$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 2,
                                message: 'Nombre d\'élèves trop important',
                            }
                        })}
                    />
                </div>
                {errors.studentNumber && <span className="error-message">{errors.studentNumber.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="guideNumber">Nombre d&apos;accompagnateurs</label>
                    <input
                        type="text"
                        name="guideNumber"
                        id="guideNumber"
                        inputMode="decimal"
                        {...register('guideNumber', {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 2,
                                message: 'Nombre d\'accompagnateurs trop important',
                            }
                        })}
                    />
                </div>
                {errors.guideNumber && <span className="error-message">{errors.guideNumber.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="group">Nombre de groupes</label>
                    <input
                        type="number"
                        name="groupNumber"
                        id="groupNumber"
                        inputMode="decimal"
                        {...register('groupNumber', {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 2,
                                message: 'Nombre de groupe trop important',
                            }
                        })}
                    />
                </div>
                {errors.groupNumber && <span className="error-message">{errors.groupNumber.message}</span>}
                <div className="formpage__input-group">
                    <label htmlFor="transport">Mode de transport</label>
                    <input
                        type="text"
                        name="transport"
                        id="transport"
                        className="formpage__transport"
                        {...register('transport', {
                            pattern: {
                                value: /^[A-Za-z- 0-9]+$/i,
                                message: 'Erreur dans la saisie',
                            }
                        })}
                    ></input>
                </div>
                {errors.transport && <span className="error-message">{errors.transport.message}</span>}
                {inscriptionDone && <p style={{textAlign: 'center', border: '1px solid black', borderRadius: 10, padding: '1rem', marginTop: '1rem'}}>Votre inscription a bien été prise en compte. Vous allez être redirigé vers la page d&apos;accueil</p>}
                {error && <p style={{textAlign: 'center', border: '1px solid black', borderRadius: 10, padding: '1rem', marginTop: '1rem'}}> ⚠️ Erreur API</p>}
                <button className="formpage__btn">Réserver</button>
            </form>
        </div>
    );
};

export default FormPage;
