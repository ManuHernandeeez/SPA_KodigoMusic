import React from 'react';
import { useForm } from 'react-hook-form';

const MusicForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);


  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="music-form">
      <div>
        <label htmlFor="title">Título de la Canción</label>
        <input
          id="title"
          {...register('title', { required: 'Este campo es obligatorio' })}
        />
        {errors.title && <p className="error">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="artist">Artista</label>
        <input
          id="artist"
          {...register('artist', { required: 'Este campo es obligatorio' })}
        />
        {errors.artist && <p className="error">{errors.artist.message}</p>}
      </div>

      <div>
        <label htmlFor="genre">Género</label>
        <input
          id="genre"
          {...register('genre', { required: 'Este campo es obligatorio' })}
        />
        {errors.genre && <p className="error">{errors.genre.message}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default MusicForm;