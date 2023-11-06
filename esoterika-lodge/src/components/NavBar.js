import React from 'react';
import './assets/style.css';
import logo from './assets/images/EsoterikaLodge.jpg';

export default function Navbar ({currentPage, handlePageChange}) {
    
    return (
        <ul className="nav">
            <li className="nav-item">
                <a href='#Seekers' className={currentPage === 'Seekers' ? 'nav-link active' : 'nav-link'} onClick={()=>handlePageChange("Seekers") }>Seekers</a>
            </li>
            <li className="nav-item">
                <a href='#Initiates' className={currentPage === 'Initiates' ? 'nav-link active' : 'nav-link'} onClick={()=>handlePageChange("Initiates")}>Initiates</a>
            </li>
        </ul>
        
        )
}