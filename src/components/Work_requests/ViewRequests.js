import React, { useState } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import $ from "jquery";
import "../../styles/MyStyles/custom.css";
import Datatable from "../Tables/Datatable";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import classNames from "classnames";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";

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
          <a className="dropdown-item" href="#">
            <i className="icon-trash"></i>&nbsp;&nbsp;Delete request
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const ViewRequests = () => {
  const [dtOptions1, setDtOptions1] = useState({
    paging: true, // Table pagination
    ordering: true, // Column ordering
    info: true, // Bottom left status text
    responsive: true,
    // Text translation options
    // Note the required keywords between underscores (e.g _MENU_)
    oLanguage: {
      sSearch: '<em class="fa fa-search"></em>',

      info: "Showing page _PAGE_ of _PAGES_",
      zeroRecords: "Nothing found - sorry",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
      oPaginate: {
        sNext: '<em class="fa fa-caret-right"></em>',
        sPrevious: '<em class="fa fa-caret-left"></em>'
      }
    }
  });

  const [date, setDate] = useState(new Date());
  const [imgOverlay, setOverlay] = useState(false);

  const viewOverlay = () => setOverlay(!imgOverlay);
  const handleClose = () => {
    setOverlay (false);
  }

  // Access to internal datatable instance for customizations
  const dtInstance = dtInstance => {
    const inputSearchClass = "datatable_input_col_search";
    const columnInputs = $("tfoot ." + inputSearchClass);
    // On input keyup trigger filtering
    columnInputs.keyup(function() {
      dtInstance.fnFilter(this.value, columnInputs.index(this));
    });
  };

  const ANIMATIONS = ["fadeIn"];
  const content = imgOverlay ? (
    <div className="overlay">
        <div className= "close-img display">
        <i className="fas fa-times-circle" onClick={handleClose}></i>
        </div>
         
         <div className="overlay-img">
      <img src="img/ipad.png" alt=""  />
      </div>
    </div>
  ) : null;
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
                <button
                  href="#"
                  className="btn btn-secondary btn-lg invite-btn"
                >
                  New request{" "}
                </button>
              </Link>
            </CardHeader>
            <CardBody>
              <Datatable options={dtOptions1}>
                <table className="table table-striped my-4 w-100 smaller">
                  <thead>
                    <tr>
                      <th></th>
                      <th data-priority="2">Room</th>
                      <th>Description</th>
                      <th className="sort-numeric no-display">Submitted By</th>
                      <th className="sort-alpha no-display">Status</th>
                      <th>Image</th>
                      <th className="no-display">Time</th>
                      <th className="no-display"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="gradeX">
                      <td></td>
                      <td>Conference Room</td>
                      <td>Bad Projector</td>
                      <td className="no-display">Niyi Adisa</td>
                      <td className="no-display">
                        <button href="#" className=" table-round-btn">
                          Active{" "}
                        </button>
                      </td>
                      <td>
                        <button
                          href="#"
                          className=" table-round-btn"
                          onClick={viewOverlay}
                        >
                          <i className="fas fa-image"></i>
                        </button>
                      </td>
                      <td className="no-display">10:00 am</td>
                      <td className="no-display">
                        {ANIMATIONS.map((title, i) => (
                          <DropdownBox title={title} key={i} />
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Datatable>
              {content}
            </CardBody>
          </Card>
        </Container>
      </ContentWrapper>
  );
};

export default ViewRequests;