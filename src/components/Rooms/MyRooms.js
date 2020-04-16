import React, { Component } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import $ from "jquery";
import "../../styles/MyStyles/custom.css";
import Datatable from "../Tables/Datatable";
import {
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import classNames from "classnames";
import "flatpickr/dist/themes/light.css";
import { Link } from "react-router-dom";

class DropdownBox extends Component {
  state = { ddOpen: false };
  toggle = () =>
    this.setState({
      ddOpen: !this.state.ddOpen
    });
  render() {
    const ddClass = classNames("animated", this.props.title);

    return (
      <div>
        <Dropdown isOpen={this.state.ddOpen} toggle={this.toggle}>
          <DropdownToggle
            className="room-dropdown"
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
  }
}

class TableStandard extends Component {
  state = {
    dtOptions1: {
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
    },
    date: new Date()
  };

  // Access to internal datatable instance for customizations
  dtInstance = dtInstance => {
    const inputSearchClass = "datatable_input_col_search";
    const columnInputs = $("tfoot ." + inputSearchClass);
    // On input keyup trigger filtering
    columnInputs.keyup(function() {
      dtInstance.fnFilter(this.value, columnInputs.index(this));
    });
  };

  render() {
    const { date } = this.state;
    const ANIMATIONS = ["fadeIn"];
    return (
      <ContentWrapper>
        <Container fluid>
          {/* DATATABLE DEMO 1 */}
          <Card>
            <CardHeader className="table-card-header table-card-header-rooms ">
              <h1>1 Room(s)</h1>
              <Link to="/new-room">
                <button
                  href="#"
                  className="btn btn-secondary btn-lg invite-btn"
                >
                  {" "}
                  Create New
                </button>
              </Link>
            </CardHeader>
            <CardBody>
              <Datatable options={this.state.dtOptions1}>
                <table className="table table-striped my-4 w-100 smallest">
                  <thead>
                    <tr>
                      <th data-priority="1"></th>
                      <th>Title</th>
                      <th>Description </th>
                      <th className="sort-numeric">Resources</th>
                      <th className="sort-alpha" data-priority="2">
                        manager
                      </th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="gradeX">
                      <td></td>
                      <td>Conference Room</td>
                      <td>Good Room</td>
                      <td>HDMI, projector</td>
                      <td>Kamsi Kodi</td>

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
  }
}

export default TableStandard;
