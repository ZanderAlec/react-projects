import './App.css';
import { useState } from 'react';

function App() {

  const [price, setPrice] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipFriend, setTipFriend] = useState(0);

  const tipTotal = Math.round(((parseFloat(tip) + parseFloat(tipFriend) / 2) / 100) * price);
  const totalPrice = parseFloat(price)  + tipTotal ;

  return (
    <div className="App">
      <BillPrice setPrice = { setPrice }/>

      <Tip setTip = { setTip }>
        Como você avalia o serviço?
      </Tip>

      <Tip setTip = { setTipFriend }>
        Como seu amigo avalia o serviço?
      </Tip>

      <Total 
        price = { price } 
        totalPrice = { totalPrice } 
        tipTotal = {tipTotal}
      />
    </div>
  );
}
export default App;

const BillPrice = ( {setPrice} ) =>{
  return <div>
    <label>Valor da conta</label>
    <input type="number" onChange={ (event) => setPrice(event.target.value)}/>
  </div>
}

const Tip = ({children, setTip}) => {

  return <div>
    <label>{children}</label>

    <select onChange = { (event)=> {setTip(event.target.value)} } name="serviceOp"> 

      <option value={0}>Ruim (0%)</option>
      <option value={5}>Ok (5%)</option>
      <option value={10}>Bom (10%)</option>
      <option value={20}>Excelente (20%)</option>

    </select>
  </div>
}

const Total = ({ price, totalPrice, tipTotal }) => {
  return <div>
    <h2>Valor a pagar: ${ totalPrice } (${ price } + ${ tipTotal })</h2>
  </div>
}


