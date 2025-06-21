import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";


const Home = () => {
	return (
    <>
      <Navbar title={"CGERC"}/>
      <Jumbotron title={"LANDING PAGE"}/>
      <div class="row align-items-start">
    <div class="col">
      <Card title={"t1"} imageUrl={"https://picsum.photos/300/200?random=1"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, natus."}/>
      
    </div>
    <div class="col">
      <Card title={"t1"} imageUrl={"https://picsum.photos/300/200?random=2"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, natus."}/>
     
    </div>
    <div class="col">
      <Card title={"t1"} imageUrl={"https://picsum.photos/300/200?random=3"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, natus."}/>
    
    </div>
     <div class="col">
      <Card title={"t1"} imageUrl={"https://picsum.photos/300/200?random=4"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, natus."}/>
    
    </div>
  </div>

    </>
    
	);
};

export default Home;