import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import Counter from "./Counter";
import Progress from "./Progress";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "0 auto", width: "600px" }}>
        <Progress />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
