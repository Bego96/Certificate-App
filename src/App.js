
import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Homepage from './components/homepage';
import Header from './components/header';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar)
  }

  return (
    <div className="App relative">
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
      <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/> 
      <Homepage toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
    </div>
  );
}

export default App;
