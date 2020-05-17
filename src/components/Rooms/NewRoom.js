import React from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";
import Select from "react-select";
import "flatpickr/dist/themes/light.css";
import { Card, Input } from "reactstrap";
import { Creatable } from "react-select";

const STATES = [
  {
    value: "australian-capital-territory",
    label: "Niyi Adisa",
    className: "State-ACT"
  },
  { value: "new-south-wales", label: "Kamsi Kodi", className: "State-NSW" },
  { value: "victoria", label: "Tioluwani Joseph", className: "State-Vic" }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,

    color: state.isSelected ? "#fff" : "",
    padding: 20
  })
};
const NewRoom = () => {
  const onSubmit = e => {
    console.log("Form submitted..");
    e.preventDefault();
  };

  return (
    <ContentWrapper>
      <div className="form-card">
        <div className=" card-top-tablet">
          <h3>
            <a href="/my-rooms">
              <i className="far fa-arrow-alt-circle-left"></i>
            </a>
            &nbsp;Create a new room
          </h3>
        </div>
        <div className="visitorForm new-room-form">
          <div className="input-field">
            <p>
              Room Name <span className="required">*</span>
            </p>
            <Input id="input-id-1" type="text" placeholder="Enter full name" />
          </div>

          <div className="form-gird">
            <div className="flat-width">
              <div className="input-field">
                <p>
                  Room manager <span className="required">*</span>
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
                  placeholder="Select visitor"
                  options={STATES}
                />
              </div>
            </div>

            <div className="flat-width">
              <p>
                Capacity <span className="required">*</span>
              </p>
              <input
                class="form-control"
                type="number"
                placeholder="Number Of Occupants"
              ></input>
            </div>
          </div>

          <div className="input-field">
            <p>
              Location <span className="required">*</span>
            </p>
            <Input id="input-id-1" type="text" placeholder="Enter location" />
          </div>

          <div className="input-field">
            <p>Description</p>

            <Card body>
              <textarea
                rows="5"
                className="form-control note-editor note-editor-margin"
              ></textarea>
            </Card>
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
export default NewRoom;
