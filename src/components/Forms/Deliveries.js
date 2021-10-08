import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import "../../styles/MyStyles/custom.css";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import DeliveriesContext from "../../context/deliveries/deliveriesContext";
import MaterialTable from "material-table";

const DropdownBox = title => {
  const [ddOpen, setDdopen] = useState(false);

  const toggle = () => setDdopen(!ddOpen);

  return (
    <div>
      <Dropdown isOpen={ddOpen} toggle={toggle}>
        <DropdownToggle
          className="cursor-pointer"
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
            <i class="icon-envelope-open"></i>&nbsp;&nbsp;Refer to Visitors
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

const Deliveries = () => {
  const deliveriesContext = useContext(DeliveriesContext);
  const { deliveries } = deliveriesContext;

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
      title: "Item",
      field: "item"
    },
    {
      title: "Recipient",
      field: "recipient"
    },
    {
      title: "Delivery Date",
      field: "deliveryDate"
    },
    {
      title: "Signed In",
      field: "signedIn"
    }
  ];
  useEffect(() => {
    setData(deliveries);
  }, []);

  const ANIMATIONS = ["fadeIn"];
  return (
    <ContentWrapper>
      <Container fluid>
        {/* DATATABLE DEMO 1 */}
        <Card>
          <CardHeader className="table-card-header">
            <h1>1 Delivery(s)</h1>
            <Flatpickr
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
              <option value="1">All Deliveries</option>
              <option value="2">My Deliveries</option>
            </select>
            <Link to="/form-standard">
              <button href="#" className="btn btn-secondary btn-lg invite-btn">
                Export
              </button>
            </Link>
          </CardHeader>
          <CardBody>
            <MaterialTable title="Deliveries" data={data} columns={columns} />
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default Deliveries;
