import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "../../styles/Footer.css";

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='text-dark'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset' style={{ color: 'red' }}>
            <MDBIcon color='primary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com/?lang=en' className='me-4 text-reset'>
            <MDBIcon color='primary' fab icon='twitter' />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon color='warning' fab icon='instagram' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-primary fw-bold mb-4'>
                <MDBIcon color='primary' icon='gem' className='me-3' />
                AvoTravler
              </h6>
              <p className="custom-color">
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-primary fw-bold mb-4'>DESTINATION</h6>
              <p>
                <a href='#!' className="custom-color">
                  Charlotte
                </a>
              </p>
              <p>
                <a href='#!' className="custom-color">
                  Brazil
                </a>
              </p>
              <p>
                <a href='#!' className="custom-color">
                Puerto Rico
                </a>
              </p>
              <p>
                <a href='#!' className="custom-color">
                  London
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-primary fw-bold mb-4'>CONTACT</h6>
              <p className="text-dark">
                <MDBIcon color='dark' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p className="text-dark">
                <MDBIcon color='dark' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p className="text-dark">
                <MDBIcon color='dark' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p className="text-dark">
                <MDBIcon color='dark' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          AvoTravler
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
