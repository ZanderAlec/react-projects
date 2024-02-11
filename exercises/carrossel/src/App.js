import './App.css';
import { useState } from 'react';
import leavesBkg from './assets/leavesBKG.jpg'

function App() {
  return (
    <div >
      <Carrossel >
        <CarrosselContent>
          <div className='relative h-96'>

            <img src={leavesBkg} alt="" className='object-fill h-full w-full ' />
            <div className='absolute top-20   '>
              <h2 className='bg-white inline-block md:text-5xl		'>Isso é um título!</h2>
              <p className='bg-white lg:w-5/6 p-8'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <span className='absolute top-0 right-10 text-yellow-400	'>Image byFreepik</span>


          </div>
        </CarrosselContent>

        <CarrosselContent>
          <div className='relative h-96'>

            <img src={leavesBkg} alt="" className='object-fill h-full w-full ' />
            <div className='absolute top-20 lg:left-52'>
              <h2 className='bg-white sm:text-3xl  lg:text-5xl 	'>Esse é outro título!</h2>
            </div>
            <span className='absolute top-0 right-10 text-yellow-400	'>Image byFreepik</span>


          </div>
        </CarrosselContent>


        <CarrosselContent>
          <div className="bg-green-700	 h-auto			lg:p-40 sm:p-8 text-white">
            <div>
              lorem saiduygasuydgausygd uyasgduygasuyd asdasdsadsadasd yagsuydgasuygduyasguydgasuygduya sgduygasuydg uyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyduyasgduygasuyd
            </div>asd
          </div>
        </CarrosselContent>


      </Carrossel>
    </div>
  );
}

const Carrossel = ({ children }) => {
  const [curItem, setCurItem] = useState(0);

  function nextItem() {
    curItem + 1 === children.length ? setCurItem(0) : setCurItem(curItem + 1);
  }

  function previousItem() {
    curItem - 1 < 0 ? setCurItem(children.length - 1) : setCurItem(curItem - 1);
  }

  const bttms = [];

  for (let i = 0; i < children.length; i++) {
    curItem === i ? bttms.push(<CurrentCarrosselBttm id={i} setCurItem={setCurItem} active={true} />)
      : bttms.push(<CurrentCarrosselBttm id={i} setCurItem={setCurItem} />)
  }


  return <div className=" flex content-between ">

    <CarrosselBttm content="<" clickFunction={previousItem} />

    <div className='flex-1'>
      <div className="relative h-fit border-2 border-solid" >
        {children[curItem]}
      </div>

      <div className='mt-4	 ml-auto	mr-auto flex space-x-1.5 w-fit	pb-2.5	'>
        {bttms}
      </div>
    </div>

    <CarrosselBttm content=">" clickFunction={nextItem} />
  </div>
}

const CarrosselContent = ({ children }) => {
  return <div className="  h-max break-all">
    {children}
  </div>
}

const CarrosselBttm = ({ content, clickFunction }) => {
  return <button
    className=" bg-white	rounded-full	px-4	py-3	border-2 border-solid border-black	content-center hover:bg-slate-300	 max-h-12	leading-5	self-center	" type=""
    onClick={() => clickFunction()}
  >
    {content}
  </button>
}


const CurrentCarrosselBttm = ({ id, setCurItem, active = false }) => {
  return <button
    className={`rounded-full ${active ? "bg-gray-500" : "bg-gray-300"}	w-4	h-4	`}
    onClick={() => setCurItem(id)}
  >
  </button>
}

export default App;
