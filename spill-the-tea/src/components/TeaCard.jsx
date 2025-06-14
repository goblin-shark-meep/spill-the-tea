import React from 'react';
export default function TeaCard({ tea, onDelete }) {
  const {
    id,
    name,
    origin,
    caffeineLevel,
    image, //optional
    type,
    description,
    color, //optional
  } = tea;
  return (
    <div
      className='tea-card'
      style={color ? { borderColor: color } : undefined}
    >
      {image && <img src={image} alt={name} className='tea-card__image' />}
      <h3 className='tea-card__name'>{name}</h3>
      <p className='tea-card__origin'>
        <strong>Origin:</strong> {origin}
      </p>
      <p className='tea-card__caffeine'>
        <strong>Caffeine Level:</strong> {caffeineLevel}
      </p>
      <p className='tea-card__type'>
        <strong>Type:</strong> {type}
      </p>
      <p className='tea-card__description'>{description}</p>
      <button className='tea-card__remove' onClick={() => onDelete(id)}>
        Remove
      </button>
    </div>
  );
}
