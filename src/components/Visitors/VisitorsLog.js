import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import $ from "jquery";
import "../../styles/MyStyles/custom.css";
// import Datatable from "../Tables/Datatable";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import VisitorsContext from "../../context/visitors/visitorsContext";
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
          <a className="dropdown-item" href="#">
            <i class="icon-logout"></i>&nbsp;&nbsp;Sign out
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-envelope-open"></i>&nbsp;&nbsp;Refer to visitor
            manager
          </a>
          <a class="dropdown-item" href="#">
            <i class="icon-trash"></i>&nbsp;&nbsp;Delete visitor
          </a>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const VisitorsLog = visitor => {
  const visitorsContext = useContext(VisitorsContext);
  const { visitors } = visitorsContext;
  // const [dtOptions1, setDtOptions1] = useState({
  //   paging: true, // Table pagination
  //   ordering: true, // Column ordering
  //   info: true, // Bottom left status text
  //   responsive: true,
  //   // Text translation options
  //   // Note the required keywords between underscores (e.g _MENU_)
  //   oLanguage: {
  //     sSearch: '<em class="fa fa-search"></em>',

  //     info: "Showing page _PAGE_ of _PAGES_",
  //     zeroRecords: "Nothing found - sorry",
  //     infoEmpty: "No records available",
  //     infoFiltered: "(filtered from _MAX_ total records)",
  //     oPaginate: {
  //       sNext: '<em class="fa fa-caret-right"></em>',
  //       sPrevious: '<em class="fa fa-caret-left"></em>'
  //     }
  //   }
  // });

  const [date, setDate] = useState(new Date());

  // Access to internal datatable instance for customizations
  // const dtInstance = dtInstance => {
  //   const inputSearchClass = "datatable_input_col_search";
  //   const columnInputs = $("tfoot ." + inputSearchClass);
  //   // On input keyup trigger filtering
  //   columnInputs.keyup(function() {
  //     dtInstance.fnFilter(this.value, columnInputs.index(this));
  //   });
  // };
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
      title: "Host",
      field: "host"
    },
    {
      title: "Private Notes",
      field: "privateNotes"
    },
    {
      title: "Date",
      field: "date"
    },
    {
      title: "Signed in",
      field: "signedIn"
    },
    {
      title: "Signed out",
      field: "signedOut"
    },
    {
      title: "Check out",
      field: "checkedOutBy"
    }
  ];
  useEffect(() => {
    setData(visitors);
  }, []);
  const ANIMATIONS = ["fadeIn"];
  return (
    <ContentWrapper>
      <Container fluid>
        {/* DATATABLE DEMO 1 */}
        <Card>
          <CardHeader className="table-card-header">
            <h1>3 visitors</h1>
            <Flatpickr
              className="date-picker"
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
              <option value="1">All Visitors</option>
              <option value="2">My Visitors</option>
              <option value="3">Currently Signed In</option>
            </select>
            <Link to="/#">
              {" "}
              <button className="btn btn-secondary btn-lg ">Export</button>
            </Link>
          </CardHeader>
          <CardBody>
            <MaterialTable title="Visitors Log" data={data} columns={columns} />
            {/* <Datatable options={dtOptions1}>
              <table className="table table-striped my-4 w-100">
                <thead>
                  <tr>
                    <th data-priority="1"></th>
                    <th>
                      <div className="table-cell tw-align-middle tw-pl-1 ember-view log-chk">
                        <input className="js-entry-checkbox" type="checkbox" />
                      </div>
                    </th>

                    <th></th>
                    <th data-priority="2">Visitor</th>
                    <th className="no-display">Purpose</th>
                    <th className="sort-numeric ">Host</th>
                    <th className="sort-alpha ">Private Notes</th>
                    <th className="no-display">Date</th>
                    <th className="no-display">Signed in</th>
                    <th className="no-display">Signed out</th>
                    <th className="no-display">Checked Out By</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                <tr className="gradeX">
                      <td></td>
                      <td className="dropTable">
                        <input class="js-entry-checkbox" type="checkbox" />
                      </td>
                      <td className="image-holder">
                        <img src="img/user/02.jpg"></img>
                      </td>
                      <td>JOjo</td>
                      <td>to watch</td>
                      <td className="no-display">NIyi</td>
                      <td className="no-display">
                        {" "}
                        <i>looks good</i>
                      </td>
                      <td className="no-display">20/01</td>
                      <td className="no-display">10am</td>
                      <td className="no-display">12pm</td>
                      <td className="no-display">Niyi</td>
                      <td>
                        {ANIMATIONS.map((title, i) => (
                          <DropdownBox title={title} />
                        ))}
                      </td>
                    </tr>
                  {/* {visitors.map(visitor => (
                    <tr className="gradeX">
                      <td></td>
                      <td className="dropTable">
                        <input class="js-entry-checkbox" type="checkbox" />
                      </td>
                      <td className="image-holder">
                        <img src="img/user/02.jpg"></img>
                      </td>
                      <td>{visitor.visitor}</td>
                      <td>{visitor.purpose}</td>
                      <td className="no-display">{visitor.host}</td>
                      <td className="no-display">
                        {" "}
                        <i>{visitor.privateNotes}</i>
                      </td>
                      <td className="no-display">{visitor.date}</td>
                      <td className="no-display">{visitor.signedIn}</td>
                      <td className="no-display">{visitor.signedOut}</td>
                      <td className="no-display">{visitor.checkedOutBy}</td>
                      <td>
                        {ANIMATIONS.map((title, i) => (
                          <DropdownBox title={title} />
                        ))}
                      </td>
                    </tr>
                    
                  ))} */}
            {/* </tbody>
              </table>
            </Datatable> */} */}
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};
export default VisitorsLog;
