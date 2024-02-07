import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import Banner from './Banner';
function Header() {
    return (
        <div className="header-section">
            <div className="navbar-section">
                <MDBNavbar light bgColor='primary'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>
                            <i class="fa-solid fa-user-doctor  text-light ms-5 fs-2"></i>
                            <p className='mx-3 my-2  fs-4' style={{ color: "white", fontFamily: "Hind" }}>Autopsy Medical</p>
                        </MDBNavbarBrand>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        </div>
    )
}

export default Header