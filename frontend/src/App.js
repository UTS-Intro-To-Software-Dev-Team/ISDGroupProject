import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Shop from './components/Shop';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/register' element={<Register />}/>
        </Routes>
        <Routes>
          <Route path='/shop' element={<Shop />}/>
        </Routes>
      </header>
    </div>
    </Router>
  )
}

export default App
