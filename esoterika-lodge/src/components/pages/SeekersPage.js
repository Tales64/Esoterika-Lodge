// import logo from '../assets/images/EsoterikaLodge.jpg';
import EventCards from '../assets/Helpers/EventCards';
import '../assets/css/style.css'

export default function SeekersPage () {
    return (
        <div className="App">
        <header className="App-header">
          <EventCards></EventCards>
          <EventCards></EventCards>
          <EventCards></EventCards>
          <EventCards></EventCards>
          <EventCards></EventCards>
        </header>
      </div>
    )
}