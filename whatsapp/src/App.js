import './App.css';
import React, {useState} from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {

  // const[user, setUser] = useState(null);
  const[{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      { !user ? (
        <Login />
      ) : (
      <div className="app__body">   {/*BEM naming convention*/}
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">   {/* : wildcard - whatever roomId render Chat*/}    
              <Chat />
            </Route>
            <Route path="/">
              {/* <Chat /> */}
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );

}

export default App;
