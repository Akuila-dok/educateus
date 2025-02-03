import React from 'react';
import './Leadership.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Title from '../Components/Title/Title';

// Importing images
import MalonyAchuilPhoto from '../../assets/malony_achuil.jpg';
import KurLemPhoto from '../../assets/kur_lem.jpg';
import BelyseUwizeyimanaPhoto from '../../assets/belyse_uwizeyimana.jpg';

const Leadership = () => {
  return (
    <div className='leadership'>
      <Navbar />
      <Header 
        headingone='Meet Our Leadership Team' 
        paragraphs='Our leaders are dedicated to driving the mission of the Educate Us Initiative forward, empowering individuals and transforming communities through education.'
      />
      <div className="container">
        <div className="board-content">
          <div>
            <Link to="/educateus">
              <button className="dark-blue-button">Home</button>
            </Link>
          </div>
          <Title title="Leadership Team"></Title>

          <div className="leader">
            <h2>Malony Achuil - Chairman</h2>
            <div className="leader-details">
              <img src={MalonyAchuilPhoto} alt="Malony Achuil" />
              <p>
                Malony Achuil is the visionary leader of the Educate Us Initiative, dedicated to empowering the next generation through education and leadership.
              </p>
            </div>
          </div>

          <div className="leader">
            <h2>Kur Lem - Secretary</h2>
            <div className="leader-details">
              <img src={KurLemPhoto} alt="Kur Lem" />
              <p>
                Kur Lem oversees all administrative functions, ensuring that our programs run smoothly and effectively for the benefit of all members.
              </p>
            </div>
          </div>

          <div className="leader">
            <h2>Belyse Uwizeyimana - Finance</h2>
            <div className="leader-details">
              <img src={BelyseUwizeyimanaPhoto} alt="Belyse Uwizeyimana" />
              <p>
                Belyse Uwizeyimana manages the financial planning and budgeting, ensuring the sustainability and growth of the Educate Us Initiative.
              </p>
            </div>
          </div>
          
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Leadership;
