/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { useState, useEffect } from 'react';

const TeaForm = ({ teas, addTea }) => {
  if (!teas) teas = [];
  // useEffect(() => {
  //   fetch('http://localhost:3000/cards', {
  //     method: 'POST',
  //     headers: { 'Content-Type:': 'application/json' },
  //     body: JSON.stringify(teaInfo),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       //add new card to state to update tea list
  //       console.log('tea added:', data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  const addTeaFromForm = (formData) => {
    const teaInfo = {};
    // const { name } = formData;
    // console.log('name', name);
    teaInfo.name = formData.get('name');
    teaInfo.origin = formData.get('origin');
    teaInfo.caffeineLevel = formData.get('caffeineLevel');
    teaInfo.image = formData.get('image');
    teaInfo.type = formData.get('type');
    teaInfo.description = formData.get('description');
    teaInfo.color = formData.get('color');
    console.log('teaInfo', JSON.stringify(teaInfo));
   // addTea(teas.push(teaInfo)); //for when not connected to backend 

    fetch('http://localhost:3000/api/teas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teaInfo),
    })
      .then((res) => {
        console.log('first then')
        return res.json();
      })
      .then((data) => {
        //add new card to state to update tea list
        console.log('second then')
        addTea(data);
        console.log('tea added:', data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form className='addTeaForm' action={addTeaFromForm}>
      <label htmlFor='name'>
        Tea name:
        <input required type='text' id='name' name='name' />
      </label>
      <label htmlFor='origin'>
        Tea origin:
        <input type='text' id='origin' name='origin' />
      </label>
      <label htmlFor='caffeineLevel'>
        Caffeine Level:
        <input
          required
          defaultChecked
          type='radio'
          name='caffeineLevel'
          id='none'
          value='none'
        />
        <label htmlFor='none'>None</label>
        <input
          required
          type='radio'
          name='caffeineLevel'
          id='low'
          value='low'
        />
        <label htmlFor='low'>Low</label>
        <input
          required
          type='radio'
          name='caffeineLevel'
          id='medium'
          value='medium'
        />
        <label htmlFor='medium'>Medium</label>
        <input
          required
          type='radio'
          name='caffeineLevel'
          id='high'
          value='high'
        />
        <label htmlFor='high'>High</label>
      </label>
      <label htmlFor='image'>
        Tea image:
        <input type='text' id='image' name='image' />
      </label>
      <label htmlFor='type'>
        Tea type:
        <input type='text' id='type' name='type' />
      </label>
      <label htmlFor='description'>
        Tea description:
        <input required type='text' id='description' name='description' />
      </label>
      <label htmlFor='color'>
        Tea color:
        <input type='text' id='color' name='color' />
      </label>
      <button type='submit'> Spill your tea! </button>
    </form>
  );
};

export default TeaForm;