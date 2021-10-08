import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import "../../styles/MyStyles/custom.css";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import RoomContext from "../../context/rooms/roomContext";
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
            <i class="icon-note"></i>&nbsp;&nbsp;Edit booking
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const Bookings = () => {
  const roomContext = useContext(RoomContext);
  const { bookings } = roomContext;
  const [date, setDate] = useState(new Date());
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
      title: "Room",
      field: "room"
    },
    {
      title: "Date",
      field: "date"
    },
    {
      title: "Duration",
      field: "duration"
    }
  ];
  useEffect(() => {
    setData(bookings);
  }, []);

  const ANIMATIONS = ["fadeIn"];
  return (
    <ContentWrapper>
      <Container fluid>
        {/* DATATABLE DEMO 1 */}
        <Card>
          <CardHeader className="table-card-header">
            <h1>1 Booking(s)</h1>
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
              <option value="1">All Bookings</option>
              <option value="2">My Bookings</option>
            </select>
            <Link to="/#">
              <button className="btn btn-secondary btn-lg invite-btn">
                Export
              </button>
            </Link>
          </CardHeader>
          <CardBody>
            <MaterialTable title="Bookings" data={data} columns={columns} />
          </CardBody>
          {/* <td>
                        {ANIMATIONS.map((title, i) => (
                          <DropdownBox title={title} />
                        ))}
                      </td> */}
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default Bookings;
