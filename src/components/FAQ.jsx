import React from 'react'
import groupA from '../images/Group 83.png'
import rectImage from '../images/Rectangle 82.png'
import sweeper from '../images/sweeper2.jpeg'

export default function FAQ() {
    return (
        <div className="container d-flex justify-content-around" style={{ marginTop: '150px', marginBottom: '150px' }}>
            <div className="left-section">
                <h2 className='mb-4' style={{ fontSize: '35px', fontWeight: 'bold' }}>FREQUENTLY ASKED <br /> QUESTIONS</h2>
                <p className='text-muted mb-4' style={{ color: '#606762', fontSize: '16px', letterSpacing: '1px', fontFamily: 'outfit', lineHeight: '30px'}}>We are happy to listen your query about pest <br /> control for your home or business. Contact us <br /> to get more information. </p>
                <i style={{color: 'red'}} class="bi bi-dash-lg"></i>
                <div className='d-flex border-bottom mb-5'>
                    <i className="bi bi-plus-lg plus-icon"></i>
                    <p className='faq-para'>How long does a treatment take to conduct</p>
                </div>

                <div className='d-flex border-bottom mb-5'>
                    <i className="bi bi-plus-lg plus-icon"></i>
                    <p className='faq-para'>Are all the products safe?</p>
                </div>

                <div className='d-flex border-bottom mb-5'>
                    <i className="bi bi-plus-lg plus-icon"></i>
                    <p className='faq-para'>What do i do if i find termites</p>
                </div>

                <div className='d-flex border-bottom mb-5' >
                    <i className="bi bi-plus-lg plus-icon"></i>
                    <p className='faq-para'>Can My Pets Be Home Whilst I am having Treatment?</p>
                </div>
            </div>
            <div className="right-section">
                <img src={sweeper} alt={sweeper} />
            </div>
        </div>
    )
}
