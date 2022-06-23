import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const  categories = [
        { name: 'Portfolio', description: 'List of projects I have worked on throughout my course' },
        { name: 'Resume', description: 'Resume of my achievements' },
      ];    

        
      const handleClick = () => {
        console.log("click handled")
      }
    
      return (
        <header data-testid="header" className="flex-row px-1">
          <h2>
            <a href="/">
            Sipriano Gonzalez 
            </a>
          </h2>
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                <a href="#about" onClick={() => handleClick()}>
                  About me
                </a>
              </li>
              <li className={"mx-2"}>
                <span onClick={() => handleClick()}>
                  Contact
                </span>
              </li>
              {
                categories.map((category) => (
                  <li className="mx-1" key={category.name} >
                    <span onClick={() => { handleClick(); }}>
                     {capitalizeFirstLetter(category.name)}
                    </span>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
      );
    }
    
    export default Nav;