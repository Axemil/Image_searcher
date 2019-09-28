import React from "react";
import Searcher from './searchComponents/Searcher';

function App() {
  return (
    <div className="main">
      <div className="header">
        <h2>Поисковик картинок React/API Unsplash</h2>
        <h3>Автор: Владислав Кордонец</h3>
      </div>
      <div className="body">
        <Searcher/>
      </div>
    </div>
  );
}

export default App;
