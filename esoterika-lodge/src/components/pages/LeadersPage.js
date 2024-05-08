import logo from '../assets/images/EsoterikaLodge.jpg';
import CalendarBox from '../assets/Helpers/CalenderBox';
import '../assets/css/style.css'

export default function LeadersPage () {
    return (
        <div className="App calendar">
        <header className="App-header">
          <CalendarBox></CalendarBox>
          <CalendarBox></CalendarBox>
          <CalendarBox></CalendarBox>
          <CalendarBox></CalendarBox>
          <CalendarBox></CalendarBox>
          <CalendarBox></CalendarBox>
          <CalendarBox></CalendarBox>
        </header>
      </div>
    )
}