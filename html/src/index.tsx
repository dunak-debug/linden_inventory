import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { store } from "./store";
import Inventory from "./components/Inventory";
import "./index.scss";
import "react-contexify/dist/ReactContexify.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <Inventory />
      </DndProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
