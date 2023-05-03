import React from "react";
import "../../styles/CreateLocations.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio,
} from "mdb-react-ui-kit";

const CreateLocations = () => {
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center align-items-center m-5">
        <MDBCard>
          <MDBCardBody className="px-4">
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5" style={{color: "#fbb120"}}>
              Registration Form
            </h3>

            <MDBRow className="FormLine">
              <MDBCol md="6">
                <select name="placeNames" className="sort-drpdwn">
                  <option value="charlotte">Charlotte, USA</option>
                  <option value="london">London, UK</option>
                  <option value="pureto-rico">Pureto Rico</option>
                  <option value="brazil">Brazil</option>
                </select>
              </MDBCol>

              <MDBCol md="6">
                <select name="type" className="sort-drpdwn">
                  <option value="rest">Resturant</option>
                  <option value="place">Place</option>
                </select>
              </MDBCol>
            </MDBRow>

            <MDBRow className="TopForm">
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Image URL"
                  size="lg"
                  id="form3"
                  type="text"
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Location Name"
                  size="lg"
                  id="form4"
                  type="email"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Location Description"
                  size="lg"
                  id="form5"
                  type="rel"
                />
              </MDBCol>
            </MDBRow>

            <MDBBtn className="mb-4" size="lg" style={{backgroundColor: "#fbb120"}}>
              Submit
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default CreateLocations;
