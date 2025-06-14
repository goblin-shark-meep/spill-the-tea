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
  style={{
    backgroundColor: color,
    padding: '1rem',
    border: '2px solid #ccc',
    borderRadius: '20px 20px 5px 5px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '250px',
    margin: '1rem auto',
    position: 'relative',
    ...(color ? { borderColor: color } : {})
  }}
>
      {image && <img
  src={image}
  alt={name}
  style={{
    width: '100%',
    height: '150',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '10px',
    marginBottom: '0.5rem'
  }}
/>}
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
