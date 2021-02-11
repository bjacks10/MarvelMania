import React from 'react';
import slide1 from '../images/MeetTheCharacters/slide1.png';
import slide2 from '../images/MeetTheCharacters/slide2.png';
import slide3 from '../images/MeetTheCharacters/slide3.png';
import slide4 from '../images/MeetTheCharacters/slide4.png';

const CharacterFeatures = () => {
    return ( 
<div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
  <div style={{maxHeight:"407px"}} class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block" src={slide1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block" src={slide2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block" src={slide3} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block" src={slide4} alt="Fourth slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
     );
}
 
export default CharacterFeatures;