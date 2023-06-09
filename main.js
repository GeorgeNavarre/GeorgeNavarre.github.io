class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                    
            <nav class="sticky">
                <a href="../index.html">
                <img src="../logo.svg" alt="Logo" />
                </a>
                <div class="support-link">
                <a href="../pages/support.html">Help Support Our Mission!</a>
                </div>
                <ul class="nav-buttons">
                <li><a href="../index.html">HOME</a></li>
                <li><a href="../pages/map.html">Spatial Explorer</a></li>
                <li><a href="../pages/about.html">ABOUT</a></li>
                <li><a href="../pages/contact.html">CONTACT</a></li>
                </ul>
            </nav>
         
        `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="bottom-logo">
  <div class=""><img src="../logo.svg" /></div>
</section>
    <footer>
    <p class="copywrite">© Copywrite PanEcology 2023</p>
    <div class="footer-container">
      <div class="footer-section">
        <h3>Address</h3>
        <p>123 Main Street, City, Country</p>
      </div>
      <div class="footer-section">
        <h3>Contact</h3>
        <ul>
          <li>Phone: 123-456-7890</li>
          <li>Email: info@example.com</li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Press</h3>
        <ul>
          <li><a href="#">Press Release</a></li>
          <!-- <li><a href="#">Media Coverage</a></li> -->
          <li><a href="#">Press Kit</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Discover</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <!-- <li><a href="#">Portfolio</a></li>
            <li><a href="#">Testimonials</a></li> -->
        </ul>
      </div>
      <div class="footer-section">
        <h3>Discover</h3>
        <ul>
          <li><a href="#">Spatial Explorer</a></li>
          <li><a href="#">Knowledge Manager</a></li>
          <li><a href="#">Game Development</a></li>
          <li><a href="#">Search</a></li>
        </ul>
      </div>
    </div>
  </footer>
          `;
  }
}

customElements.define("my-footer", MyFooter);
