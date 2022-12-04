import React from 'react';
import { dev1, dev3 } from "./Classes/Worker";
import './App.css';
import AppRouter from './router/AppRouter';


function App() {

  dev3.Presentation();
  dev1.Address();
  //* un parametro protected se puede visualizar con un método public
  // console.log(dev2.ageProtected);

  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
