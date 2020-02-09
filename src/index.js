import React from "react";
import ReactDOM from "react-dom";
import Bare from './components/bare.js'

const App = () => {
  return (<>
            <Bare />
          </>
          );
};

ReactDOM.render(<App />, document.querySelector("#root"));