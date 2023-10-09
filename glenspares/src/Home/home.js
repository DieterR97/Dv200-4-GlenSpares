import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from "./LOGO.svg";
import carImage from './carImage.svg';
import image from './headerimage.png';

const Home = () => {

    const [carParts, setCarParts] = useState([]);

    useEffect(() => {
        // Fetch car parts data from the server when the component mounts
        const fetchCarParts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/carparts');
                setCarParts(response.data);
            } catch (error) {
                console.error('Error fetching car parts:', error);
            }
        };
        // Initialize the cart in local storage
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }

        fetchCarParts();
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

    // Function to handle adding a car part to the cart
    const addToCart = (carPart) => {
        // Get the current cart from local storage
        const currentCart = JSON.parse(localStorage.getItem('cart'));

        // Add the selected car part to the cart
        currentCart.push(carPart);

        // Update the cart in local storage
        localStorage.setItem('cart', JSON.stringify(currentCart));
    };

    return (

        <div className="body">

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

            <div className="section-1">
                <div className="home-section">
                    <div className="container">
                        <br></br>
                        <br></br>

                        <div className="Aboutus">
                            <div className="row">

                                <div className="col-md-6">
                                    <img src={carImage} alt="Car" className="car-image" />
                                </div>
                                <div className="col-md-6 text">

                                    <h2>Find the Best Car for You</h2>
                                    <p>Established by Glen Turner, a visionary in the automotive world, our company has stood the test of time, adapting and evolving with the ever-changing needs of the industry. Our commitment to quality, authenticity, and reliability is what sets us apart. With a team of dedicated experts, we source, test, and deliver a wide range of parts, from the latest models to vintage classics. At GlenSpares, we don't just sell car parts; we deliver a piece of automotive history, ensuring every vehicle runs with precision and power.</p>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

                        <div className='CardSection'>
                            <div className="container">

                                <div className="row">
                                    {carParts.map((carPart) => (
                                        <div className="col-md-4" key={carPart._id}>
                                            <div className='Card m-2'>

                                                <img className="cardimage" src={carPart.imgUrl} alt="Car Part Image" />

                                                <div className="card-content">
                                                    <h2 className="card-title">Car Details</h2>
                                                    <ul className="details-list">
                                                        <li><strong>Name:</strong> {carPart.Name}</li>
                                                        <li><strong>Car Make:</strong> {carPart.CarMake}</li>
                                                        <li><strong>Car Model:</strong> {carPart.CarModel}</li>
                                                        <li><strong>Chasis Number:</strong> {carPart.ChasisNumber}</li>
                                                        <li><strong>Year:</strong> {carPart.Year}</li>
                                                        <li><strong>PartID:</strong> {carPart.PartID}</li>
                                                    </ul>
                                                </div>

                                                <button
                                                    className="CardBtn"
                                                    onClick={() => addToCart(carPart)}
                                                >
                                                    Add to Cart
                                                </button>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div class="footer">
                    <div class="footer-column">
                        <h1>LET’S TALK</h1>
                        <br></br>
                        <p>Telephone:</p>
                        <p>+27 12 345 6789</p>
                        <br></br>
                        <p>For more information and quotes:</p>
                        <p>info@glenspares.co.za</p>
                    </div>
                    <div class="footer-column">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>About Glen Spares</h2>
                        <ul>
                            <li><a href="#">0.1 About us</a></li>
                            <li><a href="#">0.2 Our Services</a></li>
                            <li><a href="#">0.3 Contact us</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>Services</h2>
                        <ul>
                            <li><a href="#">0.1 Parts</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>



    )
}

export default Home

