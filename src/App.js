import './App.css';
import {Route, Routes} from 'react-router-dom'
import Contentview from './Contentview';
import Tokenview from './Tokenview';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contentview/>}/>
        <Route path="/Tokenview" element={<Tokenview/>}/>
      </Routes>
    </>
  );
}

export default App;
