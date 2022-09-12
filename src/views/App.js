import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/Mycomponent';
import ListToDo from './Todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Nav/Nav';
import Home from './example/Home';
import ListUsers from './Users/ListUsers';
import DetailUser from './Users/DetailUser';

import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/todo">
            <ListToDo></ListToDo>
          </Route>
          <Route path="/about">
            <MyComponent></MyComponent>
          </Route>
          <Route path="/user" exact>
            <ListUsers></ListUsers>
          </Route>
          <Route path="/user/:id">
            <DetailUser></DetailUser>
          </Route>
        </Switch>



        
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
