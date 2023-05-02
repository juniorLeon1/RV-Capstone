import React from 'react'
import "../../styles/CreateLocations.css"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio
}
from 'mdb-react-ui-kit';

const CreateLocations = () => {
  
  return (
    // <div className='createLocation-body createLocation-container'>
    //   <h1>Create Location</h1>
    //   <select name="placeNames">
    //       <option value="charlotte">Charlotte, USA</option>
    //       <option value="london">London, UK</option>
    //       <option value="pureto-rico">Pureto Rico</option>
    //       <option value="brazil">Brazil</option>
    //   </select>
    //   <select name="type">
    //       <option value="rest">Resturant</option>
    //       <option value="place">Place</option>
    //   </select>
    //   <form className="register-form">
    //     <input
    //       className="image-input"
    //       // value={userNames}
    //       // onChange={(event) => setImg(event.target.value)}
    //       id="image"
    //       name="url"
    //       placeholder="Image URL"
    //       required
    //     />

    //     <input
    //       className="LocationName-input"
    //       // value={email}
    //       // onChange={(event) => setTitle(event.target.value)}
    //       type="name"
    //       id="location"
    //       name="locationName"
    //       placeholder="Location Name"
    //       required
    //     />

    //     <input
    //       className="Desc-input"
    //       // value={passwords}
    //       // onChange={(event) => setDesc(event.target.value)}
    //       type="description"
    //       id="desc"
    //       name="description"
    //       placeholder="Description Here"
    //       required
    //     />

    //     <button type="submit" className="submit-button">
    //       Register
    //     </button>
    //   </form>
    // </div>
    <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

            <MDBRow>

              <MDBCol md='6'>
                {/* <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/> */}
                <select name="placeNames">
                  <option value="charlotte">Charlotte, USA</option>
                  <option value="london">London, UK</option>
                  <option value="pureto-rico">Pureto Rico</option>
                  <option value="brazil">Brazil</option>
                </select>
              </MDBCol>

              <MDBCol md='6'>
                <select name="type">
                  <option value="rest">Resturant</option>
                  <option value="place">Place</option>
                </select>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Image URL' size='lg' id='form3' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Location Name' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Location Description' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>

            <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
  )
}

export default CreateLocations
