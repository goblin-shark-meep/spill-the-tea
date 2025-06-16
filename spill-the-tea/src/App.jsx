import { useState } from 'react';
import './App.css';
import TeaForm from './components/TeaForm';
import TeaList from './components/TeaList';
import { useEffect } from 'react';

//! temp tea list
// const sampleTeas = [
//   {
//     id: 1,
//     name: 'Earl Grey',
//     origin: 'England',
//     caffeineLevel: 'Medium',
//     image: 'https://images.unsplash.com/photo-1518674660708-04be0b7fa79d?auto=format&fit=crop&w=400&q=60',
//     type: 'Black',
//     description: 'A classic black tea scented with bergamot oil—bright, citrusy, and aromatic.',
//     color: '#F5E1A4'
//   },
//   {
//     id: 2,
//     name: 'Sencha',
//     origin: 'Japan',
//     caffeineLevel: 'High',
//     image: 'https://m.media-amazon.com/images/I/515ZVJeXlGL._AC_.jpg',
//     type: 'Green',
//     description: 'A steamed Japanese green tea with a fresh, grassy flavor and a vibrant green liquor.',
//     color: '#C8E6A3'
//   },
//   {
//     id: 3,
//     name: 'Chamomile',
//     origin: 'Egypt',
//     caffeineLevel: 'None',
//     image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=60',
//     type: 'Herbal',
//     description: 'A soothing, caffeine-free infusion made from chamomile flowers, known for its calming properties.',
//     color: '#F7E7B5'
//   },
//   {
//   id: 4,
//   name: 'Matcha Harmony',
//   type: 'Green Tea',
//   origin: 'Japan',
//   color: '#d0f0c0',
//   image: 'https://www.harmonyorganictea.com/attachment/product/1668741152PdESa.png',
//   description: 'A smooth and earthy green tea made from finely ground matcha powder, perfect for focus and calm.'
// },
// {
//   id: 5,
//   name: 'Golden Chai',
//   type: 'Spiced Black Tea',
//   origin: 'India',
//   color: '#f4d35e',
//   image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
//   description: 'A bold and warming blend of black tea, cardamom, cinnamon, and ginger. Excellent with milk.'
// },
// {
//   id: 6,
//   name: 'Blueberry Rooibos',
//   type: 'Herbal',
//   origin: 'South Africa',
//   color: '#e0bbff',
//   image: 'https://images.unsplash.com/photo-1612197592844-b9c24b68c736',
//   description: 'Naturally caffeine-free rooibos with a sweet burst of blueberry flavor and a hint of vanilla.'
// }
// ];

function App() {
  //const [count, setCount] = useState(0);
  // array of teas change back to ([]) when ready to add
  const [teas, setTeas] = useState([]);
  // add tea will be passed to TeaForm
  useEffect(() => {
    fetch('http://localhost:3000/api/teas')
      .then((res) => res.json())
      .then((data) => {
        console.log('tea data', data);
        setTeas(data);
      })
      .catch(console.error);
  }, []);

  const addTea = (teaInfo) => {
    setTeas((prev) => [...prev, { ...teaInfo, id: Date.now() }]);
  };

  const [teaBeingEdited, setTeaBeingEdited] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const updateTea = (_id, updatedTea) => {
    fetch(`http://localhost:3000/api/teas/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTea)
    })
    .then(res => res.json())
    .then((savedTea) => {
      setTeas((prev) =>
      prev.map((tea) =>
      tea._id === savedTea._id ? savedTea : tea
    )
  );
  setTeaBeingEdited(null);
    })
    .catch(console.error);
}

  const deleteTea = (_id) => {
    console.log('deleted tea id frontend', _id);
    fetch(`http://localhost:3000/api/teas/${_id}`, { method: 'DELETE' })
      .then(() => setTeas((prev) => prev.filter((t) => t._id !== _id)))
      .catch(console.error);
  };
  return (
    <div>
      <h1>Spill the Tea</h1>
      <TeaForm
        addTea={addTea}
        updateTea={updateTea}
        teaToEdit={teaBeingEdited}
        teas={teas}
        isPopUp={false}
    />

      <TeaList
        teas={teas}
        onDelete={deleteTea}
        onEdit={setTeaBeingEdited}
      />

    </div>
  );
}

export default App;
