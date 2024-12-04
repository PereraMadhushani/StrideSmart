import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-app">
      <div className="home-clear-square"> {/* Clear square container */}
        <main className="home-main">
          <div className="home-welcome-section">
            <div className="home-text-section">
              <h1 className='home-wc'>Malitha Lanka Shoe Production</h1>
              <h3 className='home-wc-content'>"Our mission is to deliver exceptional quality and customer satisfaction through innovative solutions and support"</h3>
              
              <div className="home-buttons"><br></br>
                <Link to="/login" className="home-btn3 home-login-home">LOGIN</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;