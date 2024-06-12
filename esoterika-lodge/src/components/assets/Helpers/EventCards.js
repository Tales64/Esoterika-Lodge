import dayjs from 'dayjs'

import React from 'react';
import '../css/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../images/White Background.png';
import Card from 'react-bootstrap/Card';
const date= dayjs().format('DD')
const month= "cats"
const eventName= "cats"

export default function EventCards() {
  return (
    <>
      <Card className='cardSize'>
        <Card.Body>
          <Card.Text>
            {date}
            {month}
            {eventName}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}




