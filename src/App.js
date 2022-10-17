import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./components/AppRoute";


function App() {
 
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <AppRoute />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;