import React from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";

const Home = () => {
  return (
    <ContentWrapper>
      <div className="content-heading">
        <div>
          Workwise HQ
          <small>Welcome to Workwise!</small>
        </div>
      </div>
      {/* START cards box */}
      <div className="cards-container">
        <div className="dashCards">
          <div className=" card-top">
            <h4>Visitors</h4>
            <button href="#" className="linkButton">
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="card-content">
            <h1>0</h1>
            <h2>Currently on site</h2>
            <h1>0</h1>
            <h2>Expected later today</h2>
          </div>
        </div>

        {/* END cards box */}
        {/* START cards box */}

        <div className="dashCards">
          <div className=" card-top">
            <h4>Deliveries</h4>
            <button href="#" className="linkButton">
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="card-content">
            <h3>
              Save time and avoid package pile up by automating how you manage
              incoming packages at your work place
            </h3>
          </div>
        </div>
        {/* END cards box */}
        {/* START cards box */}

        <div className="dashCards">
          <div className=" card-top">
            <h4>Rooms</h4>
            <button href="#" className="linkButton">
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="card-content2">
            <ul>
              <li className="list-style">
                <i className="fa fa-check-circle"></i>
                <h5>import your company's room calenders</h5>
              </li>
              <li className="list-style">
                <a href="#" className="list-numbering">
                  2
                </a>
                <h5>select the rooms in your office location</h5>
                <br></br>
                <div className="list-link">
                  <a href="#"> Start →</a>
                </div>
              </li>
              <li className="list-style">
                <a href="#" className="list-numbering">
                  3
                </a>
                <h5>pair an ipad to each room</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* END cards box */}
      <div className="section-header">
        <h4>Setup guide</h4>
      </div>
      <div className="section-content">
        <img src="img/product-desk.svg"></img>

        <div className="section-text-content">
          <h3>Finish setting up your workplace</h3>
          <h4>
            Add a logo, sync your employee directory and customize your
            workplace settings.
          </h4>
          <div className="card-content2">
            <ul>
              <li className="list-style2">
                <i className="fa fa-check-circle"></i>
                <h5>Upload your logo.</h5>
              </li>
              <li className="list-style2">
                <a href="#" className="list-numbering2">
                  2
                </a>
                <h5 className="list-link list-link2">
                  Set up your employee directory.<a href="#"> Start →</a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Home;
