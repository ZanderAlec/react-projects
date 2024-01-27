import './App.css';
import {useState} from 'react'

function App() {
  return (
    <div className="App">

      <div style = {{width: "20rem"}}>
        <TextExpander maxSize={400} expanded = {true}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </TextExpander>
      </div>

      <TextExpander maxSize={200} bttmColor = "red" expandButtonText = "MOSTRAR" hideButtonText ="ESCONDER">
        Nam augue odio, vulputate sit amet tincidunt ultrices, scelerisque at lorem. Donec eleifend elit id dolor congue, a fermentum dolor venenatis. Sed in elit ac magna convallis condimentum. Morbi auctor dolor ac nibh porta tincidunt. Integer id sem vitae augue eleifend sagittis ut venenatis sem. Suspendisse et velit nec nibh maximus dapibus id in justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel odio lacinia, venenatis nibh ac, fermentum turpis. Etiam mollis, turpis eu hendrerit mattis, erat magna suscipit sem, a viverra diam velit vitae nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eleifend fringilla iaculis. Vestibulum vel quam vitae tellus mollis gravida. Sed aliquet augue at purus ornare, nec pretium velit laoreet. Donec quis ullamcorper velit.
      </TextExpander>
      
    </div>
  );
}

//Tornar um component ALTAMENTE responsivo é feito por meio de props que permitam customiza-lo.
const TextExpander = ({
  maxSize = 100, 
  expanded = false,
  bttmColor = "blue", 
  expandButtonText = "Show text", 
  hideButtonText = "Hide text", 
  className,
  children}) => {

  const [show, setShow] = useState(expanded);
  const text = show ? children : children.substring(0, maxSize-3)+"...";

  //Estilos devem ser internos em components que serão exportados pra outros projetos
  const showButton = {
    color: bttmColor,
    cursor: "pointer",
    font: "inherit",
    "margin-left":"4px" 
  }

  return <div className={className}>
      {text}
      <span style = {showButton} 
            onClick={() => setShow(!show)} > 
        {show ? expandButtonText : hideButtonText}
      </span>
  </div>
}

export default App;
