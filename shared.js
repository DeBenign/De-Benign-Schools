/* ════════════════════════════════════════════════════════════════════════
   DE-BENIGN SCHOOLS — SHARED COMPONENTS & BEHAVIOR
   Injects topbar / navbar / footer into placeholder elements and wires up
   common interactions (mobile menu, scroll shadow, reveal-on-scroll).
   Each page sets <body data-page="..."> to control active-link highlighting.
   ════════════════════════════════════════════════════════════════════════ */

(function () {
  const page = document.body.getAttribute('data-page') || 'home';

  /* ─── TOP BAR ────────────────────────────────────────────────────────── */
  const topbarHTML = `
  <div class="topbar">
    <div class="topbar-inner">
      <div class="topbar-left">
        <a href="mailto:debenignschools@gmail.com"><i class="icon">✉</i> debenignschools@gmail.com</a>
        <a href="tel:08158447480"><i class="icon">📞</i> 08158447480</a>
        <span>Zone 2, Ayonitemi Community, Omi-Adio, Ibadan</span>
      </div>
      <div class="topbar-right">
        <!-- Add Facebook icon -->
        <a href="#" class="fa fa-facebook" title="Facebook"></a>
        
        <!-- Add Instagram icon -->
        <a href="#" class="fa fa-instagram" title="Instagram"></a>

        <!-- Add WhatsApp icon -->
        <a href="https://wa.app" class="fa fa-whatsapp" title="WhatsApp"></a>
      </div>
    </div>
  </div>`;

  /* ─── NAVBAR ─────────────────────────────────────────────────────────── */
  const isActive = (key) => (page === key ? ' class="active"' : '');
  const navbarHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <img src="images/14.png" alt="De-Benign Schools logo" class="logo-crest-img"/>
        <div class="logo-text">
          <div class="logo-name">De-Benign Schools</div>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html"${isActive('home')}>Home</a></li>
        <li><a href="about.html"${isActive('about')}>About Us</a></li>
        <li>
          <a href="#"${['nursery', 'primary', 'jss'].includes(page) ? ' class="active"' : ''}>Divisions ▾</a>
          <div class="nav-dropdown">
            <a href="nursery.html">Nursery &amp; Montessori</a>
            <a href="primary.html">Primary School</a>
            <a href="jss.html">Junior Secondary (JSS)</a>
          </div>
        </li>
        <li><a href="gallery.html"${isActive('gallery')}>Gallery</a></li>
        <li><a href="news.html"${isActive('news')}>News</a></li>
        <li><a href="contact.html"${isActive('contact')}>Contact</a></li>
        <li><a href="admissions.html" class="nav-cta btn">Admissions</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="nursery.html">Nursery &amp; Montessori</a>
      <a href="primary.html">Primary School</a>
      <a href="jss.html">Junior Secondary (JSS)</a>
      <a href="gallery.html">Gallery</a>
      <a href="news.html">News</a>
      <a href="contact.html">Contact</a>
      <a href="admissions.html">Admissions</a>
    </div>
  </nav>`;

  /* ─── CONTACT STRIP (gold bar, shown on all pages above footer) ───────── */
  const contactStripHTML = `
  <div class="contact-strip">
    <div class="contact-strip-inner">
      <div>
        <h3>Get in Touch</h3>
        <p>We would love to show you our school. Book a visit today.</p>
      </div>
      <div class="contact-details">
        <div class="contact-item">
          <div class="ci-icon">📍</div>
          <div>
            <div class="ci-label">Address</div>
            <div class="ci-value">Zone 2, Ayonitemi Community, Apena,<br>Bako Bus-Stop, Omi-Adio, Ibadan</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="ci-icon">📞</div>
          <div>
            <div class="ci-label">Phone</div>
            <div class="ci-value">08158447480 · 08100526076</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  /* ─── FOOTER ─────────────────────────────────────────────────────────── */
  const footerHTML = `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="images/14.png" alt="De-Benign Schools logo" class="footer-logo-img"/>
          <div class="footer-logo-name">De-Benign Schools</div>
        </div>
        <p>A private nursery, primary, and junior secondary school committed to academic excellence, character development, and affordable quality education in Omi-Adio, Ibadan.</p>
        <div class="footer-socials">
           <!-- Add Facebook icon -->
        <a href="#" class="fa fa-facebook" title="Facebook"></a>
        
        <!-- Add Instagram icon -->
        <a href="#" class="fa fa-instagram" title="Instagram"></a>

        <!-- Add WhatsApp icon -->
        <a href="" class="fa fa-whatsapp" title="WhatsApp"></a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="admissions.html">Admissions</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="news.html">News &amp; Events</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Our Divisions</h5>
        <ul>
          <li><a href="nursery.html">Nursery &amp; Montessori</a></li>
          <li><a href="primary.html">Primary School</a></li>
          <li><a href="jss.html">JSS 1 &amp; JSS 2</a></li>
          <li><a href="jss.html">JSS 3 (Coming Soon)</a></li>
          <li><a href="admissions.html">Extracurriculars</a></li>
        </ul>
      </div>

      <div class="footer-newsletter footer-col">
        <h5>Stay Connected</h5>
        <p>Subscribe for school news, events, admissions updates, and important announcements.</p>
        <div class="newsletter-form">
          <input type="text" placeholder="Your full name"/>
          <input type="email" placeholder="Your email address"/>
          <button type="button" id="newsletterBtn">Subscribe Now</button>
          <div class="newsletter-note" id="newsletterNote"></div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 <strong style="color:#C7A83A">De-Benign Schools</strong>. All rights reserved.</p>
    </div>
  </footer>`;

  /* ─── INJECT ─────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    const topbarEl = document.getElementById('topbar-placeholder');
    const navbarEl = document.getElementById('navbar-placeholder');
    const stripEl = document.getElementById('contact-strip-placeholder');
    const footerEl = document.getElementById('footer-placeholder');
    if (topbarEl) topbarEl.outerHTML = topbarHTML;
    if (navbarEl) navbarEl.outerHTML = navbarHTML;
    if (stripEl) stripEl.outerHTML = contactStripHTML;
    if (footerEl) footerEl.outerHTML = footerHTML;

    /* Navbar scroll shadow */
    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
      });
    }

    /* Mobile menu toggle */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
      mobileMenu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => mobileMenu.classList.remove('open'));
      });
    }

    /* Newsletter form (front-end only, no backend wired up) */
    const newsletterBtn = document.getElementById('newsletterBtn');
    if (newsletterBtn) {
      newsletterBtn.addEventListener('click', () => {
        const note = document.getElementById('newsletterNote');
        note.textContent = 'Thanks for subscribing!';
      });
    }

    /* Scroll reveal animation */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const siblings = Array.from(e.target.parentElement.querySelectorAll('.reveal'));
            const delay = siblings.indexOf(e.target) * 90;
            setTimeout(() => e.target.classList.add('visible'), delay);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  });
})();
