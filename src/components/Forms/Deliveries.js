import React, {  useState } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody, } from "reactstrap";
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
            <i class="icon-envelope-open"></i>&nbsp;&nbsp;Refer to Workwise
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
            <Datatable options={dtOptions1}>
              <table className="table table-striped my-4 w-100 ">
                <thead>
                  <tr>
                    <th data-priority="1"></th>
                    <th>
                      <div className="table-cell tw-align-middle tw-pl-1 ember-view log-chk">
                        <input className="js-entry-checkbox" type="checkbox" />
                      </div>
                    </th>
                    <th></th>
                    <th>Visitor</th>
                    <th>Purpose </th>
                    <th className="sort-numeric">Recipent</th>
                    <th className="sort-alpha" data-priority="2">
                      Date
                    </th>
                    <th>Signed in</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="gradeX">
                    <td></td>
                    <td>
                      <input class="js-entry-checkbox" type="checkbox" />
                    </td>
                    <td className="image-holder">
                      <img src="img/user/02.jpg"></img>
                    </td>
                    <td>Joseph Tioluwani</td>
                    <td>Deliveries</td>
                    <td>Niyi Adisa</td>
                    <td>Mar 6, 2020</td>
                    <td>2:06pm</td>
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

export default Deliveries;
