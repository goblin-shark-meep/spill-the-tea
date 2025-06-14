/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { useState, useEffect } from 'react';

const TeaForm = (props) => {
  // useEffect(() => {
  //   fetch('http://localhost:3000/cards', {
  //     method: 'POST',
  //     headers: { 'Content-Type:': 'application/json' },
  //     body: JSON.stringify(teaInfo)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const teaInfo = {};
    teaInfo.name = formData.get('name');
    teaInfo.origin = formData.get('origin');
    teaInfo.caffeineLevel = formData.get('caffeineLevel');
    teaInfo.image = formData.get('image');
    teaInfo.type = formData.get('type');
    teaInfo.description = formData.get('description');
    console.log(teaInfo);

    return teaInfo;
  };

  return (
    <form className='addTeaForm' onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Tea name:
        <input type='text' id='name' name='name' />
      </label>
      <label htmlFor='origin'>
        Tea origin:
        <input type='text' id='origin' name='origin' />
      </label>
      <label htmlFor='caffeineLevel'>
        Caffeine Level:
        <input type='text' id='caffeineLevel' name='caffeineLevel' />
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
        <input type='text' id='description' name='description' />
      </label>
      <button type='submit'> Spill your tea! </button>
    </form>
  );
};

export default TeaForm;
