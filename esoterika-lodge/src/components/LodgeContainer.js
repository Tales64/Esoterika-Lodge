import React, { useState } from 'react';
import MainPage from "./pages/MainPage"
import Seekers from "./pages/Seekers"
import Initiates from "./pages/Initiates"
import Visitors from "./pages/Visitors"
import Login from "./pages/Login"
import Navbar from "./NavBar"
import Footer from "./Footer"

export default function LodgeContainer () {
    const [currentPage, setCurrentPage] = useState("Lodge")
    function renderPage () {
        if (currentPage === `Main Page`) {
          return (<Login />)
        } else if (currentPage === `Seekers`) {
          return (<Seekers/>)
        } else if (currentPage === `Initiates`) {
          return (<Initiates/>)
        } else if (currentPage === `Visitors`) {
          return (<Visitors/>)
        } else {
          return (<MainPage/>)
        }
      }
      const handlePageChange = (page) => setCurrentPage(page);
      return (
        <div>
        {renderPage()}
        < Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        <Footer/>
        </div>
      )
}