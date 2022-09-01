import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data  from "./data/data";

function App() {
  
  return (
    <div className="App">
      <Header/>
   <div className="card_wrapper">
     {data.map(function(item,i){
      if(item.id===1){
        return <Card id={"left"} key={item.id} title={item.title} img={item.img}/>
      }
      else if( item.id===2 ){
        return <div className="inner_container">
          <Card id={"middle-2"} key={item.id} title={item.title} img={item.img}/>
          <Card id={"middle-3"} key={item.id+1} title={data[i+1].title} img={data[i+1].img}/>
        </div>
      }
      else if( item.id===4 ){
        return <Card id={"right"} key={item.id} title={item.title} img={item.img}/>
      }
      
     })}
   </div>


    </div>
  );
}

export default App;
