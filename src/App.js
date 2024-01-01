import Card from './COMPONENTES/Card/Card';
import './App.css';
import Texto from './COMPONENTES/Texto/Texto';

function App() {
  return (
    <>

      <Card titulo={'Perro'} texto={'perro feo'}></Card>
      <Texto titulo={"Perritus"} texto={"chacarro"}></Texto> 
      <Texto titulo={"dientitos"} texto={"dientes sucios"}></Texto> 
    </>
  );
}

export default App;
