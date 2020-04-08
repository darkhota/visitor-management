import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import $ from 'jquery';
import '../../styles/MyStyles/custom.css'
import Datatable from '../Tables/Datatable';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
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
        date: new Date()
        
       
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
                            <Flatpickr className="custom-select"

                                        options={{   altInput: true,
                                            altFormat: "F j, Y",
                                            dateFormat: "Y-m-d"}}
       
                                        value={date}
                                        onChange={date => {
                                        this.setState({ date });
                                        }}
                                    />
                            <select defaultValue="" className="custom-select" multiple="">
										<option value="1">All Visitors</option>
										<option value="2">My Visitors</option>
										<option value="3">Currently Signed In</option>
	                              	</select>
                            <button href="#" className="btn btn-secondary btn-lg invite-btn">Export</button>
                        </CardHeader>
                        <CardBody>
                            <Datatable options={this.state.dtOptions1}>
                                <table className="table table-striped my-4 w-100">
                                    <thead>
                                        <tr>
                                            <th data-priority="1"></th>
                                            <th >
                                            <div className="table-cell tw-align-middle tw-pl-1 ember-view log-chk">
                                                <input className="js-entry-checkbox" type="checkbox"/>
                                                </div>
                                                </th>
                                           
                                            <th></th>
                                            <th data-priority="2">Visitor</th>
                                            <th className="no-display">Purpose</th>
                                            <th className="sort-numeric ">Host</th>
                                            <th className="sort-alpha " >Private Notes</th>
                                            <th className="no-display">Date</th>
                                            <th className="no-display">Signed in</th>
                                            <th className="no-display">Signed out</th>
                                            <th className="no-display">Checked Out By</th>
                                            <th className="no-display"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="gradeX">
                                            <td></td>
                                            <td className="dropTable"><input class="js-entry-checkbox" type="checkbox"/></td>
                                            <td className="image-holder"><img src="img/user/02.jpg"></img></td>
                                            <td>Joseph Tioluwani</td>
                                            <td>Visitor</td>
                                            <td className="no-display">Niyi Adisa</td>
                                            <td className="no-display"> Come early</td>
                                            <td className="no-display">Mar 6, 2020</td>
                                            <td className="no-display">2:06 pm</td>
                                            <td className="no-display">2:35pm</td>
                                            <td className="no-display">Ilyas</td>
                                            <td className="no-display">{ ANIMATIONS.map((title, i) => (
                   
                                             <DropdownBox title={title}/>                     
                                              ))}</td>
                                        </tr>
                                        <tr className="gradeC">
                                            <td></td>
                                            <td><input class="js-entry-checkbox" type="checkbox"/></td>
                                            <td className="image-holder"><img src="img/user/01.jpg"></img></td>
                                            <td>Kamsi Kodi</td>
                                            <td>Visitor</td>
                                            <td className="no-display">Niyi Adisa</td>
                                            <td className="no-display">Come early</td>
                                            <td className="no-display">Mar 6, 2020</td>
                                            <td className="no-display">2:06 pm</td>
                                            <td className="no-display">Sign out</td>
                                            <td className="no-display">Ilyas</td>
                                            <td className="no-display">{ ANIMATIONS.map((title, i) => (
                   
                   <DropdownBox title={title}/>                     
                    ))}</td>
                                        </tr>
                                        <tr className="gradeA">
                                            <td></td>
                                            <td><input class="js-entry-checkbox" type="checkbox"/></td>
                                            <td className="image-holder"><img src="img/user/04.jpg"></img></td>
                                            <td >
                                                Niyi Adisa</td>
                                            <td>Visitor</td>
                                            <td className="no-display">Niyi Adisa</td>
                                            <td className="no-display">Come early</td>
                                            <td className="no-display">Mar 6, 2020</td>
                                            <td className="no-display">2:06 pm</td>
                                            <td className="no-display">2:36pm</td>
                                            <td className="no-display">Ilyas</td>
                                            <td className="no-display">{ ANIMATIONS.map((title, i) => (
                   
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
