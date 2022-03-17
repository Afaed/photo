import React from 'react';
import { capitalizeFirstLetter } from "../../src/utils/helpers";

function Nav() {
    const category = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];
    const handleClick = () => {
        console.log("click handled")
      }
    function categorySelected(){
        console.log(`${category.name} clicked`)
    }
    return (
        <header data-testid="header" className="flex-row px-1">
          <h2>
            <a href="/">
              <span role="img" aria-label="camera"> 📸</span> Oh Snap!
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
                category.map((category) => (
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