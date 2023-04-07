import React from 'react';
import './home.css'
const Home = () => {
return (
	<div
	style={{
		display: 'flex',
		
		height: '100vh'
	}}
	>
	<h1>Welcome to world of Wanderlust</h1>
	<div class="container">
  <div class="swiper-container">
    <div class="slider swiper-wrapper">
      <article class="slider__slide slide swiper-slide">
        <div class="slide__image-wrapper">
          <img src="https://assets.codepen.io/6791/tokyo.jpg" class="slide__image" alt="" />
        </div>
        {/* <!-- /.slide__image-wrapper --> */}
        <h2 class="slide__title">Tokyo</h2>
        <h2 class="slide__title outline">Tokyo</h2>
      </article>
      <article class="slider__slide slide swiper-slide">
        <div class="slide__image-wrapper">
          <img src="https://assets.codepen.io/6791/osaka.jpg" class="slide__image" alt=""/>
        </div>
        
        <h2 class="slide__title">Osaka</h2>
        <h2 class="slide__title outline">Osaka</h2>
      </article>
      <article class="slider__slide slide swiper-slide">
        <div class="slide__image-wrapper">
          <img src="https://assets.codepen.io/6791/kyoto.jpg" class="slide__image" alt=""/>
        </div>
        
        <h2 class="slide__title">Kyoto</h2>
        <h2 class="slide__title outline">Kyoto</h2>
      </article>
    </div>
   
    <div class="slider__controls">
      <button class="slider__control slider__previous">
        <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.118 35.5L44.5 47.191V23.809L21.118 35.5z" fill="#fff" />
        </svg>
      </button>
      <button class="slider__next slider__control">
        <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg" data-slider-next>
          <circle class="progress" fill="none" stroke="#FFF" stroke-width="2" cx="35" cy="35" r="34" />
          <path d="M48.882 35.5L25.5 47.191V23.809L48.882 35.5z" fill="#fff" />
        </svg>
      </button>
    </div>

  </div>

</div>
	</div>
);
};

export default Home;
