// src/Calendar.js
import React, { useState } from 'react';
import { format, startOfWeek, addDays, subMonths, addMonths, startOfMonth, endOfMonth, isSameMonth, isSameDay } from 'date-fns';
import '../css/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, Button, Form } from 'react-bootstrap';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Event created: ${title}, ${description} on ${selectedDate}`);
    setTitle('');
    setDescription('');
    handleClose();
  };

  const header = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className=" text-white d-flex justify-content-between align-items-center my-3">
        <Button variant="outline-primary" onClick={prevMonth}>‹</Button>
        <span className="h5 m-0">{format(currentDate, dateFormat)}</span>
        <Button variant="outline-primary" onClick={nextMonth}>›</Button>
      </div>
    );
  };

  const days = () => {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col text-center text-white" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="row">{days}</div>;
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = startOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell white ${!isSameMonth(day, monthStart)
              ? "text-muted"
              : isSameDay(day, selectedDate) ? "bg-primary text-white" : ""}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="d-block p-2">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const onDateClick = day => {
    setSelectedDate(day);
    handleShow();
  };

  return (
    <div className="container">
      {header()}
      {days()}
      {cells()}

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create Event</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEventTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEventDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter event description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Calendar;
