import './App.css';
import { Link, Router } from '@reach/router';
import { Main } from './views/Main';
import CreateTeam from './views/CreateTeam';
import LoginForm from './components/LoginForm';
import RegForm from './components/RegForm';
import CreateUser from './views/CreateUser';
import RegisterForm from './components/RegisterForm';
import Login from './views/Login';
import PrimarySearchAppBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
            <RegisterForm path="/"/>
            <Login path="/login" />
            <Main path="/home"/>
            <CreateTeam path="/project/new/"/>
      </Router>
    </div>
  );
}

export default App;
