import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from "./LOGO.svg";
import carImage from './carImage.svg';
import image from './headerimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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
} from 'mdb-react-ui-kit';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from local storage
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const handleRemoveItem = (index) => {
        // Remove the item at the given index from the cart
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);

        // Update local storage with the updated cart
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.Price, 0);

    // Fixed shipping cost for example
    const shipping = 100;

    // Calculate total
    const total = subtotal + shipping;

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="header">
                <nav className="topnav">
                    <NavLink to="/" activeclassname="active">
                        Home
                    </NavLink>
                    <NavLink to="/cart" activeclassname="active">
                        Checkout
                    </NavLink>
                    <NavLink to="/AddPart" activeclassname="active">
                        Add Part
                    </NavLink>
                </nav>
                <div className="container d-flex justify-content-center">
                    <img className="logo" src={logo} alt="image" />
                </div>
                <img className="headerimage" src={image} alt="image" />
                <div className="container d-flex justify-content-center">
                    <h1 className="heading">GLEN SPARES</h1>
                </div>
                <p className="description">
                    At GlenSpares, we take immense pride in our rich heritage within the automotive industry.
                    For over four decades, we have been the trusted name for car enthusiasts and mechanics alike,
                    providing top-notch car parts that ensure vehicles run at their optimal performance.
                </p>
            </div>

            <MDBContainer className="addform h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="p-4 fl">
                                <MDBCol lg="7">
                                    <MDBTypography tag="h5">
                                        <a href="/" className="text-body">
                                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue shopping
                                        </a>
                                    </MDBTypography>

                                    <hr />

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <p className="mb-1">Shopping cart</p>
                                            <p className="mb-0">You have {cartItems.length} items in your cart</p>
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

                                    {cartItems.map((item, index) => (
                                        <MDBCard className="mb-3" key={index}>
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src={item.imgUrl}
                                                                fluid
                                                                className="rounded-3"
                                                                style={{ width: "65px" }}
                                                                alt="Shopping item"
                                                            />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">{item.Name}</MDBTypography>
                                                            <p className="small mb-0">
                                                                {item.CarMake}, {item.CarModel}, {item.Year}, Chasis Number: {item.ChasisNumber},  PartID: {item.PartID}
                                                            </p>
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
                                                                $ {item.Price}
                                                            </MDBTypography>
                                                        </div>
                                                        <a
                                                            href="#!"
                                                            style={{ color: "#cecece" }}
                                                            onClick={() => handleRemoveItem(index)}
                                                        >
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    ))}
                                </MDBCol>

                                <MDBCol lg="5" className='p-2'>
                                    <MDBCard className="bg-primary text-white rounded-3">
                                        <MDBCardBody>
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <MDBTypography tag="h5" className="mb-0">
                                                    Card details
                                                </MDBTypography>
                                                <MDBCardImage
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                    fluid
                                                    className="rounded-3"
                                                    style={{ width: "45px" }}
                                                    alt="Avatar"
                                                />
                                            </div>

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

                                            <form className="mt-4">
                                                <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg" placeholder="Cardholder's Name" contrast />

                                                <MDBInput className="mb-4" label="Card Number" type="text" size="lg" minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                <MDBRow className="mb-4">
                                                    <MDBCol md="6">
                                                        <MDBInput className="mb-4" label="Expiration" type="text" size="lg" minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                    </MDBCol>
                                                    <MDBCol md="6">
                                                        <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3" maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                                    </MDBCol>
                                                </MDBRow>
                                            </form>

                                            <hr />

                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">Subtotal</p>
                                                <p className="mb-2">${subtotal.toFixed(2)}</p>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">Shipping</p>
                                                <p className="mb-2">${shipping.toFixed(2)}</p>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">Total(Incl. taxes)</p>
                                                <p className="mb-2">${total.toFixed(2)}</p>
                                            </div>

                                            <MDBBtn color="E5FF00" block size="lg">
                                                <div className="d-flex justify-content-between">
                                                    {/* <span>$ {total.toFixed(2)} </span> */}
                                                    <span>
                                                         Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                                    </span>
                                                </div>
                                            </MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default Cart;
