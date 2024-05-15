import logo from '../assets/images/EsoterikaLodge.jpg';
import CalendarRow from '../assets/Helpers/CalendarRow';
import '../assets/css/style.css'
import {
  Route,
  Routes,
} from "react-router-dom";

export default function LeadersPage () {
    return (
        <Routes className="App calendar">
          <Route path="joyfulLeader" element={<header className="App-header">
          <div>
            <CalendarRow></CalendarRow>
            <CalendarRow></CalendarRow>
            <CalendarRow></CalendarRow>
            <CalendarRow></CalendarRow>
          </div>
        </header>}/>
        
      </Routes>
    )
}