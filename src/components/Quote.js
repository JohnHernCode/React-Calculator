import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  // http://api.quotable.io/random

  useEffect(() => () => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        },

      );
  }, []);

  return (
    <div className="quote">
      <h1>Quote of the day</h1>
      <p className="quote-text">
        {quote}
      </p>
      <p>{author}</p>
    </div>
  );
}

export default Quote;
