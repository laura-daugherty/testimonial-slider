import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import tanya from "./images/image-tanya.jpg"
import john from "./images/image-john.jpg"
function App() {

  return (
    <div className="App">
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-div">
              <div>
                <p>
                “ If you want to lay the best foundation possible I’d recommend taking this course. 
          The depth the instructors go into is incredible. I now feel so confident about 
          starting up as a professional developer. ”
                </p>
                <h2>
                  Tanya Sinclair
                </h2>
                <h3>
                  UX Engineer
                </h3>
              </div>
              <div>
                <img src={tanya} alt="picture of Tanya"/>
              </div>
            <div className="carousel-div">
              <div>
                <p>
                “ I’ve been interested in coding for a while but never taken the jump, until now. 
                  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                  excited about the future. ”
                </p>
                <h2>
                  John Tarkpor
                </h2>
                <h3>
                  Junior Front-end Developer
                </h3>
              </div>
              <div>
                <img src={john} alt="picture of John"/>
              </div>
            </div>
            <button onClick={() => }>
              yes
            </button>
            <button onClick={() => }>
              no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
