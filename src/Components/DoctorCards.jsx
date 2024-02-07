import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function DoctorCards({ doctors }) {
    return (
        <div>
            <MDBCard className='my-5 mx-4' style={{height: '300px', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',borderRadius:'15px',width:'350px',height:'280px',padding:'15px'}}>
                <MDBCardBody>
                    <MDBCardTitle><h3 className='text-success fw-bold'>{doctors.name}</h3></MDBCardTitle>
                    <MDBCardText>
                        <div className="details">
                            <h5 className='text-primary fw-bold my-3'>{doctors.hospital}</h5>
                            <p className='fst-italic'>{doctors.specialty}</p>
                            <p>{doctors.rating} <i class="fa-solid fa-star" style={{ color: '#dbdf26' }}></i></p>
                        </div>
                        <Link to={`view/${doctors.id}`} style={{textDecoration:'none'}}>
                        <MDBBtn color="info" style={{borderRadius:"10px",padding:'9px'}}>More Details</MDBBtn>
                        </Link>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>

        </div>
    )
}

export default DoctorCards