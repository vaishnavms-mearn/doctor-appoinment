import React from 'react'

function Banner() {
    return (
        <div><header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2655106.jpg')", height: '500px' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className='d-flex justify-content-start  align-items-center h-100'>
                        <div className='text-white banner-content'>
                            <h1 className='mb-3 fw-bold fst-italic'>Autopsy Medical</h1>
                            <p className='mb-3 ms-5'>Are you looking for a doctor consultation near you ?<br />
                                Find & book appointments with Doctors, Clinics, Hospitals & Diagnostic Tests.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header></div>
    )
}

export default Banner