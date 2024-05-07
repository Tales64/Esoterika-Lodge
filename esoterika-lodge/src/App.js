import React from 'react';
// import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import './components/assets/css/App.css'; // Adjust the path based on your actual file structure
// import { Container } from 'react-bootstrap';

// Import styles
import './components/assets/css/style.css';

// Components for each page
import MainPage from './components/pages/MainPage';
import InitiatesPage from './components/pages/InitiatesPage';
import SeekersPage from './components/pages/SeekersPage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  { path: "*", element: <Root /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
  <div>
    <Navbar></Navbar>
    <Routes>
      
        {/* Navigation or header can be added here */}
          <Route path="/" element={<MainPage/>} />
          <Route path="/initiates" element={<InitiatesPage/>} />
          <Route path="/seekers" element={<SeekersPage/>} />
          {/* Add more routes for additional pages */}
        
    </Routes>
    <Footer></Footer>
    </div>
  );
}



