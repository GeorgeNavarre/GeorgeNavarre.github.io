class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                    
    <nav id="navbar" class="sticky">
    <ul class="nav-left align-items-center">
      <a href="../index.html">
        <img class="logo" src="../images/logo-cropped.svg" alt="Logo" />
        <img class="logo-small" src=""/>
      </a>
      <input type="checkbox" id="check" />
    
      <div class="support-link">
        <a href="../pages/support.html">Support Our Mission!</a>
      </div>
    </ul>
    <ul class="nav-buttons">
      <li><a href="../index.html">HOME</a></li>
      <li><a href="../pages/map.html">Spatial Explorer</a></li>
      <li><a href="../pages/about.html">ABOUT</a></li>
      <li><a href="../pages/contact.html">CONTACT</a></li>
    </ul>
    <label for="check" class="checkbtn"> 
    <i class="fa fa-bars"></i> 
    </label>
  </nav>
  
        `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="bottom-logo">
  <div class="">
  <img class="logo" src="../images/logo.svg" />
  <img class="logo-small" src="" />
  </div>
</section>
    <footer>
    <p class="copyright">© Copyright PanEcology 2023</p>
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

document.addEventListener("scroll", () => {
  const header = document.querySelector("nav");

  if (window.scrollY > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
