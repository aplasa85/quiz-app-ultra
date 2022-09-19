import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

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