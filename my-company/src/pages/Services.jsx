import Contact from '../components/Contact';  // ✅ Import the Contact component

function Services() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Our Services</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>✔ Technology Consulting</li>
        <li style={{ margin: '10px 0' }}>✔ Market Analysis</li>
        <li style={{ margin: '10px 0' }}>✔ Product Development</li>
      </ul>

      {/* Embed the Contact form inside Services */}
      <h2>Get in Touch</h2>
      <Contact />
    </div>
  );
}

export default Services;
