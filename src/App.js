
import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';

function App() {

  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="App relative">
        {
          showSidebar ? <Sidebar toggleSidebar={toggleSidebar}/> : null
        }
    </div>
  );
}

export default App;
