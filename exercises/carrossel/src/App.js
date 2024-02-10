import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div >
        <Carrossel >
          <CarrosselContent>
            <div className="bg-red-700	 w-full h-full">
              <div>
                asdasdas
              </div>
            </div>
          </CarrosselContent>

          <CarrosselContent>
            <div className="bg-blue-700	 w-full h-auto			">
            <div>
                lorem saiduygasuydgausygd uyasgduygasuyd uasgdu yagsuydgasuygduyasguydgasuygduya sgduygasuydg
              </div>
            </div>
          </CarrosselContent>


          <CarrosselContent>
            <div className="bg-green-700	 h-auto			">
              <div>
                lorem saiduygasuydgausygd uyasgduygasuyd asdasdsadsadasd yagsuydgasuygduyasguydgasuygduya sgduygasuydg uyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyd
              </div>asd
            </div>
          </CarrosselContent>

        </Carrossel>
    </div>
  );
}

const Carrossel = ({children}) => {
  const [curItem, setCurItem ] = useState(0);

  function nextItem(){
    curItem+1 == children.length ? setCurItem(0) :  setCurItem(curItem+1);
  }

  function previousItem(){
    curItem-1 < 0 ? setCurItem(children.length-1) :  setCurItem(curItem-1);
  }


  return <div className = " border-2  border-solid border-black flex space-x-8 h-fit">
    
    <CarrosselBttm content = "<" clickFunction = {previousItem}/>

    <div className='flex-1'>
      <div className="relative h-fit border-2 border-solid border-red-600  " >
        {children[curItem]}
      </div>


      <CurrentBttmsContainer quant = {children.length} current = {curItem}/>
    </div>
  

    <CarrosselBttm content = ">" clickFunction = {nextItem}/>
  </div>
}

const CarrosselContent = ({children}) => {
  return <div className=" max-w-full h-max break-words">
    {children}    
  </div>
}

const CarrosselBttm = ({content, clickFunction}) => {
  return <button 
    className = " bg-white	rounded-full	px-4	py-3	border-2 border-solid border-black	content-center hover:bg-slate-300	 max-h-12			leading-5		" type=""
    onClick={() => clickFunction()}
  >
    {content}
  </button>
}

const CurrentBttmsContainer = ({quant, current}) => {

  const bttms = []

  for(let i = 0; i < quant; i++){
    current == i ? bttms.push(<CurrentCarrosselBttm active = {true} />) : bttms.push(<CurrentCarrosselBttm/>)
  }

  return <div className='mt-4	 ml-auto	mr-auto flex space-x-1.5 w-fit	'>
    {bttms}
  </div>
}

const CurrentCarrosselBttm = ({active = false}) => {
  return <div className={`rounded-full ${active? "bg-gray-500" : "bg-gray-300"}	w-4	h-4	`}>
  </div>
}

export default App;
