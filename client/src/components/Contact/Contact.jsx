import "./Contact.css";

function Contact() {
  return (
    <footer className="footer dark" id="contact">
      <div className="container">
        
        <div className="sec-head">
          <span className="sec-num">04 / CLOSING ENTRY</span>
          <h2 className="sec-title">Let's talk</h2>
        </div>

        <p className="footer-lede">
          Open to full-stack, frontend, and backend roles. Fastest way to reach me is email — I'll reply within a day.
        </p>

        <div className="contact-links">
          <a href="mailto:sinharohit96690@gmail.com">sinharohit96690@gmail.com</a>
          <a href="https://linkedin.com/in/rohit-sinha-ba7298238" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/RohitGkmit08" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://leetcode.com/u/sinharohit01/" target="_blank" rel="noopener noreferrer">LeetCode ↗</a>
        </div>

        <div className="close-line">
          <span>Rohit Sinha — B.E. Computer Science, Chandigarh University</span>
          <span>Udaipur, India · +91-9057583191</span>
        </div>

      </div>
    </footer>
  );
}

export default Contact;
