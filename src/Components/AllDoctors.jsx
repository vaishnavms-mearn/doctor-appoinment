import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import DoctorCards from './DoctorCards'
import Banner from './Banner'
function AllDoctors() {
  const base_url = 'https://doctorapp-backend-d4js.onrender.com/doctors'
  const [AllRestData, setAllRestData] = useState([])
  const fetchData = async () => {
    const result = await axios.get(base_url)
    console.log(result);
    setAllRestData(result.data)
  }
  useEffect(() => { fetchData() }, [])
  return (
    <div className='cards-section bg-light'>
      <Banner />
      <div className="container">
      <h1 className='text-center mt-5 mb-3 fw-bolder text-primary'>
      <i class="fa-solid fa-calendar-check fa-lg mx-3"></i>Available Doctors</h1>
        <Row>
          {AllRestData.map(item => (
            <Col sm={12} md={6} lg={4}>
              <DoctorCards doctors={item} />
            </Col>
          ))}
        </Row></div>
        </div>
  )
}

export default AllDoctors