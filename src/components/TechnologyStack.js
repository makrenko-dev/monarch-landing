import React from 'react';
import './TechnologyStack.css';

import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import image6 from '../images/6.png';
import image7 from '../images/7.png';


const TechnologyStack = () => {
  return (
    <div class="header_mid">
  <div class="logo_slide">
    <ul class="loop">
      <li class="logo_item"><img src={image1} alt="Image 1"/></li>
      <li class="logo_item"><img src={image2} alt="Image 2"/></li>
      <li class="logo_item"><img src={image3} alt="Image 3"/></li>
      <li class="logo_item"><img src={image4} alt="Image 4"/></li>
      <li class="logo_item"><img src={image5} alt="Image 5"/></li>
      <li class="logo_item"><img src={image6} alt="Image 6"/></li>
      <li class="logo_item"><img src={image7} alt="Image 7"/></li>
    </ul>
    <ul class="loop-clone">
      <li class="logo_item"><img src={image1} alt="Image 1"/></li>
      <li class="logo_item"><img src={image2} alt="Image 2"/></li>
      <li class="logo_item"><img src={image3} alt="Image 3"/></li>
      <li class="logo_item"><img src={image4} alt="Image 4"/></li>
      <li class="logo_item"><img src={image5} alt="Image 5"/></li>
      <li class="logo_item"><img src={image6} alt="Image 6"/></li>
      <li class="logo_item"><img src={image7} alt="Image 7"/></li>
    </ul>
  </div>
  <div class="clear"></div>
</div>
  );
};

export default TechnologyStack;
