import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import App from "./components/App";
import "./index.scss";

import { debugData } from "./utils/debugData";
debugData([
  {
    action: "openinventory",
    data: {
      player: {
        name: "test",
        slots: 10,
        weight: 4,
        maxWeight: 10,
        items: [
          {
            slot: 1,
            name: "water",
            label: "water",
            weight: 10,
            count: 5,
          },
          {
            slot: 2,
            name: "burger",
            label: "test",
            weight: 10,
            count: 5,
          },
        ],
      },
    },
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <App />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
