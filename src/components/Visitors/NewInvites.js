import React, { useState, useContext } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import "../../styles/MyStyles/custom.css";
import Select from "react-select";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Card, Input } from "reactstrap";
import { Link } from "react-router-dom";
import InviteContext from "../../context/invites/inviteContext";

const STATES = [
  {
    value: "australian-capital-territory",
    label: "Visitor",
    className: "State-ACT"
  },
  {
    value: "new-south-wales",
    label: "New South Wales",
    className: "State-NSW"
  },
  { value: "victoria", label: "Victoria", className: "State-Vic" }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,

    color: state.isSelected ? "#fff" : "",
    padding: 20
  })
};

const NewInvites = () => {
  const inviteContext = useContext(InviteContext);
  const [invite, setInvite] = useState({
    visitor: "",
    purpose: "visitor",
    invitedBy: "Niyi Adisa",
    privateNotes: "",
    dueAt: ""
  });

  const { visitor, purpose, invitedBy, privateNotes, dueAt } = invite;
  const [date, setDate] = useState(new Date());

  const onChange = e =>
    setInvite({ ...invite, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    inviteContext.newInvite(invite);
    setInvite({
      visitor: "",
      purpose: "",
      invitedBy: "",
      privateNotes: "",
      dueAt: ""
    });
  };

  return (
    <ContentWrapper>
      <div className="form-card">
        <div className=" card-top-tablet">
          <h3>
            <Link to="/invites">
              <i className="far fa-arrow-alt-circle-left"></i>
            </Link>
            &nbsp;Single invite
          </h3>
        </div>
        <form className="visitorForm" onSubmit={onSubmit}>
          <div className="input-field">
            <p>
              <small>
                <b>Visitor Type</b>
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
              placeholder="Select visitor"
              options={STATES}
            />
          </div>

          <div className="form-gird">
            <div className="flat-width">
              <p>
                <small>
                  <b>Arrival date</b>
                </small>
                <span className="required">*</span>
              </p>
              <Flatpickr
                options={{
                  altInput: true,
                  altFormat: "F j, Y",
                  dateFormat: "Y-m-d"
                }}
                value={date}
                onChange={date => {
                  setDate(date);
                  onChange={onChange}
                }}
              />
            </div>

            <div className="flat-width">
              <p>
                <small>
                  <b>Arrival time</b>
                </small>
                <span className="required">*</span>
              </p>
              <select
                defaultValue=""
                className="custom-select"
                multiple=""
                vlaue={dueAt}
                name="dueAt"
                
              >
                <option defaultValue="1">12:45 pm</option>
                <option defaultValue="2">1:00 pm</option>
                <option defaultValue="3">1:15 pm</option>
              </select>
            </div>
          </div>

          <div className="input-field">
            <p>
              <small>
                <b>Full Name</b>
              </small>{" "}
              <span className="required">*</span>
            </p>
            <Input
              id="input-id-1"
              type="text"
              placeholder="Enter full name"
              value={visitor}
              name="visitor"
              onChange={onChange}
            />
          </div>
          <div className="input-field">
            <p>
              <small>
                <b>Visitor Email Address </b>
              </small>
              <span className="required">*</span>
            </p>
            <Input id="input-id-1" type="text" placeholder="Enter email" />
          </div>
          <div className="input-field">
            <p>
              <small>
                <b>Phone number</b>
              </small>
              <span className="required">*</span>
            </p>
            <Input
              id="input-id-1"
              type="text"
              placeholder="Enter phone number"
            />
          </div>
          <div className="input-field">
            <p>
              <small>
                <b>Private note</b>
              </small>
            </p>
            <Card body>
              <textarea
                rows="5"
                className="form-control note-editor note-editor-margin"
                value={privateNotes}
                name="privateNotes"
                onChange={onChange}
              ></textarea>
            </Card>
          </div>
          <div className="button-align">
            <button class="invite-btn" type="submit" value="New Invite">
              <i class="icon-paper-plane"></i>&nbsp;&nbsp;Invite
            </button>
          </div>
        </form>
      </div>
    </ContentWrapper>
  );
};
export default NewInvites;
