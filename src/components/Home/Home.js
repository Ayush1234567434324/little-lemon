import React from 'react';
import "./Home.css";
import { NavLink } from 'react-router-dom';
import HeroImage from "../../assests/gourmet.jpg"
import Specials from './Specials';

const Home = () => {
  return (
    <>
    <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Kharar</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            <div className="section-right">
                <div className="image-box">
                    <img src={HeroImage} alt="Serving delicious dish" />
                </div>
            </div>
        </div>
    </div>
    <Specials/>
    </>
  )
}

export default Home;
