import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import DoctorReview from './DoctorReview';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
function ViewDoctors() {
  const [show, setShow] = useState(false);
  const [restDetails, setRestDetails] = useState({})
  const { id } = useParams()
  const base_url = 'https://doctorapp-backend-d4js.onrender.com/doctors'
  const fetchData = async () => {
    //http://localhost:3000/view/1
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result);
    setRestDetails(result.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  let availableDays = restDetails.available_days
  if (availableDays) {
    var days = '';
    for (var i in availableDays) {
      days += availableDays[i];
      if (i < availableDays.length - 1) {
        days += ',';
      }
    }
  }

  return (
    <div>
      <div className="display-section">
        <div className="container">
          <Card className='display' >
            <Card.Body>
              <Row  >
                <Col md={12} xl={6}>
                  <Card.Title>
                    <img src="https://cdn.dribbble.com/users/514480/screenshots/2091133/doctor.gif" className='view-image img-fluid' alt="" style={{ height: '400px', marginTop: '40px' }} lg={{height:'200px'}} />
                  </Card.Title>
                </Col>
                <Col md={12} xl={6}>
                  <Card.Text>
                    <h1 className='my-3 p-3 text-primary fw-bold'>{restDetails.name}<br></br>({restDetails.specialty})</h1>
                    <h3 className='text-success fw-bold'>{restDetails.hospital}</h3>
                    <div className="doctor-details">
                      <p>Address: {restDetails.address}</p>
                      <p>Phone No: {restDetails.phone}</p>
                      <p>Email: {restDetails.email}</p>
                      <p>Overall rating: {restDetails.rating} <i class="fa-solid fa-star" style={{ color: '#dbdf26' }}></i></p>
                    </div>
                    <div className="available-days my-3">
                      <Toast className='toast' style={{ marginLeft: '100px', marginBottom: '20px' }} onClose={() => setShow(false)} show={show} >
                        <Toast.Header>
                          <strong className="me-auto">Availability</strong>
                        </Toast.Header>
                        <Toast.Body>
                          <div className="toast-body">
                            <span className='text-primary'> Days: </span> {days}  <br />
                            <span className='text-primary'> Hours:</span> {restDetails.available_hours}
                          </div>
                        </Toast.Body>
                      </Toast>
                      <div className="buttons">
                        <Button onClick={() => setShow(true)}>Availability</Button>
                        <DoctorReview rw={restDetails.reviews} />
                      </div>
                    </div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ViewDoctors