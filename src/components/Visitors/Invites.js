import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import "../../styles/MyStyles/custom.css";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import Avatar, { ConfigProvider } from "react-avatar";
import InviteContext from "../../context/invites/inviteContext";
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
          <a class="dropdown-item" href="#">
            <i class="icon-action-redo"></i>&nbsp;&nbsp;Invite again
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-trash"></i>&nbsp;&nbsp;Delete invite
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const Invites = () => {
  const inviteContext = useContext(InviteContext);
  const { invites } = inviteContext;

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
      title: "Invited By",
      field: "invitedBy"
    },
    {
      title: "Private Notes",
      field: "privateNotes"
    },
    {
      title: "Due at",
      field: "dueAt"
    }
  ];
  useEffect(() => {
    setData(invites);
  }, []);

  const ANIMATIONS = ["fadeIn"];
  return (
    <ConfigProvider colors={["hsl(172, 33%, 45%", "blue", "blue"]}>
      <ContentWrapper>
        <Container fluid>
          {/* DATATABLE DEMO 1 */}
          <Card>
            <CardHeader className="table-card-header">
              <h1>3 invites</h1>
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
                <option value="1">All Invites</option>
                <option value="2">My Invites</option>
              </select>
              <Link to="/new-invites">
                {" "}
                <button
                  href="#"
                  className="btn btn-secondary btn-lg invite-btn"
                >
                  New invite{" "}
                </button>
              </Link>
            </CardHeader>
            <CardBody>
              <MaterialTable title="Invites" data={data} columns={columns} />

              {/* <td>
                          <Avatar
                            name={invite.visitor}
                            round="50px"
                            size="50"
                          />
                        </td> */}
            </CardBody>
          </Card>
        </Container>
      </ContentWrapper>
    </ConfigProvider>
  );
};

export default Invites;
