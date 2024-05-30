import React from 'react';
import NavBar from '../Components/NavBar';
import contactImage from '../asset/people-business-communication-concept-glad-dark-skinned-african-american-woman-has-telephone-conversation.jpg';
import Hero from '../Hero/Hero';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Hero
        cName='heroContact'
        hText='contactText'
        HeroImage={contactImage}
        heroText='contactHouseText'
      />
      <section style={{ padding: '100px 0', display: 'flex', justifyContent: 'center', borderBottom: '1px solid' }}>
        <div style={{ width: '40%', maxWidth: '600px', margin: '0 20px' }}>
          <div style={{ fontWeight: '600', fontSize: '30px', marginBottom: '30px', textAlign: 'center' }}>Contact Information</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <i className="fas fa-user" style={{ fontSize: '25px', color: 'rgb(50, 20, 220)' }}></i>
              <div style={{ marginLeft: '20px', fontSize: '18px', lineHeight: '26px' }}>
                <span style={{ fontWeight: 'bold' }}>Name:</span>
                <span> Edmund Udeh</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <i className="fas fa-map-marker-alt" style={{ fontSize: '25px', color: 'rgb(50, 20, 220)' }}></i>
              <div style={{ marginLeft: '20px', fontSize: '18px', lineHeight: '26px' }}>
                <span style={{ fontWeight: 'bold' }}>Location:</span>
                <span> Lekki, Lagos State, Nigeria</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <i className="fas fa-envelope email-icon" style={{ fontSize: '25px', color: 'rgb(50, 20, 220)' }}></i>
              <div style={{ marginLeft: '20px', fontSize: '18px', lineHeight: '26px' }}>
                <span style={{ fontWeight: 'bold' }}>Email:</span>
                <span> edk6004@gmail.com</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <i className="fab fa-instagram" style={{ fontSize: '25px', color: '#E1306C' }}></i>
              <div style={{ marginLeft: '20px', fontSize: '18px', lineHeight: '26px' }}>
                <span style={{ fontWeight: 'bold' }}>Instagram:</span>
                <span>
                  <a href="https://www.instagram.com/dandieautoworld/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}> Visit Us</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '40%', maxWidth: '600px', margin: '0 20px' }}>
          <div style={{ fontWeight: '600', fontSize: '30px', marginBottom: '30px', textAlign: 'center' }}>Leave a Message</div>
          <form action="mailto:edk6004@gmail.com" method="post">
            <div style={{ marginBottom: '30px' }}>
              <input type="text" placeholder="Full Name" id="name" required style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid #ccc', fontSize: '16px' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input type="email" placeholder="Email" id="email" required style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid #ccc', fontSize: '16px' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <input type="text" placeholder="Subject" id="subject" required style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid #ccc', fontSize: '16px' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <textarea cols="30" rows="6" placeholder="Leave a message here" id="message" required style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid #ccc', fontSize: '16px' }}></textarea>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type="submit" style={{ padding: '12px 30px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '18px' }}>Send Message <i className="fas fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </section>
      <div style={{marginTop:"20px"}}>
      <p>&copy; {new Date().getFullYear()} <a href="https://www.instagram.com/dandieautoworld/" target='blank'>DandieAutoWorld</a></p>
    </div>
    </div>
  );
};

export default Contact;
