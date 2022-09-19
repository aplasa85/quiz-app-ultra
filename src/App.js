import "./App.css";
import Header from "./Components/header/Header";
import Navigation from "./Components/navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <main className= "app__main">
        <Card />
        <Card />
        <Card />
        <Card />
       </main>
      <Navigation />
    </div>
  );
}

export default App;