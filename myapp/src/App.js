import logo from './logo.svg';
import './App.css';
import Nav from './com/nav.js'
import Image from './com/image'
import Card from './com/Card'
import CardData from './com/CardData';

function App() {
  let NewPlants = CardData.map((cards)=>{
    return <Card cards={cards}></Card>
  })
  return (
    <div className='App'>
      <Nav></Nav>
      <Image></Image>
      <div className='plants'>{NewPlants}</div>

      </div>
  );
}

export default App;
