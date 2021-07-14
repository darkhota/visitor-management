import React, { useState, useContext } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";
import Select from "react-select";
import "flatpickr/dist/themes/light.css";
import { Card, Input } from "reactstrap";
import { Creatable } from "react-select";
import { Link } from "react-router-dom";
import RoomContext from "../../context/rooms/roomContext";

const STATES = [
  {
    value: "manager",
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
  const roomContext = useContext(RoomContext);
  const [room, setRoom] = useState({
    title: "",
    description: "",
    resources: "projector, whiteBoard",
    manager: ""
  });

  const { title, description, resources, manager } = room;

  const onChange = e => setRoom({ ...room, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    roomContext.newRoom(room);
    setRoom({
      title: "",
      description: "",
      resources: "",
      manager: ""
    });
  };

  return (
    <ContentWrapper>
      <div className="form-card">
        <div className=" card-top-tablet">
          <h3>
            <Link to="/my-rooms">
              <i className="far fa-arrow-alt-circle-left"></i>
            </Link>
            &nbsp;Create a new room
          </h3>
        </div>
        <form className="visitorForm new-room-form" onSubmit={onSubmit}>
          <div className="input-field">
            <p>
              Room Name <span className="required">*</span>
            </p>
            <Input
              id="input-id-1"
              type="text"
              placeholder="Enter full name"
              name="title"
              value={title}
              onChange={onChange}
            />
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
                name="description"
                value={description}
                onChange={onChange}
              ></textarea>
            </Card>
          </div>
          <hr></hr>
          <button className="invite-btn" type="submit" value="new room">
          <i class="icon-paper-plane"></i>&nbsp;&nbsp;Save
        </button>
        </form>
        

       
      </div>
    </ContentWrapper>
  );
};
export default NewRoom;
