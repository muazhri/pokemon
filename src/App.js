import './App.css';
import { Routes, Route } from "react-router-dom";
import { Location } from './Page/Location';
import Page from './Page/Homepage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/location/:id' element={<Location/>}/>
    </Routes>
  );
}

export default App;