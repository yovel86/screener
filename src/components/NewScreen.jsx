import { useState } from 'react';
import './newScreen.css';

const NewScreen = ( { submitQueries } ) => {

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const submitQuery = () => {
    const rawQueries = query.split("AND");
    const queries = rawQueries.map(query => {
      const queryObj = { };
      if(query.includes(">")) { 
        var [field, value] = query.split(">");
        queryObj.sign = ">";
      } else if(query.includes("<")) {
        var [field, value] = query.split("<");
        queryObj.sign = "<";
      } else {
        var [field, value] = query.split("=");
        queryObj.sign = "=";
      }
      queryObj.field = field.trim();
      queryObj.value = Number(value.trim());
      return queryObj;
    });
    submitQueries(queries);
  }

  return (
    <>
      <div className="container">
        <h2>Create a Search Query</h2>
        <p>Query</p>
        <div className="query">
          <textarea name="query" value={query} onChange={handleChange}></textarea>
          <div className="info">
            <h3>Custom query example</h3>
            <p>Marker Capitalization &gt; 500 AND</p>
            <p>Price to earning &lt; 15 AND</p>
            <p>Return on capital employed &gt; 22%</p>
            <a href="https://www.screener.in/guides/creating-screens/">Detailed guide on creating screens</a>
          </div>
        </div>
        <div className="actions">
          <button onClick={submitQuery}>
            <span class="material-symbols-outlined">play_arrow</span>
            <span>Run this query</span>
          </button>
          <button>
          <span class="material-symbols-outlined">experiment</span>
            <span>Show all ratios</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default NewScreen;