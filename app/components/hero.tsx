import React from "react";

const Hero = () => {
  return (
    <section className="bg-dark text-light py-5" style={{minHeight: '60vh'}}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="border border-secondary rounded p-5 my-5">
              <h1 className="display-4 mb-4 text-info">Welcome !</h1>
              <p className="lead mb-4">
                Here at BorDev Tech we provide top-notch service to get you on your feet and ready to go!
              </p>
              <p className="mb-4">
                Our wide range of experience helps us, help you in building anything you can dream of.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-danger btn-lg px-4">Get Started</button>
                <button className="btn btn-danger btn-lg px-4">Pricing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
