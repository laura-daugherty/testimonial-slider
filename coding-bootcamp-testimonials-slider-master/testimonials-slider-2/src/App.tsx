import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import tanya from "./images/image-tanya.jpg"
import john from "./images/image-john.jpg"
function App() {
  const first = document.getElementById('first')
  const second = document.getElementById('second')

  if (!first) {
    return null
  }

  if (!second) {
    return null
  }

  function switchToFirst(first:HTMLElement, second:HTMLElement) {
      second.classList.remove('shown')
      first.classList.add('shown')
  }

  function switchToSecond(first:HTMLElement, second:HTMLElement) {
      first.classList.remove('shown')
      second.classList.add('shown')
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
            <button onClick={() => switchToSecond(first, second) }>
                yes
            </button>
            <button onClick={() => switchToSecond(first, second)}>
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
            <button onClick={() => switchToFirst(first, second)}>
              yes
            </button>
            <button onClick={() => switchToFirst(first, second)}>
              no
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
