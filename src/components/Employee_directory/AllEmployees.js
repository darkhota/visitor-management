import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import $ from 'jquery';
import '../../styles/MyStyles/custom.css'
import Datatable from '../Tables/Datatable';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Avatar, { ConfigProvider } from 'react-avatar';
class DropdownBox extends Component  {
    
    state = { ddOpen: false }
    toggle = () => this.setState({
            ddOpen: !this.state.ddOpen
    })
    render() {
        const ddClass = classNames('animated', this.props.title);
        
        return (
            <div >
                <Dropdown isOpen={this.state.ddOpen} toggle={this.toggle} >
                    <DropdownToggle className="remove-border" tag="span"
        data-toggle="dropdown"
        >
                    <i className="fa fa-ellipsis-h"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                        <a className="dropdown-item" href="#"><i class="icon-user"></i>&nbsp;&nbsp;Profile</a>
                        <a class="dropdown-item" href="#"><i class="icon-ban"></i>&nbsp;&nbsp;Change status</a>
                        <a class="dropdown-item" href="#"><i class="icon-settings"></i>&nbsp;&nbsp;Reset password</a>
                        <hr></hr>
                        <a class="dropdown-item" href="#"><i class="icon-trash"></i>&nbsp;&nbsp;Delete user</a>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

class AllEmployees extends Component {


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
            <ConfigProvider colors={['hsl(172, 33%, 45%', 'blue', 'blue']}>
            <ContentWrapper>
                <Container fluid>
                    {/* DATATABLE DEMO 1 */}
                    <Card>
                        <CardHeader className=" employee-header">
                            
                            <h1>1 Employee</h1>
                            <div className="button-align">
                            <button className="btn btn-secondary btn-lg invite-btn employee-btn"><Link to="/new-employee"> Create New</Link> </button>
                            </div>
                            </CardHeader>
                            <div className="subheader">
                            <div className="align-left">
                               <button  className="btn btn-secondary btn-lg invite-btn white-btn"><Link to="/#" className="black-link">Export</Link> </button></div>
                            <div className="align-left2"><button className="btn btn-secondary btn-lg invite-btn"><Link to="/#" className="black-link">Import employees</Link> </button></div>
                            <div className="button-align no-align">
                            <select defaultValue="" className="custom-select" multiple="">
										<option value="1">All Employees</option>
										<option value="2">My Employees</option>
	                              	</select></div>       
                           </div>
                        
                        <CardBody>
                            <Datatable options={this.state.dtOptions1}>
                                <table className="table table-striped my-4 w-100 smaller">
                                    <thead>
                                        <tr>
                                            <th data-priority="1"></th>
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
                                           <td></td>
                                            <td><Avatar name="Tioluwani Joseph" round="50px" size="50"/></td>
                                            <td>Joseph Tioluwani</td>
                                            <td><button href="#" className=" table-round-btn">Visitor </button></td>
                                            <td><button href="#" className="  table-round-btn table-dark-btn ">Male </button></td>
                                            <td>Techbarn</td>
                                            <td>tioluwanijoseph@gmail.com</td>
                                            <td><button href="#" className=" table-round-btn">Active </button></td>
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
            </ConfigProvider>
            );
    }

}

export default AllEmployees;
