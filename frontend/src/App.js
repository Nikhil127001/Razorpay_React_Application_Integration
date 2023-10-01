import './App.css';
import { BrowserRouter as Router , Routes  , Route } from 'react-router-dom'
import Home from './pages/homePage';
import SuccessPage from './pages/SuccessPage'
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/SuccessPage' element = {<SuccessPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
