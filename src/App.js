import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';



// app yra komponente(t.y. f-ja, kuri grazina JSX zyme)
const App = () => {
  return (
    <div className='app-wraper'>
     <Header />
      <Navbar />
      <Projects />
   </div>
  );
}

export default App;
