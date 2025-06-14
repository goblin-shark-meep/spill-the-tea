import React from 'react';
import TeaCard from './TeaCard';
export default function TeaList({ teas, onDelete }) {
  // if there are no teas then display message
  if (teas.length === 0) {
    return <p className='tea-list__empty'>No teas added yet.</p>;
  }
  // if we have teas then loop over each tea and render a tea card
  return (
    <div className='tea-list'>
      {teas.map((tea) => (
        // transforms each object into react element
        <TeaCard key={tea.id} tea={tea} onDelete={onDelete} />
      ))}
    </div>
  );
}
