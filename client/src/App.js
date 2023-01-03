import './App.css';
import { Link, Router } from '@reach/router';
import { Main } from './views/Main';
import RegisterForm from './components/RegisterForm';

import PrimarySearchAppBar from './components/Navbar';
import NewPost from './components/NewPost';

import Login from './views/Login';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Router>
            <RegisterForm path="/"/>
            <LoginForm path="/login"/>
            <Main path="/home"/>

            <NewPost path="/add-post"/>
            <CreateTeam path="/project/new/"/>

            <Profile path="/profile/:id"/>


      </Router>
    </div>
  );
}

export default App;
