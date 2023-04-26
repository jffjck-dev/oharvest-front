import React from 'react';
import { useForm } from 'react-hook-form';
import './FormPage.scss';

const FormPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2 className="formpage__title">
        Formulaire de réservation pour la visite
            </h2>
            <form action="" className="formpage" onSubmit={handleSubmit(onSubmit)}>
                <div className="formpage__resa-div">
                    <h3 className="formpage__resa">Heure et jour de votre reservation</h3>
                    <p>Date :</p>
                    <p>Heure :</p>
                </div>

                <div className="formpage__input-group">
                    <label htmlFor="name">Nom de l'Etablissement</label>
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
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="adress">Adresse postale</label>
                    <input
                        type="text"
                        name="adress"
                        id="adress"
                        {...register('adress', {
                            pattern: {
                                value: /^[A-Za-z 0-9]+$/i,
                                message: 'Format non valide',
                            },
                        })}
                    />
                    {errors.adress && <span>{errors.adress.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="code">Code postal</label>
                    <input
                        type="number"
                        name="code"
                        id="code"
                        {...register('code', {
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Format non valide',
                            },
                            maxLength: {
                                value: 5,
                                message: 'Le code postal doit avoir 5 chiffres max',
                            },
                        })}
                    />
                    {errors.code && <span>{errors.code.message}</span>}
                </div>
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
                    {errors.city && <span>{errors.city.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="phone">Téléphone du Responsable</label>
                    <input
                        type="number"
                        name="phone"
                        id="phone"
                        {...register('phone', {
                            maxLength: {
                                value: 10,
                                message: 'Format non valide',
                            },
                        })}
                    />
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="mail">Adresse Email responsable visite</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        {...register('email', {
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Format d\'email non valide'
                            }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="teacher">Nom de l'enseignant/e </label>
                    <input
                        type="text"
                        name="teacher"
                        id="teacher"
                        {...register('teacher', {
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: 'Format non valide',
                            }
                        })}
                    />
                    {errors.teacher && <span>{errors.teacher.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="student">Nombre d'élèves</label>
                    <input
                        type="number"
                        name="student"
                        id="student"
                        inputMode="decimal"
                        {...register('student', {
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
                    {errors.student && <span>{errors.student.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="guide">Nombre d'accompagnateurs</label>
                    <input
                        type="text"
                        name="guide"
                        id="guide"
                        inputMode="decimal"
                        {...register('guide', {
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
                    {errors.guide && <span>{errors.guide.message}</span>}
                </div>
                <div className="formpage__input-group">
                    <label htmlFor="group">Nombre de groupes</label>
                    <input
                        type="number"
                        name="group"
                        id="group"
                        inputMode="decimal"
                        {...register('group', {
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
                    {errors.group && <span>{errors.group.message}</span>}
                </div>
                <div className="formpage__textarea">
                    <label htmlFor="transport">Transport</label>
                    <textarea
                        name="transport"
                        placeholder="Indiqué le mode de transport"
                        id="transport"
                        className="formpage__transport"
                        cols="30"
                        rows="10"
                        {...register('transport', {
                            pattern: {
                                value: /^[A-Za-z- 0-9]+$/i,
                                message: 'Erreur dans la saisie',
                            }
                        })}
                    ></textarea>
                    {errors.transport && <span>{errors.transport.message}</span>}
                </div>
                <div className="formpage__textarea">
                    <label htmlFor="remarque">Remarques</label>
                    <textarea
                        name="remarque"
                        placeholder="Pour toute information complémentaire"
                        id="remarque"
                        cols="30"
                        rows="10"
                        {...register('remarque', {
                            pattern: {
                                value: /^[A-Za-z- 0-9]+$/i,
                                message: 'Erreur dans la saisie',
                            }
                        })}
                    ></textarea>
                    {errors.remarque && <span>{errors.remarque.message}</span>}
                </div>
                <button className="formpage__btn">Réserver</button>
            </form>
        </div>
    );
};

export default FormPage;
