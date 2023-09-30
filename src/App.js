
import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from './components/mainContainer';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar)
  }

  return (
    <div className="App relative">
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
      <BrowserRouter>
        <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/> 
       
          <MainContainer toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

