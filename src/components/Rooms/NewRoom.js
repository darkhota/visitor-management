import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import '../../styles/MyStyles/custom.css'
import Select from 'react-select';
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    FormFeedback,
    FormText,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    const STATES = [
        { value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' },
        { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
        { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
        { value: 'queensland', label: 'Queensland', className: 'State-Qld' },
        { value: 'western-australia', label: 'Western Australia', className: 'State-WA' },
        { value: 'south-australia', label: 'South Australia', className: 'State-SA' },
        { value: 'tasmania', label: 'Tasmania', className: 'State-Tas' },
        { value: 'northern-territory', label: 'Northern Territory', className: 'State-NT' },
    ]
    function styleFn(provided, state) {
        return { ...provided, color: state.isFocused ? '#00914b' : '' };
      }
      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          
          color: state.isSelected ? '#00914b' : '',
          padding: 20,
        }),
       
    }
class FormStandard extends Component {
    constructor() {
        super();
     
        this.state = {
          date: new Date()
        };
      }


    state = {
        dropdownOpen: false,
        splitButtonOpen: false
    }

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit = () => {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    onSubmit = e => {
        console.log('Form submitted..');
        e.preventDefault();
    }

    render() {
        const { date } = this.state;
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        const { selectedOptionMulti } = this.state;

        return (
            <ContentWrapper>
                
                
               <div className="form-card">
               <div className=" card-top-tablet">
                            <h3><a href="/my-rooms">
                               <i className="far fa-arrow-alt-circle-left" ></i> 
                           </a>
                              &nbsp;Create a new room
                            </h3>
                            </div >
                            <div className="visitorForm new-room-form" >
                                   
                            <div className="input-field">
                                    <p>Room Name <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter full name"/>
                                    </div>
                                        
                                        <div className="form-gird">
                                        <div className="flat-width">
                                        <div className="input-field">
                                            
                                        <p>Room manager <span className="required">*</span></p>
                                        <Select
                                        theme={theme => ({
                                            ...theme,
                                            borderRadius: 5,                                            
                                            colors: {
                                              ...theme.colors,
                                             
                                              primary: '#00914b',
                                              
                                            },
                                          })}
                                        styles={customStyles}
                                            name="select-name"
                                            placeholder="Select visitor"
                                            value={value}
                                            onChange={this.handleChangeSelect}
                                            options={STATES}
                                            
                                        />
                                        </div>
                                                    </div>
                                                   
                                                    <div className="flat-width">
                                                    <p>Capacity <span className="required">*</span></p>
                                                    <input class="form-control" type="number" placeholder="Number Of Occupants"></input>
                                                           </div>
                                        
                                        </div>
                                       
                                        
                                    <div className="input-field">
                                    <p>Location <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter full name"/>
                                    </div>
                                    
                                    <div className="input-field">
                                    <p>Description</p>

                                        <Card body>
                                            <textarea rows="5" className="form-control note-editor note-editor-margin"></textarea>
                                        </Card>
                                    </div>
                                   
                                </div>
                                <hr></hr>
                                    
                                    <button class="invite-btn" type="button"><i class="icon-paper-plane"></i>&nbsp;&nbsp;Save</button>
                                    
               </div>
                
            </ContentWrapper>
            );
    }

}

export default FormStandard;
