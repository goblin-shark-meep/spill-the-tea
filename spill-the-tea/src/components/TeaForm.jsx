/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { useState } from 'react';

const TeaForm = (props) => {
  const handleSubmit = (e) => {};

  return (
    <form className='addTeaForm'>
      <label htmlFor='name'>
        Tea name:
        <input type='text' id='name' name='origin' />
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
