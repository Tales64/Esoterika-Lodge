// import logo from '../assets/images/EsoterikaLodge.jpg';
// import EventCards from '../assets/Helpers/EventCards';
// import '../assets/css/style.css'

// export default function SeekersPage () {
//     return (
//         <div className="App">
//         <header className="App-header">
//           <EventCards></EventCards>
//           <EventCards></EventCards>
//           <EventCards></EventCards>
//           <EventCards></EventCards>
//           <EventCards></EventCards>
//         </header>
//       </div>
//     )
// }

// src/EventsPage.js


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Offcanvas, Button, ListGroup } from 'react-bootstrap';

const SeekersPages = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, [page]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/events?page=${page}`);
      setEvents(response.data);
    } catch (error) {
      console.error('There was an error fetching the events!', error);
    }
  };

  const handleEventClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/events/${id}`);
      setSelectedEvent(response.data);
      setShow(true);
    } catch (error) {
      console.error('There was an error fetching the event details!', error);
    }
  };

  const handleClose = () => setShow(false);

  return (
    <div className="container">
      <h2 className="my-4">Upcoming Events</h2>
      <ListGroup>
        {events.map(event => (
          <ListGroup.Item key={event._id} action onClick={() => handleEventClick(event._id)}>
            {event.title} - {new Date(event.date).toLocaleDateString()}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="d-flex justify-content-between mt-4">
        <Button variant="outline-primary" onClick={() => setPage(page > 1 ? page - 1 : 1)} disabled={page === 1}>Previous</Button>
        <Button variant="outline-primary" onClick={() => setPage(page + 1)}>Next</Button>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Event Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedEvent && (
            <div>
              <h5>{selectedEvent.title}</h5>
              <p>{selectedEvent.description}</p>
              <p><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleString()}</p>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SeekersPages;
