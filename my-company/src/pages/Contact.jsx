import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields!');
      return;
    }
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: 'block', width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: 'block', width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px'
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: 'block', width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', height: '100px'
          }}
        />
        <button type="submit" style={{
          padding: '10px 15px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white', cursor: 'pointer'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
