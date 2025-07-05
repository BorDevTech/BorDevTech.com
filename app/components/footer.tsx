import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Socials Column */}
          <div className="col-md-2">
            <h5 className="text-info mb-4">Socials</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">GitHub</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Meta "Facebook"</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Telegram</a>
              </li>
            </ul>
            <small className="text-muted">Last updated • mins ago</small>
          </div>

          {/* Products Column */}
          <div className="col-md-2">
            <h5 className="text-info mb-4">Products</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">ElementX</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">SparkX</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">ClipX</a>
              </li>
            </ul>
            <small className="text-muted">Last updated • mins ago</small>
          </div>

          {/* Services Column */}
          <div className="col-md-2">
            <h5 className="text-info mb-4">Services</h5>
            <div className="mb-3">
              <span className="text-light">COMING SOON...</span>
            </div>
            <small className="text-muted">Last updated • mins ago</small>
          </div>

          {/* Support Column */}
          <div className="col-md-2">
            <h5 className="text-info mb-4">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Guides</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Blogs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Contact Us</a>
              </li>
              <li className="mb-2">
                <span className="text-light">COMING SOON...</span>
              </li>
            </ul>
            <small className="text-muted">Last updated • mins ago</small>
          </div>

          {/* Company Column */}
          <div className="col-md-2">
            <h5 className="text-info mb-4">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">Careers</a>
              </li>
            </ul>
            <small className="text-muted">Last updated • mins ago</small>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-1">Copyright © ---- ---- Bor Dev Tech</p>
          <p className="mb-1">Admin Contact: ----@----------.---</p>
          <p className="mb-0">
            <a href="#" className="text-info text-decoration-none">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
