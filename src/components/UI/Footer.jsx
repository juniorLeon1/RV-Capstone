import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../../styles/Footer.css";

function Footer() {
  return (
    <MDBFooter style={{backgroundColor: "#eff3f3"}} className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div style={{backgroundColor: "#eff3f3"}}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/"
            className="me-4 text-reset"
            style={{backgroundColor: "#eff3f3"}}
          >
            <MDBIcon style={{backgroundColor: "#eff3f3"}} fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/?lang=en" className="me-4 text-reset">
            <MDBIcon style={{backgroundColor: "#eff3f3"}} fab icon="twitter" />
          </a>
          <a href="https://www.instagram.com/" className="me-4 text-reset">
            <MDBIcon style={{backgroundColor: "#eff3f3"}} fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className=" fw-bold mb-4">
                <MDBIcon />
                AvoTravler
              </h6>
              <p className="custom-color">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 style={{Color: "#eff3f3 !important"}} className=" fw-bold mb-4">DESTINATION</h6>
              <p>
                <a href="/destinations/charlotte" className="custom-color">
                  Charlotte
                </a>
              </p>
              <p>
                <a href="/destinations/brazil" className="custom-color">
                  Brazil
                </a>
              </p>
              <p>
                <a href="/destinations/puerto-rico" className="custom-color">
                  Puerto Rico
                </a>
              </p>
              <p>
                <a href="/destinations/london" className="custom-color">
                  London
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className=" fw-bold mb-4" >CONTACT</h6>
              <p className="text-dark">
                <MDBIcon color="dark" icon="home" className="me-2" />
                1101 Red Ventures Dr, Fort Mill, SC 29707
              </p>
              <p className="text-dark">
                <MDBIcon color="dark" icon="envelope" className="me-3" />
                avotravels@redventures.com
              </p>
              <p className="text-dark">
                <MDBIcon color="dark" icon="phone" className="me-3" /> +1 704
                409 3362
              </p>
              <p className="text-dark">
                <MDBIcon color="dark" icon="print" className="me-3" /> +1 980
                326 8934
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          AvoTravler
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
