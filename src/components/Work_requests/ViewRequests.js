import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import "../../styles/MyStyles/custom.css";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import RequestContext from "../../context/workRequests/requestContext";
import MaterialTable from "material-table";

const DropdownBox = title => {
  const [ddOpen, setDdopen] = useState(false);

  const toggle = () => setDdopen(!ddOpen);

  return (
    <div>
      <Dropdown isOpen={ddOpen} toggle={toggle}>
        <DropdownToggle
          className="remove-border"
          tag="span"
          data-toggle="dropdown"
        >
          <i className="fa fa-ellipsis-h"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          <a className="dropdown-item" href="#">
            <i className="icon-ban"></i>&nbsp;&nbsp;Change status
          </a>
          <Link to="/view-more" className="dropdown-item" href="#">
            <i className="icon-info"></i>&nbsp;&nbsp;View more
          </Link>
          <Link to="#" className="dropdown-item">
            <i className="icon-trash"></i>&nbsp;&nbsp;Delete request
          </Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const ViewRequests = () => {
  const requestContext = useContext(RequestContext);
  const { requests } = requestContext;

  const [date, setDate] = useState(new Date());
  const [imgOverlay, setOverlay] = useState(false);

  const viewOverlay = () => setOverlay(!imgOverlay);
  const handleClose = () => {
    setOverlay(false);
  };

  const [data, setData] = useState([]);

  const columns = [
    {
      title: "ID",
      field: "id"
    },
    {
      title: "Description",
      field: "description"
    },
    {
      title: "Room",
      field: "room"
    },
    {
      title: "Submitted By",
      field: "submittedBy"
    },
    {
      title: "Assigned To",
      field: "assignedTo"
    },
    {
      title: "Status",
      field: "status"
    },
    {
      title: "Time",
      field: "time"
    }
  ];
  useEffect(() => {
    setData(requests);
  }, []);

  const ANIMATIONS = ["fadeIn"];
  return (
    <ContentWrapper>
      <Container fluid>
        {/* DATATABLE DEMO 1 */}
        <Card>
          <CardHeader className="table-card-header">
            <h1>1 request</h1>
            <Flatpickr
              className="custom-select"
              options={{
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d"
              }}
              value={date}
              onChange={date => {
                setDate(date);
              }}
            />
            <select
              defaultValue=""
              className="custom-select custom-select-small"
              multiple=""
            >
              <option value="1">All Requests</option>
              <option value="2">My Requests</option>
            </select>
            <Link to="/new-request">
              {" "}
              <button href="#" className="btn btn-secondary btn-lg invite-btn">
                New request{" "}
              </button>
            </Link>
          </CardHeader>
          <CardBody>
            <MaterialTable title="Requests" data={data} columns={columns} />
          </CardBody>

          {/* <button href="#" className=" table-round-btn">
                          Active{" "}
                        </button> */}
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default ViewRequests;
