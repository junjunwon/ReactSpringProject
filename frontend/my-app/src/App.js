import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import TopMenuComponent from "./component/TopMenuComponent";
import ObjectComponent from './component/ObjectComponent';
function App() {
  return (
      <div className="App">
          <div>
              <TopMenuComponent>
              </TopMenuComponent>
          </div>
          <ObjectComponent />
      </div>
  );
}

export default App;
