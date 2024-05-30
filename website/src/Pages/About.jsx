import React from 'react';
import NavBar from '../Components/NavBar';
import image from '../asset/fabio-henning-Ciqwz8GF5WM-unsplash.jpg';
import Hero from '../Hero/Hero';

const About = () => {
  const containerStyle = {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  };

  const headingStyle = {
    color: 'maroon',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const contentStyle = {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.8',
    color: '#333',
  };

  const textStyle = {
    marginBottom: '20px',
    fontSize: '1rem',
  };

  return (
    <div>
      <NavBar />
      <Hero
        cName="heroAbout"
        hText="aboutText"
        HeroImage={image}
        
        heroText="aboutHouseText"
      />
      <div style={containerStyle}>
        <h2 style={headingStyle}>About DandieAutoWorld</h2>
        <div style={contentStyle}>
          <h3 style={textStyle}>
            "Experience Luxury, Embrace Accessibility: The DandieAutoWorld Story"
          </h3>
          <p style={textStyle}>
            In a world where luxury often feels out of reach, DandieAutoWorld emerged with a revolutionary vision: to make the allure of luxury cars accessible to all.
          </p>
          <p style={textStyle}>
            Founded on the belief that everyone deserves the thrill of driving their dream car, DandieAutoWorld is not just a platform; it's a gateway to a world where opulence meets opportunity.
          </p>
          <p style={textStyle}>
            Imagine browsing through a digital showroom filled with the most coveted luxury vehicles from renowned vendors worldwide. From sleek sports cars to elegant sedans, every automobile tells a story of craftsmanship and sophistication.
          </p>
          <p style={textStyle}>
            But what sets DandieAutoWorld apart isn't just the selection—it's the flexibility it offers. Whether you're ready to make a full cash purchase, opt for convenient installment plans, or secure a tailored payment arrangement, DandieAutoWorld ensures that your dream car is within reach, no matter your financial journey.
          </p>
          <p style={textStyle}>
            At DandieAutoWorld, we're not just selling cars; we're igniting passions and fulfilling aspirations. Every transaction isn't just a sale; it's a promise to our customers that luxury isn't a distant dream—it's a tangible reality waiting to be embraced.
          </p>
          <p style={textStyle}>
            Join us on a journey where luxury knows no bounds, and where every road leads to possibility. Welcome to DandieAutoWorld—where luxury becomes an everyday experience for all.
          </p>
        </div>
      </div>
      <div style={{marginTop:"20px"}}>
      <p>&copy; {new Date().getFullYear()} <a href="https://www.instagram.com/dandieautoworld/" target='blank'>DandieAutoWorld</a></p>
    </div>
    </div>
  );
};

export default About;
