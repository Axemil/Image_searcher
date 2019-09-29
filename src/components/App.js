import React from "react";
import Searcher from "./searchComponents/Searcher";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <div className="header">
          <h2>Поисковик картинок React/API Unsplash</h2>
          <h3>Автор: Владислав Кордонец</h3>
          <a
            style={{
              textAlign: "center",
              display: "block",
              fontSize: "1.1rem",
              padding: "5px"
            }}
            href="https://github.com/Axemil/Image_searcher"
          >
            Сылка на гитхаб
          </a>
        </div>
        <div className="body">
          <Searcher />
        </div>
      </div>
    </Provider>
  );
}

export default App;
