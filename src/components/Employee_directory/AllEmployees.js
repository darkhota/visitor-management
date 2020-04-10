import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import $ from 'jquery';
import '../../styles/MyStyles/custom.css'
import Datatable from '../Tables/Datatable';
import { Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import classNames from 'classnames';
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';

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

class ChartRadial extends Component {

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
                        <CardHeader className="table-card-header employee-header">
                            
                            <h1>1 Employee</h1>
                           
                            <select className="selectVisitors">
										<option value="1">All Employees</option>
										<option value="2">My Employees</option>
	                              	</select>
                                      
                                      <button href="#" className="table button"><Link to="/form-standard">New</Link> </button>
                                      
                           <div className="align-left">
                               <button href="#" className="table button "><Link to="/form-standard">Export</Link> </button></div>
                            <div className="align-left2"><button href="#" className="table button"><Link to="/form-standard">Import employees</Link> </button></div>
                            
                        </CardHeader>
                        <CardBody>
                            <Datatable options={this.state.dtOptions1}>
                                <table className="table table-striped my-4 w-100">
                                    <thead>
                                        <tr>
                                            
                                            <th></th>
                                            <th> Name</th>
                                            <th>Account type</th>
                                            <th className="sort-numeric">Gender</th>
                                            <th className="sort-alpha" data-priority="2">Company</th>
                                            <th>Email</th>  
                                            <th>Status</th>  
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="gradeX">
                                           
                                            <td className="image-holder"><img src="img/user/02.jpg"></img></td>
                                            <td>Joseph Tioluwani</td>
                                            <td><button href="#" className="btn btn-secondary btn-lg invite-btn table-round-btn">Visitor </button></td>
                                            <td><button href="#" className="btn btn-secondary btn-lg invite-btn table-round-btn table-dark-btn ">Male </button></td>
                                            <td>Techbarn</td>
                                            <td>tioluwanijoseph@gmail.com</td>
                                            <td><button href="#" className="btn btn-secondary btn-lg invite-btn table-round-btn">Active </button></td>
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

export default ChartRadial;