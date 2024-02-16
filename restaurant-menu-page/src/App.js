import './App.css';
import { useState, useEffect } from 'react'

const types = ["Breakfast", "Miscellaneous", "Dessert", "Seafood"];


function App() {
  const [active, setActive] = useState(types[0]);
  const [foods, setFoods] = useState([]);

  const getFood = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${active}`).then((res) =>
      res.json().then((data) => {
        setFoods(data.meals);
        console.log(foods)
      }))
  }

  useEffect(function () {

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${active}`).then((res) =>
      res.json().then((data) => {
        setFoods(data.meals);
        console.log(foods)
      }))

  }, [active])


  return (
    <div className=" h-full bg-slate-200 p-10">

      <div className="pt-10 text-center	">
        <h2 className="text-5xl	pb-3 inline-block mx-48	  text-blue-950 font-semibold	border-b-4 border-b-solid border-b-orange-800">MENU</h2>

        {/*option buttons */}
        <div className="border flex gap-2.5	justify-center mt-8">
          {types.map((type) => (
            <CategoryButton key={type} selected={active === type} onMouseClick={() => { setActive(type) }}>
              {type}
            </CategoryButton>
          ))}

        </div>
      </div>
          
       {/*Food cards */}
      <div className="pt-10 grid grid-cols-2  gap-x-8  gap-y-8 w-full">

        {foods.map((food) => (
          <MenuItem title={food.strMeal} img={food.strMealThumb}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </MenuItem>
        ))}

      </div>

    </div>
  );
}

const CategoryButton = ({ selected = true, onMouseClick, children }) => {

  return (
    <button className={`border-2 border-solid py-1 px-2 rounded hover:bg-orange-700 hover:text-slate-200 
       ${selected ? "bg-orange-800 	border-t-orange-950 border-l-orange-950 border-b-orange-800 border-r-orange-800 text-slate-200"
        : " bg-slate-200 border-t-orange-800 border-l-orange-800 border-b-orange-950 border-r-orange-950 text-orange-800"}`}
      onClick={onMouseClick}
    >
      {children}
    </button>);
}

const MenuItem = ({ title, img, children }) => {
  return <div className=" w-full flex	">
    <div className='w-60 h-fit	 border-2 border-solid rounded border-t-orange-800 border-l-orange-800 border-b-orange-950 border-r-orange-950 text-orange-800	'>
      <img className="w-full " src={img} alt={title} />
    </div>

    <div className='mx-6 w-full	'>
      <div className="border-b-2 border-b-solid border-b-slate-400">
        <h3 className="text-xl	pb-2	font-semibold	 text-blue-950">{title}</h3>
      </div>

      <p className="pt-3 text-slate-700">{children}</p>

    </div>
  </div>
}

export default App;
