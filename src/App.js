import React from 'react';
import './App.css'
import MainContainer from './components/maincontainer'
import {ExpenseProvider} from './components/Dynamic/context'

function App() {
  return (
    <ExpenseProvider>
      <MainContainer />
    </ExpenseProvider>
  );
}

export default App;
