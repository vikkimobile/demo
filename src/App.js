import React,{useState, useEffect} from 'react';
import LandingScreen from './screens/LandingScreen'
import BufferingScreen from './screens/BufferingScreen';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
}, []);
  return (
    <div className="App"> 
     {isLoading ? <BufferingScreen /> :
    <BrowserRouter>
      <Routes>
        <Route  path="/signup" element={<LandingScreen />}/>
        <Route  path="/dashboard" element={<DashboardScreen />}/>
        <Route path='*' element={<Navigate to='/signup' replace />} />
      </Routes>
    </BrowserRouter>}
    </div>
  );
}

export default App;
