import React, { useState } from 'react';
import '../styles/ContactPage.css';


function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verisini işleyebilirsin (örneğin API'ye gönderme)
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>İletişim</h2>
      {submitted ? (
        <p className="thank-you">Teşekkürler! Mesajınız başarıyla gönderildi 💌</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Adınız</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Mesajınız</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          <button type="submit">Gönder</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
