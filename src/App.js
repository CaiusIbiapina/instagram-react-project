// import logo from './logo.svg';
import './App.css';
import Corpo from './Corpo';
import Navbar from './Navbar';

function App() {
  return (
    <div class="App">
      <Navbar/>

      <Corpo/>

      <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}

export default App;



