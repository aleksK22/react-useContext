import React from 'react';
import './App.css';
import {DataProvier} from './Context/DataContext'
import Nav from './Shared/Nav/Nav'
import DataList from './Data/DataList'

function App() {
  return (
    <DataProvier>
      <div className="App">
         <Nav></Nav>
         <DataList></DataList>
      </div>
    </DataProvier>
  );
}

export default App;
