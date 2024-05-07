import React from 'react';
import './assets/css/style.css'
import {
    Link
  } from "react-router-dom";
// import logo from './assets/images/EsoterikaLodge.jpg';

export default function Navbar ({currentPage, handlePageChange}) {
    
    return (
        <div>
        <nav>
        <ul className="nav">
            <li className="nav-item">
                <Link to="seekers">Seekers</Link>
            </li>
            <li className="nav-item">
            <Link to="initiates">initiates</Link>
            </li>
        </ul>
        </nav>
        </div>
        )
}