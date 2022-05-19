import React from 'react'
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Homepage from './Homepage'
import PrivateRoute from './PrivateRoute';
import Profile from './Profile';
import Usertab from './Usertab';

const App = () => {
    const [isLogged, setIsLogged] = React.useState<boolean>(false)
  

  return (
    <div>
        {/* <Button onClick={() => setIsLogged(false)}>
            logIn
        </Button>
        <Button onClick={() => setIsLogged(true)}>
            logOut
        </Button> */}
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user_board" element={<Usertab />} />
          {/* <Route element={<PrivateRoute isLogged = {isLogged} />} > */}
             <Route path="/profile" element={<Profile />} /> 
          {/* </Route>  */}
          <Route path="*" element={<p>There's nothing here : 404!</p>} />
        </Routes>
          {/* <Link to='/profile'>Goto profile</Link> */}
      </BrowserRouter>
    </div>
  );
}

export default App
