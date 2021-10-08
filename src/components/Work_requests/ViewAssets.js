import React, { useState, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import "../../styles/MyStyles/custom.css";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "flatpickr/dist/themes/light.css";
import { Link } from "react-router-dom";
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
          <Link to="#" className="dropdown-item">
            <i className="icon-trash"></i>&nbsp;&nbsp;Delete asset
          </Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
const ViewAssets = () => {
  const [date, setDate] = useState(new Date());
  const [imgOverlay, setOverlay] = useState(false);

  const viewOverlay = () => setOverlay(!imgOverlay);
  const handleClose = () => {
    setOverlay(false);
  };

  const data = [
    {
      id: 1,
      assetName: "Projector",
      brand: "Sony",
      roomsAssignedTo: "Room A, Room B, Room C",
      assignedTo: "Kamsi Kodi",
      category: "IT Hardware",
      assetTag: "3766536f626r"
    },
    {
      id: 1,
      assetName: "Projector",
      brand: "Dell",
      roomsAssignedTo: "Room A",
      assignedTo: "Kamsi Kodi",
      category: "IT Hardware",
      assetTag: "3766536f626d"
    },
    {
      id: 1,
      assetName: "Chair",
      brand: "Herman Miller",
      roomsAssignedTo: "Room A, Room B",
      assignedTo: "Kamsi Kodi",
      category: "Facility-Furniture",
      assetTag: "3766ddffdfdf"
    }
  ];

  const columns = [
    {
      title: "ID",
      field: "id"
    },
    {
      title: "Asset Name",
      field: "assetName"
    },
    {
      title: "Brand",
      field: "brand"
    },
    {
      title: "Rooms Assigned to",
      field: "roomsAssignedTo"
    },
    {
      title: "Assigned To",
      field: "assignedTo"
    },
    {
      title: "Category",
      field: "category"
    },
    {
      title: "Asset Tag",
      field: "assetTag"
    }
  ];

  const ANIMATIONS = ["fadeIn"];
  return (
    <ContentWrapper>
      <Container fluid>
        {/* DATATABLE DEMO 1 */}
        <Card>
          <CardHeader className="table-card-header grid-3">
            <h1>1 Asset</h1>
            <select
              defaultValue=""
              className="custom-select custom-select-small"
              multiple=""
            >
              <option value="1">All Assets</option>
              <option value="2">Hardware</option>
              <option value="2">Facility</option>
            </select>
            <Link to="/create-asset">
              {" "}
              <button href="#" className="btn btn-secondary btn-lg invite-btn">
                New asset{" "}
              </button>
            </Link>
          </CardHeader>
          <CardBody>
            <MaterialTable title="Assets" data={data} columns={columns} />
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default ViewAssets;
