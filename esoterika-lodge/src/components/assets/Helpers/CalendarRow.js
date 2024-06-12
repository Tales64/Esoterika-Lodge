import logo from '../images/EsoterikaLodge.jpg';
import CalendarBox from '../Helpers/CalendarBox';
import Stack from 'react-bootstrap/Stack';
import '../css/style.css'

export default function LeadersPage () {
    return (
        <div className="App calendar">
          <Stack direction="horizontal">
            <CalendarBox></CalendarBox>
            <CalendarBox></CalendarBox>
            <CalendarBox></CalendarBox>
            <CalendarBox></CalendarBox>
            <CalendarBox></CalendarBox>
            <CalendarBox></CalendarBox>
            <CalendarBox></CalendarBox>
          </Stack>
      </div>
    )
}