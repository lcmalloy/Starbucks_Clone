import './styles/App.css';
import Banner from './components/Banner.jsx'
import ContentTile from './components/ContentTile.jsx'

let testData = [
  {
    image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82007.jpg",
    text: "Starbucks® Rewards + Delta SkyMiles® have come together! Link your accounts to get 1 mile per $1* spent at Starbucks.",
    boxColor: '#d50033',
  },
  {
    image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82251.jpg",
    text: "Fa la la favorite Cheers to the Toasted White Chocolate Mocha with caramelized flavors and merry toppings.",
    boxColor: '#01b288'
  }
]
function App() {

let mapData = testData.map((data) =>
  <ContentTile data={data} />
);
  return (
    <div className="App">
      <div className="Header">
        <Banner />
      </div>
      <div className="Body">
        {mapData}
      </div>
    </div>
  );
}

export default App;
