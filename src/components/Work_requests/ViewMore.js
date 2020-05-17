import React, { useState } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Col,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Select from "react-select";

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
const images = ["/img/workwise.png"];

const ViewMore = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContentWrapper>
      <Container fluid>
        <Card>
          <CardHeader className="table-card-header employee-header card-top-tablet">
            <h1>
              {" "}
              <Link to="/view-requests">
                <i className="far fa-arrow-alt-circle-left"></i>
              </Link>
              &nbsp;More info
            </h1>
          </CardHeader>
          <CardBody>
            <p className="lead bb">Details</p>
            <form className="form-horizontal">
              <FormGroup row>
                <Col md="4">Description:</Col>
                <Col md="8">
                  <strong>Bad Projector</strong>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">Room:</Col>
                <Col md="8">
                  <strong>Conference Room</strong>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">Submitted by:</Col>
                <Col md="8">
                  <strong>Niyi Adisa</strong>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">Assigned to:</Col>
                <Col md="8">
                  <strong>Tioluwani Joseph</strong>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">Category:</Col>
                <Col md="8">
                  <strong>IT software</strong>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">Date:</Col>
                <Col md="8">
                  <strong>04/10/2015</strong>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">Status</Col>
                <Col md="8">
                  <button href="#" className=" table-round-btn">
                    Active{" "}
                  </button>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="4">Status</Col>
                <Col md="8">
                  <button
                    type="button"
                    className=" table-round-btn green"
                    onClick={() => setIsOpen(true)}
                  >
                    View image
                  </button>
                  {isOpen && (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      onCloseRequest={() => setIsOpen(false)}
                    />
                  )}
                </Col>
              </FormGroup>
            </form>
            <p className="lead bb">Actions</p>

            <div className="form-gird">
              <div className="flat-width">
                <div className="input-field">
                  <p>
                    Reassign 
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
                    placeholder="Select staff"
                    options={STATES}
                  />
                </div>
              </div>

              <div className="flat-width">
                <p>
                  Change Status 
                </p>
                <FormGroup row>
                  <div className="col-md-10">
                    <div className="c-radio">
                      <label>
                        <Input type="radio" name="a" defaultValue="option1" />
                        <span className="fa fa-circle"></span>Active
                      </label>
                    </div>
                    <div className="c-radio">
                      <label>
                        <Input
                          type="radio"
                          name="a"
                          defaultValue="option2"
                          defaultChecked=""
                        />
                        <span className="fa fa-circle"></span>In Progress
                      </label>
                    </div>

                    <div className="c-radio">
                      <label>
                        <Input
                          type="radio"
                          name="a"
                          defaultValue="option2"
                          defaultChecked=""
                        />
                        <span className="fa fa-circle"></span>Closed
                      </label>
                    </div>
                  </div>
                </FormGroup>
              </div>
            </div>
            <button className="invite-btn delete-btn" type="button">
              <i className="icon-trash"></i>&nbsp;&nbsp;Delete request
            </button>

            &nbsp;
            &nbsp;
              <button className="invite-btn" type="button">
                <i className="icon-paper-plane"></i>&nbsp;&nbsp;Save
              </button>
          
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default ViewMore;
