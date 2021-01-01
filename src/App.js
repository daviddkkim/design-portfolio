import './App.css';
import Home from './pages/home';
import Resi from './pages/resi';
import Deephire from './pages/deephire'
import InterEd from './pages/interEd'
import { Switch, Route} from 'react-router-dom'
import Header from './components/header/header'
import About from './pages/about'

function App() {
  return (
    <div className="app">
      <Header title = 'daviddkim.' navigation = {['Work','About']}></Header>
        <Switch>
          <Route path="/InterEd" component= {InterEd}  />
          <Route path="/Resi" component= {Resi}  />
          <Route path="/Deephire" component= {Deephire}  />
          <Route path="/about" component={About} />
          <Route path="/*" component= {Home} />
 
        </Switch>
    </div>
  );
}

export default App;
