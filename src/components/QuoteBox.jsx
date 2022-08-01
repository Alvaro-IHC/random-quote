import React, { useState } from "react";
import quotes from "../quotes.json";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import "./QuoteBox.css";

const QuoteBox = ({ changeColor, color }) => {
  const [random, setRandom] = useState(
    Math.floor(Math.random() * quotes.length)
  );
  const handleClick = () => {
    setRandom(Math.floor(Math.random() * quotes.length));
    changeColor(color);
  };

  return (
    <div id="quote-box">
      <div id="text" style={{ color }}>
        <FaQuoteLeft />
        {` ${quotes[random].quote}`}
      </div>
      <div id="author" style={{ color }}>{`- ${quotes[random].author}`}</div>
      <div className="container-buttons">
        <a
          id="tweet-quote"
          style={{ backgroundColor: color }}
          href="https://twitter.com/intent/tweet"
        >
          <FaTwitter />
        </a>
        <button
          id="new-quote"
          style={{ backgroundColor: color }}
          onClick={handleClick}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
