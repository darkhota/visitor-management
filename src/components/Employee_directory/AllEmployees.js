import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import "../../styles/MyStyles/custom.css";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import Avatar, { ConfigProvider } from "react-avatar";
import EmployeeContext from "../../context/employees/employeeContext";
import MaterialTable from "material-table";

const DropdownBox = ({ title }) => {
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
            <i class="icon-user"></i>&nbsp;&nbsp;Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-ban"></i>&nbsp;&nbsp;Change status
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-settings"></i>&nbsp;&nbsp;Reset password
          </a>
          <hr></hr>
          <a class="dropdown-item" href="#">
            <i class="icon-trash"></i>&nbsp;&nbsp;Delete user
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const AllEmployees = () => {
  const employeeContext = useContext(EmployeeContext);
  const { employees } = employeeContext;

  const [data, setData] = useState([]);

  const columns = [
    {
      title: "ID",
      field: "id"
    },
    {
      title: "Employee",
      field: "empName"
    },
    {
      title: "Account Type",
      field: "accountType"
    },
    {
      title: "Gender",
      field: "gender"
    },
    {
      title: "Company",
      field: "company"
    },
    {
      title: "Email",
      field: "email"
    },
    {
      title: "Status",
      field: "status"
    }
  ];
  useEffect(() => {
    setData(employees);
  }, []);
  const ANIMATIONS = ["fadeIn"];
  return (
    <ConfigProvider colors={["hsl(172, 33%, 45%", "blue", "blue"]}>
      <ContentWrapper>
        <Container fluid>
          {/* DATATABLE DEMO 1 */}
          <Card>
            <CardHeader className=" employee-header">
              <h1>1 Employee</h1>
              <Link to="/new-employee">
                {" "}
                <button className="btn btn-secondary btn-lg invite-btn employee-btn">
                  Create New
                </button>
              </Link>{" "}
            </CardHeader>
            <div className="subheader">
              <div className="align-left">
                <Link to="/#" className="black-link">
                  <button className="btn btn-secondary btn-lg invite-btn white-btn">
                    Export
                  </button>
                </Link>{" "}
              </div>
              <div className="align-left align-left2">
                <Link to="/#" className="black-link">
                  <button className="btn btn-secondary btn-lg invite-btn">
                    Import employees{" "}
                  </button>
                </Link>
              </div>
              <div className="button-align no-align">
                <select defaultValue="" className="custom-select" multiple="">
                  <option value="1">All Employees</option>
                  <option value="2">My Employees</option>
                </select>
              </div>
            </div>

            <CardBody>
              <MaterialTable title="Employees" data={data} columns={columns} />
            </CardBody>
          </Card>
        </Container>
      </ContentWrapper>
    </ConfigProvider>
  );
};

export default AllEmployees;
