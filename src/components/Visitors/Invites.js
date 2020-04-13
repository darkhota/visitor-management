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
                    <a class="dropdown-item" href="#"><i class="icon-action-redo"></i>&nbsp;&nbsp;Invite again</a>
                    <a class="dropdown-item" href="#"><i class="icon-trash"></i>&nbsp;&nbsp;Delete invite</a>
                </DropdownMenu>
            </Dropdown>
        </div>
        );
    }
}

class ChartRadial extends Component {
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
                        <CardHeader className="table-card-header">
                            
                            <h1>1 invite</h1>
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
										<option value="1">All Invites</option>
										<option value="2">My Invites</option>
	                              	</select>
                            <button href="#" className="btn btn-secondary btn-lg invite-btn"><Link to="/new-invites">New invite</Link> </button>
                        </CardHeader>
                        <CardBody>
                            <Datatable options={this.state.dtOptions1}>
                                <table className="table table-striped my-4 w-100 smaller">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th data-priority="2">Visitor Name</th>
                                            <th>Purpose of visit</th>
                                            <th className="sort-numeric no-display">Invited By</th>
                                            <th className="sort-alpha no-display" >Private Notes</th>
                                            <th className="no-display">Due at</th>  
                                            <th className="no-display"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="gradeX">
                                            <td></td>
                                            <td><Avatar name="Tioluwani Joseph" round="50px" size="50"/></td>
                                            <td>Joseph Tioluwani</td>
                                            <td>Visitor</td>
                                            <td className="no-display">Niyi Adisa</td>
                                            <td className="no-display">Come early</td>
                                            <td className="no-display">Mar 6, 2020</td>
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
            </ConfigProvider>
            );
    }

}

export default ChartRadial;
