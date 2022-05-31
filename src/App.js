
import './App.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Create from './pages/Create';
import Explore from './pages/Explore';
import {BrowserRouter as Router,Routes,Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { blockchainAction } from './redux/actions/blockchainAction';
import { useEffect } from 'react';
//import Purchased from './components/Purchased';
function App() {
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(blockchainAction())
    },[dispatch])
  return (
    <Router>
    <div className="app">
      <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' exact element={<Create />} />
          <Route path='/explore' exact element={<Explore />} />
        </Routes> 
    </div>
    </Router>
  );
}

export default App;
