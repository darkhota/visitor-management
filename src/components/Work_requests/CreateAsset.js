import React from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";
import Select from "react-select";
import "flatpickr/dist/themes/light.css";
import { Card, Input } from "reactstrap";
import { Creatable } from "react-select";
import { Link } from "react-router-dom";

const STATES = [
  {
    value: "australian-capital-territory",
    label: "IT Software",
    className: "State-ACT"
  },
  { value: "new-south-wales", label: "IT Hardware", className: "State-NSW" },
  { value: "victoria", label: "Facility-furniture", className: "State-Vic" },
  { value: "facility", label: "Facility-electrical", className: "State-Vic" }
];
const ROOMS = [
  {
    value: "australian-capital-territory",
    label: "Room a",
    className: "State-ACT"
  },
  { value: "new-south-wales", label: "Room b", className: "State-NSW" },
  { value: "victoria", label: "Room c", className: "State-Vic" }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,

    color: state.isSelected ? "#fff" : "",
    padding: 20
  })
};
const CreateAsset = () => {
  const onSubmit = e => {
    console.log("Form submitted..");
    e.preventDefault();
  };

  return (
    <ContentWrapper>
      <div className="form-card">
        <div className=" card-top-tablet">
          <h3>
            <Link to="/view-assets">
              <i className="far fa-arrow-alt-circle-left"></i>
            </Link>
            &nbsp;Create new Asset
          </h3>
        </div>
        <div className="visitorForm new-room-form">
          <div className="input-field">
            <p>
              Asset Name <span className="required">*</span>
            </p>
            <Input id="input-id-1" type="text" placeholder="Enter asset name" />
          </div>

          <div className="flat-width">
            <div className="input-field">
              <p>
                Category <span className="required">*</span>
              </p>
              <Select
                className="sectionTest"
                theme={theme => ({
                  ...theme,
                  borderRadius: 5,
                  colors: {
                    ...theme.colors,

                    primary: "#00914b"
                  }
                })}
                styles={customStyles}
                name="select-name"
                placeholder="Select category"
                options={STATES}
              />
            </div>
          </div>

          <div className="input-field">
            <p>
              Brand <span className="required">*</span>
            </p>
            <input
              class="form-control"
              type="text"
              placeholder="Input brand"
            ></input>
          </div>

          <div className="input-field">
            <p>
              Asset tag number <span className="required">*</span>
            </p>
            <Input id="input-id-1" type="text" placeholder="Enter tag" />
          </div>

          <div className="input-field">
            <p>
              Assign room(s) <span className="required">*</span>
            </p>
            <Select
              isMulti
              className="sectionTest"
              theme={theme => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,

                  primary: "#00914b"
                }
              })}
              styles={customStyles}
              options={ROOMS}
            />
          </div>
        </div>
        <hr></hr>

        <button class="invite-btn" type="button">
          <i class="icon-paper-plane"></i>&nbsp;&nbsp;Save
        </button>
      </div>
    </ContentWrapper>
  );
};
export default CreateAsset;
