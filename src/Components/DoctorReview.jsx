import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
function DoctorReview({rw}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="success" onClick={handleShow}>
                Reviews
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='text-primary fw-bold'>Reviews</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        {rw?.map(item => (
                            <ListGroup className='list fst-italic'>
                                <ListGroup.Item><h3 className='fw-bold'>Name : {item.patient_name}</h3></ListGroup.Item>
                                <ListGroup.Item> Date : {item.date}</ListGroup.Item>
                                <ListGroup.Item> Rating: {item.rating} <i class="fa-solid fa-star" style={{ color: '#dbdf26' }}></i></ListGroup.Item>
                                <ListGroup.Item> Comments: {item.comments}</ListGroup.Item>
                            </ListGroup>
                        ))}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default DoctorReview