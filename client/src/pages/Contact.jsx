// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { team } from "../data"; 
// import "../styles/Contact.scss";

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <h3 className="Our-team">Contact Our Team</h3>
//       <div className='container-team'>
//         {team.map((val, index) => (
//           <div className='box' key={index}>
//             <div className='details'>
//               <div className='img'>
//                 <img src={val.cover} alt='' />
//               </div>
//               <i className='fa fa-location-dot'></i>
//               <label>{val.address}</label>
//               <h4>{val.name}</h4>
//               <ul>
//                 {val.icon.map((icon, index) => (
//                   <li key={index}>{icon}</li>
//                 ))}
//               </ul>
//               <div className='button'>
//                 <button>
//                   <i className='fa fa-envelope'></i>
//                 </button>
//                 <button className='btn4'>
//                   <i className='fa fa-phone-alt'></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='container-form'>
//         <form className='shadow'>
//           <h3>You have a Query?</h3>
//           <h4>Drop us a Line</h4> <br />
//           <div>
//             <input type='text' placeholder='Name' />
//             <input type='text' placeholder='Email' />
//           </div>
//           <input type='text' placeholder='Subject' />
//           <textarea cols='30' rows='10'></textarea>
//           <button>Submit Request</button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { team } from "../data";
import axios from "axios";
import "../styles/Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("/api/send-email", formData);
      await axios.post("http://localhost:5000/api/send-email", formData);

      alert("Email sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send email.");
    }
  };

  return (
    <>
      <Navbar />
      <h3 className="Our-team">Contact Our Team</h3>
      <div className='container-team'>
        {team.map((val, index) => (
          <div className='box' key={index}>
            <div className='details'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <i className='fa fa-location-dot'></i>
              <label>{val.address}</label>
              <h4>{val.name}</h4>
              <ul>
                {val.icon.map((icon, index) => (
                  <li key={index}>{icon}</li>
                ))}
              </ul>
              <div className='button'>
                <button>
                  <i className='fa fa-envelope'></i>
                </button>
                <button className='btn4'>
                  <i className='fa fa-phone-alt'></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='container-form'>
        <form className='shadow' onSubmit={handleSubmit}>
          <h3>You have a Query?</h3>
          <h4>Drop us a Line</h4> <br />
          <div>
            <input type='text' name="name" placeholder='Name' onChange={handleChange} required />
            <input type='email' name="email" placeholder='Email' onChange={handleChange} required />
          </div>
          <input type='text' name="subject" placeholder='Subject' onChange={handleChange} required />
          <textarea name="message" cols='30' rows='10' placeholder="Your Message" onChange={handleChange} required></textarea>
          <button type="submit">Submit Request</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
