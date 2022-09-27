
import Index from '.pages/Index.css';
import React from "react"
import Bookmark from '.pages/Bookmark'
import About from '.pages/About'
import Home from '.pages/Home'
import Header from '.components/Header'
import NavBar from '.components/NavBar'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"



const data = [
  {
    id: "b5db267b-3275-4a86-a9f4-e7f927d33ed0",
    question: "What is the capital of Botswana",
    answer: "Gaborone",
    tags: ["Diamonds", "Kalahari Desert", "Safari"],
    bookmarked: false,
  },
  {
    id: "8f76114b-c30c-411d-ad38-77ce69079eef",
    question: "What is the capital of Mexico",
    answer: "Mexico City",
    tags: ["Popocateptl", "Garibaldi", "Riviera Maya"],
    bookmarked: true,
  },
  {
    id: "8c74c87b-2a68-4aa1-9733-4c6917dfdf88",
    question: "What is the capital of Croatia",
    answer: "Zagreb",
    tags: ["Dubrovnik", "Wine", "Sea"],
    bookmarked: false,
  },
  
];

function App() {
  const [cards, useCards] = useState(data)
    return (
      <div className="App">
        <Header />
        <main className='main-container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home cards={cards} useCards={useCards} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Bookmark" element={<Bookmark cards={cards} useCards={useCards} />} />
          </Routes>
        </BrowserRouter>
  </main>
    </div>
    )};

    export default App