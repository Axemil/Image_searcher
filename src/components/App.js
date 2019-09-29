import React from "react";
import Searcher from "./searchComponents/Searcher";
import { Provider } from "react-redux";
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <div className="header">
          <h2>Поисковик картинок React/API Unsplash</h2>
          <h3>Автор: Владислав Кордонец</h3>
        </div>
        <div className="body">
          <Searcher />
        </div>
      </div>
    </Provider>
  );
}

export default App;
