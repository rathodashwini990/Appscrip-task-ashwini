export default function Footer() {
    return (
      <footer className="footer">
        {/* Top Section */}
        <div className="footer-top">
          <div className="newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
  
          <div className="contact-info">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
  
            <h3>CURRENCY</h3>
            <p>🇺🇸 USD</p>
            <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
          </div>
        </div>
  
        <hr className="footer-line" />
  
        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-links">
            <div className="footer-column">
              <h4>mettā muse</h4>
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
  
            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
  
            <div className="footer-column">
              <h4>FOLLOW US</h4>
              <div className="social-icons">
                <span>📷</span> {/* Replace with real icons later */}
                <span>💼</span>
              </div>
  
              <h4>mettā muse ACCEPTS</h4>
              <div className="payment-icons">
                <img src="/googlepay.png" alt="Google Pay" />
                <img src="/mastercard.png" alt="MasterCard" />
                <img src="/paypal.png" alt="PayPal" />
                <img src="/amex.png" alt="American Express" />
                <img src="/applepay.png" alt="Apple Pay" />
                <img src="/stripe.png" alt="Stripe" />
              </div>
            </div>
          </div>
        </div>
  
        <p className="footer-copy">Copyright © 2023 mettamuse. All rights reserved.</p>
      </footer>
    );
  }  