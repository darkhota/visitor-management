import React, { useState } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";
import Select from "react-select";
import "flatpickr/dist/themes/light.css";
import { Card} from "reactstrap";
import { Link } from "react-router-dom";

const STATES = [
  {
    value: "australian-capital-territory",
    label: "Room A",
    className: "State-ACT"
  },
  {
    value: "new-south-wales",
    label: "Room B",
    className: "State-NSW"
  },
  { value: "victoria", label: "Room C", className: "State-Vic" }
];

const CATEGORIES = [
  {
    value: "australian-capital-territory",
    label: "Category A",
    className: "State-ACT"
  },
  {
    value: "new-south-wales",
    label: "Category B",
    className: "State-NSW"
  },
  { value: "victoria", label: "Category C", className: "State-Vic" }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,

    color: state.isSelected ? "#fff" : "",
    padding: 20
  })
};

const NewRequest = () => {
  const [date, setDate] = useState(new Date());
  const [imgPrevUrl, setImgPrevUrl] = useState("");
  const [file, setFile] = useState("");
  const onSubmit = e => {
    console.log("Form submitted..");
    e.preventDefault();
  };

  const _handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      console.log(reader.result);
      setFile(file);
      setImgPrevUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleClose = () => {
    setImgPrevUrl("");
  };

  const content = imgPrevUrl ? (
    <div className="hidden-form">
      <div className="form-card request">
        <div className="close-img">
          <i className="fas fa-times-circle" onClick={handleClose}></i>
        </div>

        <div className="request-img">
          <img
            crossOrigin={"anonymous"}
            src={imgPrevUrl}
            alt={"example"}
            className="grid-img"
          ></img>
        </div>
      </div>
    </div>
  ) : null;
  return (
    <ContentWrapper>
      <div className="form-card">
        <div className=" card-top-tablet">
          <h3>
            <Link to="/view-requests">
              <i className="far fa-arrow-alt-circle-left"></i>
            </Link>
            &nbsp;New Request
          </h3>
        </div>
        <div className="visitorForm">
          <div className="input-field">
            <p>
              <small>
                <b>Meeting Room</b>
              </small>
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
              placeholder="Select meeting room"
              options={STATES}
            />
          </div>
          <div className="input-field">
            <p>
              <small>
                <b>Category</b>
              </small>
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
              placeholder="Select Category"
              options={CATEGORIES}
            />
          </div>
          <div className="input-field">
            <p>
              <small>
                <b>Input problem</b>
              </small>
            </p>
            <Card body>
              <textarea
                rows="5"
                className="form-control note-editor note-editor-margin"
              ></textarea>
            </Card>
          </div>
          <p>
            <b>Upload image</b>
          </p>
          <div className="upload-btn-wrapper upload-req">
            <input
              type="file"
              className="add-cursor"
              accept="image/png,image/gif,image/jpeg"
              name="myfile"
              onChange={e => _handleImageChange(e)}
            ></input>
            <button className="btn-upload">
              <i class="fas fa-image"></i>
            </button>
          </div>
          {content}
          <hr />{" "}
          <div className="button-align">
            <button class="invite-btn" type="button">
              <i class="icon-paper-plane"></i>&nbsp;&nbsp;Submit
            </button>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
export default NewRequest;
