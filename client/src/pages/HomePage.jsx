import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar"
import Slide from "../components/Slide"
import Categories from "../components/Categories"
import Listings from "../components/Listings"
import Footer from "../components/Footer"


const HomePage = () => {

  const [showChatbot, setShowChatbot] = useState(false);
  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />

      {/* Chatbot Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '30px',
          height: '100px',
          width: '100px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: '1000',
        }}
      >
        <img src="/assets/bot.png" alt="Chatbot" style={{ width: '100px', height: '100px' }} />
      </button>

      {/* Chatbot iframe */}
      {showChatbot && (

        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/17/07/20241117073438-229OFMC2.json"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            border: 'none',
            zIndex: '1000',
            borderRadius: '15px', /* Rounded corners */
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', /* Soft shadow for depth */
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', /* Smooth transition effects */
          }}
          title="Chatbot"
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)'; /* Slight zoom effect */
            e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.3)'; /* Enhanced shadow on hover */
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'; /* Reset zoom */
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)'; /* Reset shadow */
          }}
        ></iframe>

      )}


      <Footer />
    </>
  )
}

export default HomePage