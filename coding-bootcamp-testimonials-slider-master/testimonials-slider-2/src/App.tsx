import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import tanya from "./images/image-tanya.jpg"
import john from "./images/image-john.jpg"
function App() {
  function switchToFirst() {
    let second = document.getElementById('second')
    second?.classList.remove('shown')
    let first = document.getElementById('first')
    first?.classList.add('shown')
  }
  function switchToSecond() {
    let first = document.getElementById('first')
    first?.classList.remove('shown')
    let second = document.getElementById('second')
    second?.classList.add('shown')
  }
  
  return (
    <div className="App">
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="carousel-div shown" id="first">
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
            <button onClick={() => switchToSecond() }>
                yes
            </button>
            <button onClick={() => switchToSecond()}>
                no
            </button>
          </div>
        <div className="carousel-div" id="second">
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
            <button onClick={() => switchToFirst()}>
              yes
            </button>
            <button onClick={() => switchToFirst()}>
              no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
