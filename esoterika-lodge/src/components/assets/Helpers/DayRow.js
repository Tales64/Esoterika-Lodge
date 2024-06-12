import logo from '../images/EsoterikaLodge.jpg';
import DayBox from '../Helpers/DayBox';
import CalendarBox from '../Helpers/CalendarBox';
import Stack from 'react-bootstrap/Stack';
import '../css/style.css'

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export default function LeadersPage () {
    return (
        <div className="App calendar">
          <Stack direction="horizontal" >
            <DayBox></DayBox>
            <DayBox></DayBox>
            <DayBox></DayBox>
            <DayBox></DayBox>
            <DayBox></DayBox>
            <DayBox></DayBox>
            <DayBox></DayBox>
          </Stack>
      </div>
    )
}