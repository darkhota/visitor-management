import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import "../../styles/MyStyles/custom.css";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import VisitorsContext from "../../context/visitors/visitorsContext";
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
            <i class="icon-logout"></i>&nbsp;&nbsp;Sign out
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-envelope-open"></i>&nbsp;&nbsp;Refer to visitor
            manager
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-trash"></i>&nbsp;&nbsp;Delete visitor
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const VisitorsLog = visitor => {
  const visitorsContext = useContext(VisitorsContext);
  const { visitors } = visitorsContext;

  const [date, setDate] = useState(new Date());

  const [data, setData] = useState([]);

  const columns = [
    {
      title: "ID",
      field: "id"
    },
    {
      title: "Visitor",
      field: "visitor"
    },
    {
      title: "Purpose",
      field: "purpose"
    },
    {
      title: "Host",
      field: "host"
    },
    {
      title: "Private Notes",
      field: "privateNotes"
    },
    {
      title: "Date",
      field: "date"
    },
    {
      title: "Signed in",
      field: "signedIn"
    },
    {
      title: "Signed out",
      field: "signedOut"
    },
    {
      title: "Check out",
      field: "checkedOutBy"
    }
  ];
  useEffect(() => {
    setData(visitors);
  }, []);
  const ANIMATIONS = ["fadeIn"];
  return (
    <ContentWrapper>
      <Container fluid>
        {/* DATATABLE DEMO 1 */}
        <Card>
          <CardHeader className="table-card-header">
            <h1>3 visitors</h1>
            <Flatpickr
              className="date-picker"
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
            <select defaultValue="" className="custom-select" multiple="">
              <option value="1">All Visitors</option>
              <option value="2">My Visitors</option>
              <option value="3">Currently Signed In</option>
            </select>
            <Link to="/#">
              {" "}
              <button className="btn btn-secondary btn-lg ">Export</button>
            </Link>
          </CardHeader>
          <CardBody>
            <MaterialTable title="Visitors Log" data={data} columns={columns} />

            {/* <td className="image-holder">
                        <img src="img/user/02.jpg"></img>
                      </td> */}
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};
export default VisitorsLog;
