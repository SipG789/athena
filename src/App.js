import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';


function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "List of projects I have worked on throughout my course",
    },
    { name: "resume", description: "Resume of my achievements" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
      <Portfolio currentCategory={currentCategory}></Portfolio>
      <About></About>
      </main>
    </div>
  );
}

export default App;
