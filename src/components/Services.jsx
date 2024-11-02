import React from 'react'
import clockImage from '../images/clock.png'
import meetingImage from '../images/Meeting.png'
import gauranteeImage from '../images/guarantee.png'
import bugImage from '../images/bug.png'

export default function Services() {
    return (
        <div className='container d-flex justify-content-around' style={{marginBottom: '150px'}}>
            <div className="left-section">
                <h3 className="display-5 fw-bold" style={{ fontSize: '2rem', letterSpacing: '2px', lineHeight: '45px', fontWeight: '600' }}>COMPLETE PEST <br />PROTECTION, FROM PEOPLE <br />WHO CARE</h3>
                <p className='content text-muted'>We’re known as pest exterminators, termite control specialists and a major authority when it comes to on pest control in Australia, but we’re actually much more than that. Competitive Pest Control is also an award-winning business that’s supported by a down to earth approach. Our friendly, professionally trained technicians will meet you on time, in time, every time to solve your pest problems..</p>
                <button className='btn btn-outline-secondary btn-lg'>Learn More</button>
            </div>
            <div className='right-section'>
                <div className='service-div border-bottom border-3'>
                    <img className='service-image' src={clockImage} alt={clockImage} />
                    <p>Same-day Appointments</p>
                    <hr />
                </div>

                <div className='service-div border-bottom border-3'>
                    <img className='service-image' src={meetingImage} alt={meetingImage} />
                    <p>Professional customer support</p>
                    <hr />
                </div>

                <div className='service-div border-bottom border-3'>
                    <img className='service-image' src={gauranteeImage} alt={gauranteeImage} />
                    <p>Approved and safe Pest control products</p>
                    <hr />
                </div>

                <div className='service-div border-bottom border-3'>
                    <img className='service-image' src={bugImage} alt={bugImage} />
                    <p>Complete inspection and treatment</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}
