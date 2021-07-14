import React, { useState, useContext } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Link } from "react-router-dom";
import VisitorsContext from "../../context/visitors/visitorsContext";

const DropdownBox = title => {
  const [ddOpen, setDdopen] = useState(false);

  const toggle = () => setDdopen(!ddOpen);

  return (
    <div>
      <Dropdown isOpen={ddOpen} toggle={toggle}>
        <DropdownToggle
          className=" dropdown-devices "
          tag="span"
          data-toggle="dropdown"
        >
          <i className="fa fa-ellipsis-h"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          <a className="dropdown-item " href="#">
            <i class="icon-trash"></i>&nbsp;&nbsp;Remove Tablet
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const Devices = () => {
  const visitorsContext = useContext(VisitorsContext);
  const { devices } = visitorsContext;
  const ANIMATIONS = ["fadeIn"];
  return (
    <ContentWrapper>
      <div className="form-card">
        <div className=" card-top">
          <h2>Tablets</h2>
          <div className="button-align">
            <Link to="/new-tablet" className="black-link">
              <button className="btn btn-secondary btn-lg invite-btn">
                New tablet
              </button>
            </Link>
          </div>
        </div>

        <div className="device-grid">
          {devices.map(device => (
            <div className="device-cards">
              <div className="device-card-top">
                {ANIMATIONS.map((title, i) => (
                  <DropdownBox title={title} />
                ))}
              </div>
              <div className="whole-device">
                <div className="device-content">
                  <div className="box">
                    <img
                      src="img/ipad-air.png"
                      alt="ipad"
                      className="grid-height"
                    ></img>
                  </div>

                  <ul>
                    <li>
                      <h3 className="device-Name">{device.deviceName}</h3>
                    </li>
                    <li>
                      <div
                        className={
                          "device-status " +
                          (device.deviceStatus === "disabled" ? "disabled" : "")
                        }
                      >
                        <span
                          data-test-status-icon=""
                          className={
                            "deviceStatus small " +
                            (device.deviceStatus === "operational"
                              ? "good"
                              : "bad")
                          }
                        ></span>{" "}
                        {device.deviceStatus}
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="device-desc">
                  <h5>Device type:</h5>
                  <h5>{device.deviceType}</h5>
                  <h5>Device type:</h5>
                  <h5>{device.deviceOS}</h5>
                  <h5>Device type:</h5>
                  <h5>{device.deviceIP}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="h5 tw-mt-8 tw-mb-0 tw-px-8">
          Learn more about{" "}
          <a href="#" target="_blank" rel="noopener" tabindex="-1">
            managing visitor sign-in kiosks
          </a>{" "}
          in Visitors manager.
        </p>
      </div>
    </ContentWrapper>
  );
};

export default Devices;
