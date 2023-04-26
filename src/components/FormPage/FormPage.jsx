import React from 'react';
import { useForm } from 'react-hook-form';
import './FormPage.scss';

const FormPage = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <h2 className='formpage__title'>Formulaire de réservation pour la visite</h2>
            <form action='' className='formpage' onSubmit={handleSubmit(onSubmit)}>
                <div className='formpage__resa-div'>
                    <h3 className='formpage__resa'>Heure et jour de votre reservation</h3>
                    <p>Date :</p> 
                    <p>Heure :</p>
                    <p>Thème :</p>
                </div>

                <div className='formpage__input-group'>
                    <label htmlFor='name'>Nom de l'Etablissement</label>
                    <input type="text" name='name' id='name' {...register('name', {required: true})}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor='adress'>Adresse postale</label>
                    <input type="text" name='adress' id='adress' {...register('adress')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="code">Code postal</label>
                    <input type="text" name='code' id='code' inputMode='decimal' {...register('code')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="city">Ville</label>
                    <input type="text" name='city' id='city' {...register('city')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="phone">Téléphone de l'école</label>
                    <input type="text" name='phone' id='phone' inputMode='decimal' {...register('phone')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="mobile">Portable du responsable groupe</label>
                    <input type="text" name='mobile' id='mobile' inputMode='decimal' {...register('mobile')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="mail">Mail responsable visite</label>
                    <input type="text" name='mail' id='mail' {...register('mail')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="teacher">Nom de  l'enseignant/e </label>
                    <input type="text" name='teacher' id='teacher' {...register('teacher')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="level">Niveau de la classe</label>
                    <input type="text" name='level' id='level' {...register('level')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="student">Nombre d'élèves</label>
                    <input type="text" name='student' id='student' inputMode='decimal' {...register('student')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="guide">Nombre d'accompagnateurs</label>
                    <input type="text" name='guide' id='guide' inputMode='decimal' {...register('guide')}/>
                </div>
                <div className='formpage__input-group'>
                    <label htmlFor="group">Nombre de groupes</label>
                    <input type="text" name='group' id='group' inputMode='decimal' {...register('group')}/>
                </div>
                <div className='formpage__textarea'>
                    <label htmlFor="transport">Transport</label>
                    <textarea name='transport' placeholder='Indiqué le mode de transport' id='transport' className='formpage__transport' cols="30" rows="10" {...register('transport')}></textarea>
                </div>
                <div className='formpage__textarea'>
                    <label htmlFor="remarque">Remarques</label>
                    <textarea name="remarque" placeholder='Pour toute information complémentaire' id="remarque" cols="30" rows="10" {...register('remarque')}></textarea>
                </div>
                <button className='formpage__btn'>Réserver</button>
            </form>
        </div>
    );
};

export default FormPage;