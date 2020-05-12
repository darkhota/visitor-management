import React from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";

const NewTablet = () => {
  return (
    <ContentWrapper>
      <div className="form-card">
        <div className=" card-top-tablet">
          <h3>
            <a href="/devices">
              <i className="far fa-arrow-alt-circle-left"></i>
            </a>
            &nbsp; New Tablet
          </h3>
        </div>
        <div className="new-tablet-content">
          <div className="new-tablet-form">
            <ol>
              <li className="list-padding">
                <h4>Get the Workwise Visitors app</h4>
                <ul className="sublist-mgin">
                  <li>
                    <h5>On your tablet, open the app store</h5>
                  </li>
                  <li>
                    <h5>
                      Search for and download Workwise Visitors Management
                    </h5>
                  </li>
                </ul>
              </li>
              <li className="list-padding">
                <h4>Enter the device code</h4>
                <ul className="sublist-mgin">
                  <li>
                    <h5>Open the Workwise Visitors app.</h5>
                  </li>
                  <li>
                    <h5>
                      Find the six digit device pairing code and type it below.
                    </h5>
                  </li>
                </ul>
              </li>
            </ol>
            <input
              type="text"
              className="device-code"
              maxLength="6"
              size="8"
            ></input>

            <button class="btn btn-secondary btn-lg invite-btn" type="button">
              Pair Device
            </button>
          </div>
          <div className="new-tablet-device">
            <img src="img/ipad.png"></img>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default NewTablet;
