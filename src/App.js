import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arrCard = [
  { title: "Nike Blazer Mid Suede", price: 150, image: "./img/sneakers/1.jpg" },
  { title: "Nike Air Max 270", price: 150, image: "./img/sneakers/2.jpg" },
  { title: "Nike Blazer Mid Suede", price: 110, image: "./img/sneakers/3.jpg" },
  { title: "Puma X Aka Boku Future Rider", price: 115, image: "./img/sneakers/4.jpg"}
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40 ">
          <h1> ALLLLLLL</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Found" />
          </div>
        </div>

        <div className="d-flex">
          {arrCard.map((obj)=>(<Card title={obj.title} price={obj.price} image={obj.image}/>))}
        </div>
      </div>
    </div>
  );
}

export default App;
