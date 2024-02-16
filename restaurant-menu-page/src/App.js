import './App.css';
import {useState} from 'react'

function App() {


  return (
    <div className=" h-screen bg-slate-200 p-10">

      <div className = "pt-10 border border-solid border-red-600 text-center	">
        <h2 className="text-5xl	 text-blue-950 font-semibold	">MENU</h2>

        <div className = "border border-solid border-red-600 flex gap-2.5	justify-center mt-8">
          <CategoryButton text = "Breakfast" selected = {true}/>
          <CategoryButton text = "Lunch" selected = {false}/>
          <CategoryButton text = "Dinner" selected = {false}/>
          <CategoryButton text = "Seafood" selected = {false}/>
        </div>
      </div>

      <div className="pt-10 flex gap-4 border border-solid border-red-400 w-full">
        <MenuItem title = "Lorem Ipsum" desc = "lorem algo algo algo algo"/>
        <MenuItem title = "Lorem Ipsum" desc = "lorem algo algo algo algo"/>
        <MenuItem title = "Lorem Ipsum" desc = "lorem algo algo algo algo"/>
      </div>
      
    </div>
  );
}

const CategoryButton = ({ text, selected = false }) => {
  return (
  <button className = {`bg-slate-200 border-2 border-solid border-black py-1 px-2 rounded	border-t-orange-800 border-l-orange-800 border-b-orange-950 border-r-orange-950 text-orange-800
                        ${selected && "bg-orange-800 text-slate-200 border-t-orange-950 border-l-orange-950 	border-r-orange-800 border-b-orange-800"}`} >
    { text }
  </button>);
}

const MenuItem = ({title, desc, img}) => {
  return <div className ="border-2 border-solid border-blue-950 w-full		">
      <img src={img} alt={title}/>
      
      <div>
        <div className = "border-b-2 border-b-solid border-b-slate-400"> 
          <h3 className="font-medium	">{ title }</h3>  
        </div>
        
        <p className="pt-3 text-slate-700">{ desc }</p>

      </div>
  </div>
}

export default App;
