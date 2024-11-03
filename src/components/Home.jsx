import React from 'react'
import homeImage from '../images/Group 106.png'
import pestImage from '../images/guarantee.png'
import termitesImage from '../images/termites.png'
import mosqImage from '../images/mosquito.png'
import clockImage from '../images/clock.png'
import rectangleImage from '../images/Rectangle 72.png'

export default function Home() {
  return (

    <>
      {/* {home page section} */}
      <div style={{
        backgroundImage: `url(${rectangleImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '800px',
        top:'34px',
        width: '1704px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}>
        <div className='container d-flex justify-content-around align-items-center'>
          <div className="left">
            <h5 style={{ color: 'red', width: '668px' }}><b>Call For</b></h5>
            <h1 style={{ fontSize: '3rem', letterSpacing: '0.1em' }}><b>PROFESSIONAL PEST <br />CONTROL</b></h1>

            <div className='text-muted mt-4 lh-lg'>
              <p style={{ wordSpacing: '2px', letterSpacing: '1px'}}>Looking for an affordable pest control and disinfection service?<br />We are here to get rid of annoying bugs.</p>
            </div>

            <div className='mt-4'>
              <button className='btn btn-outline-secondary btn-lg'>contact us</button>
            </div>
          </div>

          <div className="right">
            <img className='homeImage' src={homeImage} alt={homeImage} />
          </div>
        </div>

        {/* pest-box grid section */}
        <div className="container" style={{ marginTop: '100px', marginBottom: '90px' }}>
          <div className="section_A d-flex justify-content-evenly align-items-center">
            <div className="item text-center">
              <div className="div-box">
                <img src={pestImage} alt="Professional Guarantee" />
              </div>
              <p className='mt-2'><b>100% professional</b></p>
            </div>

            <div className="item text-center">
              <div className="div-box">
                <img src={termitesImage} alt="Termites" />
              </div>
              <p className='mt-2'><b>Termites</b></p>
            </div>

            <div className="item text-center">
              <div className="div-box">
                <img src={mosqImage} alt="Mosquito Control" />
              </div>
              <p className='mt-2'><b>All pest control</b></p>
            </div>

            <div className="item text-center">
              <div className="div-box">
                <img src={clockImage} alt="Same Day Services" />
              </div>
              <p className='mt-2'><b>Same day Services</b></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


