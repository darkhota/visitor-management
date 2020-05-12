import React, { useState } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import $ from "jquery";
import "../../styles/MyStyles/custom.css";
import Datatable from "../Tables/Datatable";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
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
            <Datatable options={dtOptions1}>
              <table className="table table-striped my-4 w-100 smaller">
                <thead>
                  <tr>
                    <th data-priority="1"></th>
                    <th>Title</th>
                    <th>Room </th>
                    <th className="sort-numeric">Date</th>
                    <th className="sort-alpha" data-priority="2">
                      Duration
                    </th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="gradeX">
                    <td></td>
                    <td>Test</td>
                    <td>Conference room</td>

                    <td>28 Jan, 2020</td>
                    <td>08:00 AM - 08:30 AM</td>
                    <td>
                      {ANIMATIONS.map((title, i) => (
                        <DropdownBox title={title} />
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Datatable>
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default Bookings;
