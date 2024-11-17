// Loader.js
import React from 'react';
import { PuffLoader } from 'react-spinners'; // Optional
import './Loader.scss'; // For custom styling

const Loader = () => {
  return (
    <section className='Loading-screen'>
    <div class="boxes">
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
    </section>
  );
};

export default Loader;
