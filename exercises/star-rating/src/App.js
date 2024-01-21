import './App.css';

import star from "./assets/star.png";
import starSelected from "./assets/star-selected.png";

import {useState} from 'react'

function App() {
  return (
    <div className="container">
      <StarRating/>
    </div>
  );
}

const StarRating = ({quant = 5}) => {
  const stars = [];
  const [rate, setRate] = useState(0);
  const [tempRate, setTempRate] = useState(0);
 

  for(let i = 0; i < quant; i++){
    stars.push(<Star 
      key = {i} 
      selected = {tempRate ? i + 1 <= tempRate : i + 1 <= rate} 
      onSelect = {() => setRate(i + 1)}
      onHover = {() => setTempRate(i + 1)}
      onOut = {() => setTempRate(0)}
    />)
  }

  return (
    <div className="star-list-container">
      <div className="star-list">
        {stars}   
      </div>
     <p className="rating-number">{tempRate ||  rate || ""}</p>
    </div>
  );
}

const Star = ({ selected , onSelect, onHover, onOut}) => {

  return <img 
              onClick={() => onSelect()}
              onMouseOver = {() => onHover()}  
              onMouseOut={() => onOut()}
              src = {selected ? starSelected : star} 
              className="star-icon" 
              alt="star"/>;
}



export default App;
