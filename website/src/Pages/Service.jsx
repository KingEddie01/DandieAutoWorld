import React from 'react';
import NavBar from '../Components/NavBar';
import deal from '../asset/stylish-elegant-couple-car-salon.jpg';
import Hero from '../Hero/Hero';

const Service = () => {
  const containerStyle = {
    padding: '40px 20px',
     maxWidth: '1200px',
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
    padding: '10%',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.8',
    color: '#333',
    marginBottom: '40px',
  };

  const textStyle = {
    marginBottom: '20px',
    fontSize: '1rem',
  };

  const serviceContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
  };

  const serviceCardStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: 'calc(33% - 40px)',
    boxSizing: 'border-box',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const serviceTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '20px 0 10px',
  };

  const serviceTextStyle = {
    lineHeight: '1.6',
    color: '#333',
  };

  return (
    <div>
      <NavBar />
      <Hero
        cName="heroService"
        hText="serviceText"
        HeroImage={deal}
       
        heroText="Experience Luxury, Embrace Accessibility"
      />
      <div style={containerStyle}>
        
        <h2 style={headingStyle}>Our Services</h2>
        <div style={serviceContainerStyle}>
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Luxury Car Sales</h3>
            <p style={serviceTextStyle}>
              Discover a wide range of luxury cars from top brands. Our inventory includes the latest models and timeless classics to suit your taste and lifestyle.
            </p>
          </div>
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Flexible Financing</h3>
            <p style={serviceTextStyle}>
              We offer tailored financing options to make your dream car affordable. Choose from various payment plans and financing solutions that fit your budget.
            </p>
          </div>
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Trade-In Services</h3>
            <p style={serviceTextStyle}>
              Upgrade your vehicle with our hassle-free trade-in services. Get the best value for your current car and drive away in a new luxury model.
            </p>
          </div>
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Maintenance and Repairs</h3>
            <p style={serviceTextStyle}>
              Keep your car in top condition with our comprehensive maintenance and repair services. Our expert technicians are here to ensure your vehicle runs smoothly.
            </p>
          </div>
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Customization Services</h3>
            <p style={serviceTextStyle}>
              Personalize your car with our customization services. From bespoke interiors to performance upgrades, we make your car truly unique.
            </p>
          </div>
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Concierge Services</h3>
            <p style={serviceTextStyle}>
              Experience VIP treatment with our concierge services. We handle everything from vehicle delivery to personalized car care, ensuring a seamless ownership experience.
            </p>
          </div>
        </div>
      </div>
      <div style={{marginTop:"20px"}}>
      <p>&copy; {new Date().getFullYear()} <a href="https://www.instagram.com/dandieautoworld/" target='blank'>DandieAutoWorld</a></p>
    </div>
    </div>
  );
};

export default Service;
