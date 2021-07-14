import React, { useState } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import $ from "jquery";
import "../../styles/MyStyles/custom.css";
import Datatable from "../Tables/Datatable";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "flatpickr/dist/themes/light.css";
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
          <Link  to = "#" className="dropdown-item" >
            <i className="icon-trash"></i>&nbsp;&nbsp;Delete asset
          </Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const ViewAssets = () => {
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
                <button
                  href="#"
                  className="btn btn-secondary btn-lg invite-btn"
                >
                  New asset{" "}
                </button>
              </Link>
            </CardHeader>
            <CardBody>
              <Datatable options={dtOptions1}>
                <table className="table table-striped my-4 w-100 smaller">
                  <thead>
                    <tr>
                      <th></th>
                      <th data-priority="2">Asset Name</th>
                      <th>Brand</th>
                      <th className="sort-numeric no-display">Rooms assigned to</th>
                      <th className="sort-alpha no-display">Category</th>
                      <th>Asset tag</th>
                      <th className="no-display"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="gradeX">
                      <td></td>
                      <td>Projector</td>
                      <td>Sony</td>
                      <td className="no-display">Room A, Room B, Room C</td>
                      <td className="no-display">
                       IT Hardware
                      </td>
                      <td>
                     3766536f626r
                      </td>
                      <td className="no-display">
                        {ANIMATIONS.map((title, i) => (
                          <DropdownBox title={title} key={i} />
                        ))}
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="gradeX">
                      <td></td>
                      <td>Projector</td>
                      <td>Dell</td>
                      <td className="no-display">Room A</td>
                      <td className="no-display">
                       IT Hardware
                      </td>
                      <td>
                     37665rfrf626r
                      </td>
                      <td className="no-display">
                        {ANIMATIONS.map((title, i) => (
                          <DropdownBox title={title} key={i} />
                        ))}
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="gradeX">
                      <td></td>
                      <td>Chair</td>
                      <td>Herman Miller</td>
                      <td className="no-display">Room A, Room B</td>
                      <td className="no-display">
                       Facility-Furniture
                      </td>
                      <td>
                     3766ddffdfdf
                      </td>
                      <td className="no-display">
                        {ANIMATIONS.map((title, i) => (
                          <DropdownBox title={title} key={i} />
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

export default ViewAssets;
