import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css';
import TeaForm from './components/TeaForm';
import TeaList from './components/TeaList';


//! temp tea list
const sampleTeas = [
  {
    id: 1,
    name: 'Earl Grey',
    origin: 'England',
    caffeineLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1518674660708-04be0b7fa79d?auto=format&fit=crop&w=400&q=60',
    type: 'Black',
    description: 'A classic black tea scented with bergamot oil—bright, citrusy, and aromatic.',
    color: '#F5E1A4'
  },
  {
    id: 2,
    name: 'Sencha',
    origin: 'Japan',
    caffeineLevel: 'High',
    image: 'https://images.unsplash.com/photo-1589728756918-e7ca9e06dd17?auto=format&fit=crop&w=400&q=60',
    type: 'Green',
    description: 'A steamed Japanese green tea with a fresh, grassy flavor and a vibrant green liquor.',
    color: '#C8E6A3'
  },
  {
    id: 3,
    name: 'Chamomile',
    origin: 'Egypt',
    caffeineLevel: 'None',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=60',
    type: 'Herbal',
    description: 'A soothing, caffeine-free infusion made from chamomile flowers, known for its calming properties.',
    color: '#F7E7B5'
  }
];


function App() {
  //const [count, setCount] = useState(0);
  // array of teas change back to ([]) when ready to add
  const[teas, setTeas] = useState(sampleTeas);
  // add tea will be passed to TeaForm
  const addTea = (teaInfo) => {
    setTeas((prev) => [...prev, {...teaInfo, id: Date.now() }]);
  };
  const deleteTea = (id) => {
    setTeas((prev) => prev.filter((t) => t.id !== id));
  };
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Spill the Tea</h1>

      <TeaForm onAddTea={addTea} />
      <TeaList teas={teas} onDelete={deleteTea} />
    </div>
  );
}

export default App;
