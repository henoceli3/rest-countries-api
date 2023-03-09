import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/country' element = {<Home/>}/>
        <Route path='/country/:name' element = {<Details/>}/>
        <Route path='*' element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
