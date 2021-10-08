import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import $ from "jquery";
import "../../styles/MyStyles/custom.css";
import Datatable from "../Tables/Datatable";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import classNames from "classnames";
import "flatpickr/dist/themes/light.css";
import { Link } from "react-router-dom";
import RoomContext from "../../context/rooms/roomContext";
import MaterialTable from "material-table";

const DropdownBox = title => {
  const [ddOpen, setDdopen] = useState(false);

  const toggle = () => setDdopen(!ddOpen);

  const ddClass = classNames("animated", title);

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
            <i class="icon-note"></i>&nbsp;&nbsp;Book room
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-pencil"></i>&nbsp;&nbsp;Edit room
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-trash"></i>&nbsp;&nbsp;Delete room
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const MyRooms = () => {
  const roomContext = useContext(RoomContext);
  const { rooms } = roomContext;

  const [data, setData] = useState([]);

  const columns = [
    {
      title: "ID",
      field: "id"
    },
    {
      title: "ˇTitle",
      field: "title"
    },
    {
      title: "Description",
      field: "description"
    },
    {
      title: "Resources",
      field: "resources"
    },
    {
      title: "Manager",
      field: "manager"
    }
  ];
  useEffect(() => {
    setData(rooms);
  }, []);

  const ANIMATIONS = ["fadeIn"];
  return (
    <ContentWrapper>
      <Container fluid>
        {/* DATATABLE DEMO 1 */}
        <Card>
          <CardHeader className="table-card-header table-card-header-rooms ">
            <h1>1 Room(s)</h1>
            <Link to="/new-room">
              <button href="#" className="btn btn-secondary btn-lg invite-btn">
                {" "}
                Create New
              </button>
            </Link>
          </CardHeader>
          <CardBody>
            <MaterialTable title="Rooms" data={data} columns={columns} />
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default MyRooms;
