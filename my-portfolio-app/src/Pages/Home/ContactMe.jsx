import React, { useState} from 'react';
const apiUrl = process.env.REACT_APP_API_URL;
export default function ContactMe () {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          alert('Email sent successfully!');
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Failed to send email.');
        }
      };
    
    return (
        <section id="Contact" className="contact--section">
            <div >
                <p className="sub--title"> Get in Touch</p>
                <h2>Contact Me</h2>
                {/* <p className="text-lg"> lorem ipsum dolor </p> */}
            </div>
            <form className="contact--form--container"
            onSubmit={handleSubmit}>
                <div className="contact--form--container">
                    <label htmlFor="first-name" 
                    className="contact--label">
                        <span className="text-md"> First Name </span>
                        <input type="text" className="contact--input text-md"
                        name="firstName"
                        id='first-name'
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required />
                    </label>
                    <label htmlFor="last-name" 
                    className="contact--label">
                        <span className="text-md"> Last Name </span>
                        <input type="text" className="contact--input text-md"
                        name="lastName"
                        id='last-name'
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required />
                    </label>
                    <label htmlFor="email" 
                    className="contact--label">
                        <span className="text-md"> Email </span>
                        <input type="email" className="contact--input text-md"
                        name="email"
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required />
                    </label>
                    <label htmlFor="phone-number" 
                    className="contact--label">
                        <span className="text-md"> Phone Number </span>
                        <input type="number" className="contact--input text-md"
                        name="phone"
                        id='phone-number'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required />
                    </label>
                </div>
                <label htmlFor="choose-topic" 
                    className="contact--label">
                        <span className="text-md"> Choose a topic </span>
                        <select  id="choose=topic" className="contact--input text-md"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        required>
                            <option value=""> Select One... </option>
                            <option value="employment"> Employment</option>
                            <option value="inquiry"> Inquiry</option>
                            {/* <option > Item 3</option> */}
                        </select>
                </label>
                <label htmlFor="message" 
                    className="contact--label">
                        <span className="text-md"> Message </span>
                        <textarea className="contact--input text-md"
                        id='message'
                        rows="8" 
                        name= "message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message..."
                        required/>
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" required name="checkbox" id="checkbox" />
                    <span className="text-sm"> I accept the terms </span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn"
                    type="submit"> Submit</button>
                </div>
            </form>            
        </section>
    )
}