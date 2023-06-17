import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './views/Home'
import User from './views/User'
import Welcome from './views/Welcome'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Welcome />}  />
          <Route path="create" element={<Home />}  />
          <Route path="user" element={<User />}  />
        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
