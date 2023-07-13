import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Create from './views/Create'
import Current from './views/Current'
import Welcome from './views/Welcome'
import Error404 from './views/Error404'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {<Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Welcome />}  />
          <Route path="create" element={<Create />}  />
          <Route path="current" element={<Current />}  />
          <Route path="*" element={<Error404 />}  />
        </Route>
      </Routes>
    </Router> 
  );
}

export default App;
