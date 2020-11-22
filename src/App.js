import './App.css';
import Home from './pages/home';
import { Switch, Route} from 'react-router-dom'
import Header from './components/header/header'

function App() {
  return (
    <div className="app">
      <Header title = 'daviddkim.' navigation = {['Work','About']}></Header>
        <Switch>
          <Route path="/" component= {Home} exact />
          <Route path="/about" render = { () => (<div>about</div>)} />
          <Route path="/work" render = { () => (<div>work</div>)} />  
        </Switch>
    </div>
  );
}

export default App;
