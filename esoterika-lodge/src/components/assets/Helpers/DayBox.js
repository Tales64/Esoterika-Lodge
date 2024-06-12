import dayjs from 'dayjs'

import React from 'react';
import '../css/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../images/White Background.png';
import Card from 'react-bootstrap/Card';
const dayofTheWeek= [" "]


export default function DayBox() {
  return (
    <>
      <Card className='cardSize'>
        <Card.Body>
          <Card.Text>
         {dayofTheWeek}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
