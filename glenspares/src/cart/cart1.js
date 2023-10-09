import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from "./LOGO.svg";
import carImage from './carImage.svg';
import image from './headerimage.png';

export default function Cart() {
    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#FFFFFF" }}>

            <div className="header">

                <nav className="topnav">
                    <NavLink to="/" activeclassname="active">Home</NavLink>
                    <NavLink to="/cart" activeclassname="active">Checkout</NavLink>
                    <NavLink to="/AddPart" activeclassname="active">Add Part</NavLink>
                </nav>

                <div className="container d-flex justify-content-center">
                    <img className="logo" src={logo} alt="image" />
                </div>

                <img className="headerimage" src={image} alt="image" />

                <div className="container d-flex justify-content-center">
                    <h1 className="heading">GLEN SPARES</h1>
                </div>


                <p className="description">
                    At GlenSpares, we take immense pride in our rich heritage within the automotive industry. For over four decades, we have been the trusted name for car enthusiasts and mechanics alike, providing top-notch car parts that ensure vehicles run at their optimal performance.
                </p>


            </div>
            
            <MDBContainer className="addform h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="p-4">
                                <MDBRow>
                                    <MDBCol lg="7">
                                        <MDBTypography tag="h5">
                                            <a href="#!" className="text-body">
                                                <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                                                shopping
                                            </a>
                                        </MDBTypography>

                                        <hr />

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">You have 4 items in your cart</p>
                                            </div>
                                            <div>
                                                <p>
                                                    <span className="text-muted">Sort by:</span>
                                                    <a href="#!" className="text-body">
                                                        price
                                                        <MDBIcon fas icon="angle-down mt-1" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Item 1 */}
                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                Spark Plugs
                                                            </MDBTypography>
                                                            <p className="small mb-0">Make, model, chasis number, year, PartID</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                2
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                R200
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>

                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>

                                        {/* Item 2 */}
                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                Brake Disk
                                                            </MDBTypography>
                                                            <p className="small mb-0">Make, model, chasis number, year, PartID</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                1
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                R150
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>

                                        {/* Item 3 */}
                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                Rim
                                                            </MDBTypography>
                                                            <p className="small mb-0">Make, model, chasis number, year, PartID</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                1
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                R250
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>

                                        {/* Item 4 */}
                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                Air Intake
                                                            </MDBTypography>
                                                            <p className="small mb-0">Make, model, chasis number, year, PartID</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "50px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                2
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                R400
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    {/* Card details */}

                                    <MDBCol lg="5">
                                        <MDBCard className="bg-primary text-white rounded-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Card details
                                                    </MDBTypography>
                                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                </div>

                                                {/* Card type */}

                                                <p className="small">Card type</p>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-visa fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-amex fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                                                </a>

                                                {/* Card Form */}
                                                <form className="mt-4">
                                                    <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                                                        placeholder="Cardholder's Name" contrast />

                                                    <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                                                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                    <MDBRow className="mb-4">
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                        </MDBCol>
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </form>

                                                <hr />

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">R1000.00</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">R100.00</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">R1100.00</p>
                                                </div>

                                                <MDBBtn color="E5FF00" block size="lg">
                                                    <div className="d-flex justify-content-between">
                                                        <span>R1100.00</span>
                                                        <span>
                                                            Checkout{" "}
                                                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                                        </span>
                                                    </div>
                                                </MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}