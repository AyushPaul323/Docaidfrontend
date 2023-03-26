import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Carrd.css'

function Carrd() {
  function cf1() {
    window.open('https://formspree.io/forms/mwkjnkob/submissions','_blank')
    // window.location.href = 'https://console.firebase.google.com/u/0/project/no-starve/database/no-starve-default-rtdb/data';
  }
  function cf2() {
    window.open('https://doctor-abc30-default-rtdb.firebaseio.com/','_blank')
  }
  function cf3() {
    window.open('https://hospital-93273-default-rtdb.firebaseio.com/userDataRecords/-NRM_vW2XAsFkfBlOcjB','_blank')
  }
  function cf4() {
    window.open('https://docs.google.com/spreadsheets/d/1rl2oWkFSdP_LXyjP8phhYAWjjdZcbOwxu8v4dZjqEk0/edit?usp=sharing','_blank')
  }
  
   return (
    <div>
    <div className='img'>
      <div className='inn'>
    <Card className='c1'>
    <Card.Img variant="top" src="https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/6045894932692992/image/download/6526134821847040" />
    <Card.Body>
      <Card.Title>Query Section</Card.Title>
      <Card.Text>
        This a database where user or customer query will get stored after submitting the contact us form.
      </Card.Text>
      <Button variant="primary" onClick={cf1} className="a11">Click</Button>
    </Card.Body>
  </Card></div>
  <div className='inn'>
  <Card className='c1 c11'>
    <Card.Img variant="top" src="https://www.sutterhealth.org/images/medical-doctors/doctor-using-clipboard-600x300.jpg" />
    <Card.Body>
      <Card.Title>Doctor's DataBase</Card.Title>
      <Card.Text>
        This a database where doctors can able to see information about their patients after booking appointment.
      </Card.Text>
      <Button variant="primary" onClick={cf2} className="a11">Click</Button>
    </Card.Body>
  </Card></div>

  </div>

<div className='img'>
<div className='inn'>
<Card className='c1'>
<Card.Img variant="top" src="https://images.newindianexpress.com/uploads/user/imagelibrary/2018/6/16/w600X300/hospital.jpg?w=400&dpr=2.6" />
<Card.Body>
  <Card.Title>Hospital DataBase</Card.Title>
  <Card.Text>
    This a database where every hospital can see their patients record who have booked bed.
  </Card.Text>
  <Button variant="primary" onClick={cf3} className="a11">Click</Button>
</Card.Body>
</Card></div>
<div className='inn'>
</div>
</div>
  );
}



export default Carrd;
