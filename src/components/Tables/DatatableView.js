import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import $ from 'jquery';
import '../../custom.css'
import Datatable from './Datatable';
import { Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import classNames from 'classnames';
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";

class DropdownBox extends Component  {
    
    state = { ddOpen: false }
    toggle = () => this.setState({
            ddOpen: !this.state.ddOpen
    })
    render() {
        const ddClass = classNames('animated', this.props.title);
        
        return (
            <div >
                <Dropdown isOpen={this.state.ddOpen} toggle={this.toggle}>
                    <DropdownToggle className="remove-border">
                    <i className="fa fa-ellipsis-h"></i>
                    </DropdownToggle>
                    <DropdownMenu className={ddClass}>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem active>Active Item</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

class DatatableView extends Component {
    constructor() {
        super();
     
        this.state = {
          date: new Date()
        };
      }

    state = {
        dtOptions1: {
            'paging': true, // Table pagination
            'ordering': true, // Column ordering
            'info': true, // Bottom left status text
            responsive: true,
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            oLanguage: {
                sSearch: '<em class="fa fa-search"></em>',
                
                info: 'Showing page _PAGE_ of _PAGES_',
                zeroRecords: 'Nothing found - sorry',
                infoEmpty: 'No records available',
                infoFiltered: '(filtered from _MAX_ total records)',
                oPaginate: {
                    sNext: '<em class="fa fa-caret-right"></em>',
                    sPrevious: '<em class="fa fa-caret-left"></em>'
                }
            }
        },
        
       
    }

    // Access to internal datatable instance for customizations
    dtInstance = dtInstance => {
        const inputSearchClass = 'datatable_input_col_search';
        const columnInputs = $('tfoot .' + inputSearchClass);
        // On input keyup trigger filtering
        columnInputs
            .keyup(function() {
                dtInstance.fnFilter(this.value, columnInputs.index(this));
            });
    }

    render() {
        const { date } = this.state;
        const ANIMATIONS = ['fadeIn',]
        return (
            <ContentWrapper>
                <Container fluid>
                    {/* DATATABLE DEMO 1 */}
                    <Card>
                        <CardHeader className="table-card-header">
                            
                            <h1>3 visitors</h1>
                            <Flatpickr

                                        options={{   altInput: true,
                                            altFormat: "F j, Y",
                                            dateFormat: "Y-m-d"}}
       
                                        value={date}
                                        onChange={date => {
                                        this.setState({ date });
                                        }}
                                    />
                            <select className="selectVisitors">
										<option value="1">All Visitors</option>
										<option value="2">My Visitors</option>
										<option value="3">Currently Signed In</option>
	                              	</select>
                            <button href="#" className="table button">Export</button>
                        </CardHeader>
                        <CardBody>
                            <Datatable options={this.state.dtOptions1}>
                                <table className="table table-striped my-4 w-100">
                                    <thead>
                                        <tr>
                                            <th data-priority="1"><input class="js-entry-checkbox" type="checkbox"/></th>
                                            <th></th>
                                            <th>Visitor</th>
                                            <th>Purpose</th>
                                            <th className="sort-numeric">Host</th>
                                            <th className="sort-alpha" data-priority="2">Private Notes</th>
                                            <th>Date</th>
                                            <th>Signed in</th>
                                            <th>Signed out</th>
                                            <th>Checked Out By</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="gradeX">
                                            <td><input class="js-entry-checkbox" type="checkbox"/></td>
                                            <td className="image-holder"><img src="img/user/02.jpg"></img></td>
                                            <td>Joseph Tioluwani</td>
                                            <td>Visitor</td>
                                            <td>Niyi Adisa</td>
                                            <td>Come early</td>
                                            <td>Mar 6, 2020</td>
                                            <td>2:06 pm</td>
                                            <td>2:35pm</td>
                                            <td>Ilyas</td>
                                            <td>{ ANIMATIONS.map((title, i) => (
                   
                                             <DropdownBox title={title}/>                     
                                              ))}</td>
                                        </tr>
                                        <tr className="gradeC">
                                            <td><input class="js-entry-checkbox" type="checkbox"/></td>
                                            <td className="image-holder"><img src="img/user/01.jpg"></img></td>
                                            <td>Kamsi Kodi</td>
                                            <td>Visitor</td>
                                            <td>Niyi Adisa</td>
                                            <td>Come early</td>
                                            <td>Mar 6, 2020</td>
                                            <td>2:06 pm</td>
                                            <td>Sign out</td>
                                            <td>Ilyas</td>
                                            <td>{ ANIMATIONS.map((title, i) => (
                   
                   <DropdownBox title={title}/>                     
                    ))}</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td><input class="js-entry-checkbox" type="checkbox"/></td>
                                            <td className="image-holder"><img src="img/user/04.jpg"></img></td>
                                            <td >
                                                Niyi Adisa</td>
                                            <td>Visitor</td>
                                            <td>Niyi Adisa</td>
                                            <td>Come early</td>
                                            <td>Mar 6, 2020</td>
                                            <td>2:06 pm</td>
                                            <td>2:36pm</td>
                                            <td>Ilyas</td>
                                            <td>{ ANIMATIONS.map((title, i) => (
                   
                   <DropdownBox title={title}/>                     
                    ))}</td>
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

export default DatatableView;
