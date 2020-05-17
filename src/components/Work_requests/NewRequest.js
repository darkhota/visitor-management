import React, { useState } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";
import Select from "react-select";
import "flatpickr/dist/themes/light.css";
import { Card, Input } from "reactstrap";
import { Link } from "react-router-dom";

const STATES = [
  { value: "room-a", label: "Room A", className: "State-ACT" },
  { value: "room-b", label: "Room B", className: "State-NSW" },
  { value: "room-c", label: "Room C", className: "State-Vic" }
];

const CATEGORIES = [
  { value: "software", label: "IT Software", className: "State-ACT" },
  { value: "hardware", label: "IT Hardware", className: "State-NSW" },
  { value: "facilities", label: "Facilities", className: "State-Vic" }
];

const DEVICES = [
  { value: "projector", label: "Projector", className: "State-ACT" },
  { value: "smart-board", label: "Smart board", className: "State-NSW" },
  { value: "ipad", label: "Ipad", className: "State-Vic" },
  { value: "camera", label: "Camera", className: "State-Vic" },
  { value: "monitor", label: "Monitor", className: "State-Vic" },
  { value: "internet", label: "Internet", className: "State-Vic" }
];

const FACILITIES = [
  { value: "furniture", label: "Furniture", className: "State-ACT" },
  { value: "electrical", label: "Electrical", className: "State-NSW" }
];
const BRANDS = [
  { value: "Sony", label: "Sony", className: "State-ACT" },
  { value: "Dell", label: "Dell", className: "State-NSW" },
  { value: "Fijitsu", label: "Fijitsu", className: "State-NSW" }
];
const TAGS = [
  { value: "08698tjr9u", label: "08698tjr9u", className: "State-ACT" },
  { value: "948875y8y4y", label: "948875y8y4y", className: "State-NSW" }
];
const FURNITURES = [
  { value: "Chair", label: "Chair", className: "State-ACT" },
  { value: "Table", label: "Table", className: "State-NSW" }
];
const FUBRANDS = [
  { value: "HermanMiller", label: "Herman Miller", className: "State-ACT" }
];
const ELECTRONICS = [
  {
    value: "air-conditioner",
    label: "Air conditioner",
    className: "State-ACT"
  },
  { value: "light-bulb", label: "Light bulb", className: "State-NSW" }
];
const ELEBRANDS = [
  { value: "panasonic", label: "Panasonic", className: "State-ACT" },
  { value: "lg", label: "LG", className: "State-NSW" }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,

    color: state.isSelected ? "#fff" : "",
    padding: 20
  })
};

const NewRequest = () => {
  const [imgPrevUrl, setImgPrevUrl] = useState("");
  const [file, setFile] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = option => {
    setSelectedValue(option.value);
  };

  const renderSelectedForm = param => {
    switch (param) {
      case "software":
        return (
          <div>
            <div className="input-field">
              <p>
                <small>
                  <b>Software description</b>
                </small>
              </p>
              <Input
                id="input-id-1"
                type="text"
                placeholder="Enter description"
              />
            </div>
            <div className="input-field">
              <p>
                <small>
                  <b>Device</b>
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
                placeholder="Select Device"
                options={DEVICES}
              />
            </div>
            <div className="input-field">
              <p>
                <small>
                  <b> Brand </b>
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
                placeholder="Select Brand"
                options={BRANDS}
              />
            </div>
            <div className="input-field">
              <p>
                <small>
                  <b>Asset tag number</b>
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
                placeholder="Select tag"
                options={TAGS}
              />
            </div>
          </div>
        );
      case "hardware":
        return (
          <div>
            <div className="input-field">
              <p>
                <small>
                  <b>Device</b>
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
                placeholder="Select Device"
                options={DEVICES}
              />
            </div>
            <div className="input-field">
              <p>
                <small>
                  <b>Brand</b>
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
                placeholder="Select brand"
                options={BRANDS}
              />
            </div>
            <div className="input-field">
              <p>
                <small>
                  <b>Asset tag number</b>
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
                placeholder="Select tag"
                options={TAGS}
              />
            </div>
          </div>
        );
      case "facilities":
        return (
          <div className="input-field">
            <p>
              <small>
                <b>Facility type</b>
              </small>
            </p>
            <Select
              onChange={handleChange}
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
              placeholder="Select type"
              options={FACILITIES}
            />
          </div>
        );
      default:
        return null;
    }
  };
  const renderSelectedFacility = param => {
    switch (param) {
      case "furniture":
        return (
          <div>
            <div className="input-field">
              <p>
                <small>
                  <b>Select Furniture</b>
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
                placeholder="Select Furniture"
                options={FURNITURES}
              />
            </div>
            <div className="input-field">
              <p>
                <small>
                  <b> Brand </b>
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
                placeholder="Select Brand"
                options={FUBRANDS}
              />
            </div>
            <div className="input-field">
              <p>
                {" "}
                <small>
                  <b>Asset tag number</b>
                </small>{" "}
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
                placeholder="Select tag"
                options={TAGS}
              />
            </div>
          </div>
        );
      case "electrical":
        return (
          <div>
            <div className="input-field">
              <p>
                <small>
                  <b>Electrical device</b>
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
                placeholder="Select electronic device"
                options={ELECTRONICS}
              />
            </div>
            <div className="input-field">
              <p>
                <small>
                  <b>Brand</b>
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
                placeholder="Select Brand"
                options={ELEBRANDS}
              />
            </div>
            <div className="input-field">
              <p>
                <small>
                  <b>Asset tag number</b>
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
                placeholder="Select tag"
                options={TAGS}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
              onChange={handleChange}
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
          {renderSelectedForm(selectedValue)}
          {renderSelectedFacility(selectedValue)}
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
