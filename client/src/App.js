import './App.css';
import { Link, Router } from '@reach/router';
import { Main } from './views/Main';
import CreateTeam from './views/CreateTeam';
import LoginForm from './components/LoginForm';
import RegForm from './components/RegForm';
import CreateUser from './views/CreateUser';
import RegisterForm from './components/RegisterForm';
import PrimarySearchAppBar from './components/Navbar';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className="App">
      <Router>
            <RegisterForm path="/"/>
            <LoginForm path="/login"/>
            <Main path="/home"/>
            <NewPost path="/add-post"/>
            <CreateTeam path="/project/new/"/>
      </Router>
    </div>
  );
}

export default App;
