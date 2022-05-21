import axios from 'axios';
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Homepage from './Homepage'
import PrivateRoute from './PrivateRoute';
import Profile from './Profile';
import Order from './CheckOrder';
import Usertab from './Usertab';
import Score from './Score';

const App = () => {
    const [isLogged, setIsLogged] = React.useState<boolean>(false)
    const [sess, setSess] = React.useState<any>([]);

// put the data in session variable
  sessionStorage.setItem("base", JSON.stringify(sess))
  const baseNoParse: any = sessionStorage.getItem("base")
  const base: any = JSON.parse(baseNoParse)



   // Get : use axios to get data
   useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://6221521cafd560ea69ad5ed1.mockapi.io/users"
      );

      setSess(result.data);
    };
    fetchData()
  }, [])

  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Homepage db={base} />} />
          <Route path="/user_board" element={<Usertab />} />
          <Route path="/score/:id" element={<Score />} />
          <Route path="/order" element={<Order />} />
          {/* <Route element={<PrivateRoute isLogged = {isLogged} />} > */}
          <Route path="/profile" element={<Profile />} />
          {/* </Route>  */}
          <Route path="*" element={<p>There's nothing here : 404!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
