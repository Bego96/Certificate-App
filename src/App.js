
import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Homepage from './components/homepage';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar)
  }

  return (
    <div className="App relative">
      
           <Sidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/> 
      
            <Homepage toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>

    </div>
  );
}

export default App;
