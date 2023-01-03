import './App.css';
import { Link, Router } from '@reach/router';
import { Main } from './views/Main';
import RegisterForm from './components/RegisterForm';
import Login from './views/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
            <RegisterForm path="/"/>
            <Login path="/login" />
            <Main path="/home"/>
            <Profile path="/profile/:id"/>

      </Router>
    </div>
  );
}

export default App;
