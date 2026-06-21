import React from 'react';
import './Contact.css';

import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import call_icon from '../../assets/call-icon.png';
import location_icon from '../../assets/location-icon.png';
import White_arrow from '../../assets/White-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a9d1024e-fb1d-49e7-832f-dc8b2981b548");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>

        <p>
          Have questions about our courses, admissions, or student life at EduNova?
          Our dedicated support team is always ready to guide you and provide the
          information you need.
        </p>

        <ul>
          <li><img src={mail_icon} alt="" /> Contact@EduNova.com</li>
          <li><img src={call_icon} alt="" /> +1 123-546-7463</li>
          <li><img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge MA 02139</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='Phone' placeholder='Enter Your mobile number'/>
          <label> Write your message here </label>
          <textarea name="message" id="" cols={30} rows={6} placeholder='Enter your message' required></textarea>
          <button type="submit" className='btn dark-btn'>Submit now<img src={White_arrow} alt="" /></button>
        </form>
        <span> {result}</span>
      </div>
    </div>
  );
};

export default Contact;
